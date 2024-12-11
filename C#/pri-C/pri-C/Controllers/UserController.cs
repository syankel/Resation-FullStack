using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL;
using BLL;
using DTO;
namespace pri_C.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserRepository iuserRepository;

        public UserController(IUserRepository iuserRepository)
        {
            this.iuserRepository = iuserRepository;
        }
        [HttpGet("GetUsers")]
        public ActionResult<List<UserDTO>> GetUsers()
        {
            return Ok(iuserRepository.GetUsers());
        }
        [HttpGet("GetUserById/{id:int}")]
        public ActionResult<UserDTO> GetUserById(int id)
        {
            if (id < 0)
                return BadRequest(ModelState.IsValid);
            UserDTO u = iuserRepository.GetUserById(id);
            if (u == null)
                return NotFound();
            return Ok(u);
        }

       

        [HttpPost("AddUser")]

        public ActionResult<UserDTO> AddUser(UserDTO s)
        {
            if (s == null && !ModelState.IsValid)
                return BadRequest(ModelState);
            UserDTO u = iuserRepository.GetUserById(s.Id);
            if (u != null)
                return Conflict();
            iuserRepository.AddUser(s);
            return CreatedAtAction(nameof(AddUser), new { Id = s.Id }, s);
        }
        [HttpPut("UpdateUser/{id:int}")]
        public IActionResult UpdateUser(UserDTO u)
        {
            if (u == null && ModelState.IsValid)
                return BadRequest(ModelState);
            iuserRepository.UpdateUser(u);
            return Ok(u);
        }


        [HttpDelete("DeleteUser")]
        public ActionResult DeleteUser(User u)
        {
            if (u.Id> 0 || u.Id == null)
                return BadRequest(ModelState);
            if (iuserRepository.GetUserById(u.Id) == null)
            {
                return NotFound();
            }
            iuserRepository.DeleteUser(u);
            return NoContent();
        }
    }
}
