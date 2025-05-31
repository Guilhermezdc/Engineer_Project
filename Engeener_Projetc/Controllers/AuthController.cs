using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Engeener_Projetc.Data;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;


namespace Engeener_Projetc.Controllers;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly IConfiguration _configuration;

    public AuthController(AppDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }
    
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginRequest requests)
    {
        
        var user = _context.Users.SingleOrDefault(u => u.UserName == requests.Username);

        if (user == null)
            return Unauthorized(new { message = "Username or password is incorrect" });
        
        if (user.PasswordHash != requests.Password)
            return Unauthorized(new { message = "Username or password is incorrect" });
        
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"] ?? string.Empty);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Name, user.UserName),
                // Aqui pode adicionar outros claims se quiser, como roles
            }),
            Expires = DateTime.UtcNow.AddHours(1),
            Issuer = _configuration["Jwt:Issuer"],
            Audience = _configuration["Jwt:Audience"],
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        var tokenString = tokenHandler.WriteToken(token);

        return Ok(new { token = tokenString });
            
        }

    };


public class LoginRequest
{
    [JsonPropertyName("login")]
    public string Username { get; set; }
    
    [JsonPropertyName("password")]
    public string Password { get; set; }
}