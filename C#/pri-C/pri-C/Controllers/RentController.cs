using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL;
using BLL;
using DTO;
namespace pri_C.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentController : ControllerBase
    {
        private IRentRepository irentRepository;

        public RentController(IRentRepository irentRepository)
        {
            this.irentRepository = irentRepository;
        }

        [HttpGet("GetRents")]
        public ActionResult<List<Rent>> GetRents()
        {
            if (irentRepository.GetRents() == null)
                return NotFound();
            return Ok(irentRepository.GetRents());
        }

        [HttpGet("GetRentById/{id:int}")]
        public ActionResult<Rent> GetRentById(int id)
        {
            if (id < 0)
                return BadRequest(ModelState.IsValid);
            RentDTO r = irentRepository.GetRentById(id);
            if (r == null)
                return NotFound();
            return Ok(r);
        }
        [HttpPost("AddRent")]
        public ActionResult<RentDTO> AddRent(RentDTO a)
        {

            if (a == null || !ModelState.IsValid)
                return BadRequest(ModelState);
            //if (irentRepository.GetRentById(a.Id) != null)
            //    return Conflict();
            irentRepository.AddRent(a);
            return CreatedAtAction(nameof(GetRentById), new { id = a.Id }, a);
        }

        [HttpPut("UpdateRent/{id:int}")]
        public ActionResult<Rent> UpdateRent(int id, RentDTO r)
        {
            if (r == null && ModelState.IsValid)
                return BadRequest(ModelState);
            if (irentRepository.GetRentById(id) == null || r.Id != id)
                return Conflict();
            irentRepository.UpdateRent(id, r);
            return Ok(r);
        }

        [HttpDelete("DeleteRent")]
        public ActionResult DeleteRent(Rent r)
        {
            if (r.Id > 0 || r.Id == null)
                return BadRequest(ModelState);
            if (irentRepository.GetRentById(r.Id) == null)
            {
                return NotFound();
            }
            irentRepository.DeleteRent(r);
            return NoContent();
        }
    }
}
