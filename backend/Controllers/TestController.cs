using FourBets.Data;

using FourBets.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FourBets.Controllers;

[Route("api/test")]
[ApiController]
public class TestController : ControllerBase
{

    [HttpPost]
    public string Post()
    {
        return "Hi";
    }

}
