using Microsoft.AspNetCore.Mvc;

namespace Engeener_Projetc.Controllers;

[Microsoft.AspNetCore.Components.Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest requests)
    {
        if (requests is { Username: "admin", Password: "123" })
            
        {
            return Ok(new { token = "123" });
        }
        
        return Unauthorized(new {message = "Username or password is incorrect"});
        
    }
}

public class LoginRequest
{
    public string Username { get; set; }
    public string Password { get; set; }
}