using FourBets.Data;
using FourBets.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourBets.Controllers;

[Route("api/groups")]
[ApiController]
public class GroupsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public GroupsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Groups
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Group>>> GetGroups()
    {
        return await _context.Groups.ToListAsync();
    }

    // GET: api/Groups/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Group>> GetGroup(Guid id)
    {
        var @group = await _context.Groups.FindAsync(id);

        if (@group == null)
        {
            return NotFound();
        }

        return @group;
    }

    // PUT: api/Groups/5

    [HttpPut("{id}")]
    public async Task<IActionResult> PutGroup(Guid id, Group @group)
    {
        if (id != @group.Id)
        {
            return BadRequest();
        }

        _context.Entry(@group).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!GroupExists(id))
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
    public async Task<ActionResult<Group>> PostGroup(Group @group)
    {
        _context.Groups.Add(@group);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetGroup", new { id = @group.Id }, @group);
    }

    // DELETE: api/Groups/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteGroup(Guid id)
    {
        var @group = await _context.Groups.FindAsync(id);
        if (@group == null)
        {
            return NotFound();
        }

        _context.Groups.Remove(@group);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool GroupExists(Guid id)
    {
        return _context.Groups.Any(e => e.Id == id);
    }
}

