using FourBets.Data;
using FourBets.Dto;
using FourBets.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IO = System.IO;

namespace FourBets.Controllers;

[Route("api/news")]
[ApiController]
public class NewsController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly IWebHostEnvironment _env;

    public NewsController(ApplicationDbContext context, IWebHostEnvironment env)
    {
        _context = context;
        _env = env;
    }

    // GET: api/News
    [HttpGet]
    public async Task<ActionResult<IEnumerable<News>>> GetNews()
    {
        return await _context.News.ToListAsync();
    }

    // GET: api/News/5
    [HttpGet("{id}")]
    public async Task<ActionResult<News>> GetNews(Guid id)
    {
        var news = await _context.News.FindAsync(id);

        if (news == null)
        {
            return NotFound();
        }

        return news;
    }

    // PUT: api/News/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutNews(Guid id, News news)
    {
        if (id != news.Id)
        {
            return BadRequest();
        }

        _context.Entry(news).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!NewsExists(id))
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

    // POST: api/News
    [HttpPost]
    public async Task<ActionResult<News>> PostNews([FromForm] CreateNewsDto dto)
    {
        try
        {
            string ext = Path.GetExtension(dto.Image.FileName);
            string fileName = $"{Guid.NewGuid().ToString()}{ext}";
            string path = Path.Combine(_env.WebRootPath, "images/", fileName);
            using (Stream stream = new FileStream(path, FileMode.Create))
            {
                dto.Image.CopyTo(stream);
            }

            var news = new News();
            news.Title = dto.Title;
            news.Body = dto.Body;
            news.ImageUrl = GetImageUrl(fileName);

            _context.News.Add(news);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNews", new { id = news.Id }, news);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    // DELETE: api/News/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteNews(Guid id)
    {
        var news = await _context.News.FindAsync(id);
        if (news == null)
        {
            return NotFound();
        }

        _context.News.Remove(news);
        await _context.SaveChangesAsync();
        var fileName = Path.GetFileName(news.ImageUrl);
        try
        {
            if (fileName != null)
            {
                string path = Path.Combine(_env.WebRootPath, "images/", fileName);
                IO.File.Delete(path);

            }

        }
        catch (System.Exception)
        {

            throw;
        }

        return NoContent();
    }

    private bool NewsExists(Guid id)
    {
        return _context.News.Any(e => e.Id == id);
    }

    private string GetImageUrl(string imageName)
    {
        return string.Format("{0}://{1}/images/{2}", Request.Scheme, Request.Host, imageName);
    }
}

