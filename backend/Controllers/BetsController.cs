using FourBets.Data;

using FourBets.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourBets.Controllers;

[Route("api/bets")]
[ApiController]
public class BetsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public BetsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Bets
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Bet>>> GetBets()
    {
        return await _context.Bets.ToListAsync();
    }

    // GET: api/Bets/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Bet>> GetBet(Guid id)
    {
        var bet = await _context.Bets.FindAsync(id);

        if (bet == null)
        {
            return NotFound();
        }

        return bet;
    }

    // PUT: api/Bets/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutBet(Guid id, Bet bet)
    {
        if (id != bet.Id)
        {
            return BadRequest();
        }

        _context.Entry(bet).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!BetExists(id))
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

    // POST: api/Bets
    [HttpPost]
    public async Task<ActionResult<Bet>> PostBet(Bet bet)
    {
        _context.Bets.Add(bet);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetBet", new { id = bet.Id }, bet);
    }

    // DELETE: api//Bets/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBet(Guid id)
    {
        var bet = await _context.Bets.FindAsync(id);
        if (bet == null)
        {
            return NotFound();
        }

        _context.Bets.Remove(bet);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool BetExists(Guid id)
    {
        return _context.Bets.Any(e => e.Id == id);
    }
}
