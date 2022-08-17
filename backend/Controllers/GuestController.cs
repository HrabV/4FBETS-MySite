using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FourBets.Controllers;

[ApiController]
[Authorize]
[Route("/guest")]
public class GuestController : ControllerBase
{
    [HttpGet]
    public string Get()
    {
        return "Hello Guest";
    }
}