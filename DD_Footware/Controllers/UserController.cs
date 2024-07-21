using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging; // Add this
using System.Linq;
using System.Threading.Tasks;
using DD_Footware.Models;

namespace DD_Footware.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly DDContext _context;
        private readonly ILogger<UserController> _logger; // Add this

        public UserController(DDContext context, ILogger<UserController> logger) // Modify constructor
        {
            _context = context;
            _logger = logger; // Initialize logger
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            _logger.LogInformation("Login attempt for email: {Email}", request.Email); // Log email

            var user = _context.Users.FirstOrDefault(u => u.Email == request.Email && u.Password == request.Password);

            if (user == null)
            {
                _logger.LogWarning("Invalid login attempt for email: {Email}", request.Email); // Log invalid attempt
                return Unauthorized(new { message = "Invalid email or password" });
            }

            _logger.LogInformation("Successful login for email: {Email}", request.Email); // Log successful login

            // Return user details instead of token
            return Ok(new { user.Name, user.Email, user.Role, user.Outlet, user.OutletID });
        }
    }

    public class LoginRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
