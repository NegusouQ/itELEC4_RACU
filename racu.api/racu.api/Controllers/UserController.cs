using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using racu.api.DTO;
using racu.api.Entities;
using racu.api.Services;

namespace racu.api.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserService service;

        public UserController(IUserService service)
        {
            this.service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] UserRequest request)
        {
            try
            {
                var user = await service.Register(new User {
                    UserName = request.Username,
                    Password = request.Password,
                    Name = request.Name,
                    Avatar = request.Avatar
                });
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> Login([FromQuery] LoginRequest request)
        {
            try
            {
                return Ok(await service.Login(request.Username, request.Password));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            try
            {
                return Ok(await service.GetById(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] UserRequest request)
        {
            try
            {
                var user = await service.Update(new User
                {
                    Id = request.Id,
                    UserName = request.Username,
                    Password = request.Password,
                    Name = request.Name,
                    Avatar = request.Avatar
                });
                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
