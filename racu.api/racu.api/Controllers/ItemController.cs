using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using racu.api.DTO;
using racu.api.Entities;
using racu.api.Services;

namespace racu.api.Controllers
{
    [ApiController, Route("api/[controller]")]
    public class ItemController : Controller
    {
        private readonly IItemService service;

        public ItemController(IItemService service)
        {
            this.service = service;
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] ItemRequest request)
        {
            try
            {
                return Ok(await service.Add(new Item
                {
                    UserId = request.UserId,
                    Title = request.Title,
                    Description = request.Description,
                    Image = request.Image
                }));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await service.Get());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] ItemRequest request)
        {
            try
            {
                return Ok(await service.Update(new Item
                {
                    Id = request.Id,
                    Title = request.Title,
                    Description = request.Description,
                    Image = request.Image,
                    UserId = request.UserId
                }));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            try
            {
                return Ok(await service.Delete(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
