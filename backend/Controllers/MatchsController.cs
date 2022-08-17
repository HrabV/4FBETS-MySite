
using FourBets.Data;
using FourBets.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourBets.Controllers;

[Route("api/match")]
[ApiController]
public class MatchsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public MatchsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Matchs
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Match>>> GetMatchs()
    {
        return await _context.Matchs.ToListAsync();
    }

    // GET: api/Matchs/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Match>> GetMatch(Guid id)
    {
        var match = await _context.Matchs.FindAsync(id);

        if (match == null)
        {
            return NotFound();
        }

        return match;
    }

    // PUT: api/Groups/5

    [HttpPut("{id}")]
    public async Task<IActionResult> PutMatch(Guid id, Match match)
    {
        if (id != match.Id)
        {
            return BadRequest();
        }

        _context.Entry(match).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!MatchExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/Groups
    [HttpPost]
    public async Task<ActionResult<Match>> PostMatch(Match match)
    {
        _context.Matchs.Add(match);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetMatch", new { id = match.Id }, match);
    }

    // DELETE: api/Groups/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMatch(Guid id)
    {
        var match = await _context.Matchs.FindAsync(id);
        if (match == null)
        {
            return NotFound();
        }

        _context.Matchs.Remove(match);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool MatchExists(Guid id)
    {
        return _context.Matchs.Any(e => e.Id == id);
    }
}

