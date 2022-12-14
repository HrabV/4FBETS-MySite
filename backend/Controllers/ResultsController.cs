using FourBets.Data;

using FourBets.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourBets.Controllers;

[Route("api/results")]
[ApiController]
public class ResultsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ResultsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Results
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Result>>> GetResults()
    {
        return await _context.Results.ToListAsync();
    }

    // GET: api/Results/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Result>> GetResult(Guid id)
    {
        var result = await _context.Results.FindAsync(id);

        if (result == null)
        {
            return NotFound();
        }

        return result;
    }

    // PUT: api/Results/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutResult(Guid id, Result result)
    {
        if (id != result.Id)
        {
            return BadRequest();
        }

        _context.Entry(result).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ResultExists(id))
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

    // POST: api/Results
    [HttpPost]
    public async Task<ActionResult<Result>> PostResult(Result result)
    {
        _context.Results.Add(result);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetResult", new { id = result.Id }, result);
    }

    // DELETE: api/Results/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteResult(Guid id)
    {
        var result = await _context.Results.FindAsync(id);
        if (result == null)
        {
            return NotFound();
        }

        _context.Results.Remove(result);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ResultExists(Guid id)
    {
        return _context.Results.Any(e => e.Id == id);
    }
}
