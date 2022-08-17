using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using FourBets.Data;
using FourBets.Dto;
using FourBets.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace FourBets.Controllers;

[Route("/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IConfiguration _config;
    private readonly ILogger<AuthController> _logger;

    public AuthController(ApplicationDbContext context, IConfiguration config, ILogger<AuthController> logger)
    {
        _context = context;
        _config = config;
        _logger = logger;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto dto)
    {
        try
        {
            var user = await _context.Users.Include(u => u.Role).Select(u => new
            {
                NickName = u.NickName,
                Email = u.Email,
                Password = u.Password,
                Role = u.Role.Name
            }).SingleOrDefaultAsync(u => u.Email == dto.Email);

            if (user == null) return Unauthorized(new
            {
                status = 401,
                message = "user not found"
            });

            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
            {
                return Unauthorized(new
                {
                    status = 401,
                    message = "incorrect password"
                });
            }

            var accessToken = GenerateJWTToken(user.Email, user.Role);

            return Ok(new
            {
                nickname = user.NickName,
                email = user.Email,
                role = user.Role,
                accessToken
            });
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Login Error");
            return StatusCode(500);
        }
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {
        try
        {
            var candidate = await _context.Users.SingleOrDefaultAsync(u => u.Email == dto.Email);
            if (candidate != null) return BadRequest(new
            {
                status = 400,
                message = "user with this email already exists"
            });

            var userRole = await _context.UserRoles.SingleOrDefaultAsync(r => r.Name == "user");

            var user = new User
            {
                Role = userRole,
                Email = dto.Email,
                NickName = dto.NickName,
                Password = BCrypt.Net.BCrypt.HashPassword(dto.Password),
            };

            await _context.Users.AddAsync(user);

	    await _context.SaveChangesAsync();
            var accessToken = GenerateJWTToken(user.Email, user.Role.Name);



            return Ok(new
            {
                nickname = user.NickName,
                email = user.Email,
                role = user.Role.Name,
                accessToken
            });
        }
        catch (Exception e)
        {
            _logger.LogError(e, "Registration Error");
            return StatusCode(500);
        }
    }


    private string GenerateJWTToken(string Email, string Role)
    {
        var claims = new List<Claim>{
                new Claim("email", Email),
                new Claim("role", Role)
            };

        var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWT:Secret"]));

        var token = new JwtSecurityToken(
            issuer: _config["JWT:ValidIssuer"],
            audience: _config["JWT:ValidAudience"],
            expires: DateTime.Now.AddDays(3),
            claims: claims,
            signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
