using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL;
using BLL;
using DTO;
using Microsoft.AspNetCore.Cors;

namespace pri_C.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class ApartmentController : ControllerBase
    {
        private IApartmentRepository iapartmentRepository;

        public ApartmentController(IApartmentRepository iapartmentRepository)
        {
            this.iapartmentRepository = iapartmentRepository;
        }

        [HttpGet("GetApartemnts")]
        public ActionResult<List<Apartment>> GetApartemnts()
        {
            return Ok(iapartmentRepository.GetApartemnts());
        }

        [HttpGet("GetApartemntById/{id}")]
        public ActionResult<ApartmentDTO> GetApartemntById(int id)
        {
            if (id < 0)
                return BadRequest(ModelState.IsValid);
            ApartmentDTO a = iapartmentRepository.GetApartemntById(id);
            if ( a== null)
                return NotFound();
            return Ok(a);
        }


        [HttpPost("AddApartment")]
        public ActionResult<ApartmentDTO> AddApartment(ApartmentDTO a)
        {

            if (a == null || !ModelState.IsValid)
                return BadRequest(ModelState);
            if (iapartmentRepository.GetApartemntById(a.Id) != null)
                return Conflict();
            iapartmentRepository.AddApartment(a);
            return CreatedAtAction(nameof(GetApartemntById), new { id = a.Id }, a);
        }

        [HttpPut("UpdateApartment")]
        public IActionResult UpdateApartment( ApartmentDTO apartment)
        {
            if (apartment == null && ModelState.IsValid)
                return BadRequest(ModelState);
            iapartmentRepository.UpdateApartment(apartment);
            return Ok(apartment);
        }

        [HttpDelete("DeleteApartemnt")]
        public ActionResult DeleteApartemnt(Apartment a)
        {
            if (a == null)
                return BadRequest(ModelState);
            if (iapartmentRepository.GetApartemntById(a.Id) == null)
            {
                return NotFound();
            }
            iapartmentRepository.DeleteApartemnt(a);
            return NoContent();
        }
    }
}
