using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DAL;
using BLL;
using DTO;
namespace pri_C.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private IFeedbackRepository ifeedbackRepository;

        public FeedbackController(IFeedbackRepository ifeedbackRepository)
        {
            this.ifeedbackRepository = ifeedbackRepository;
        }

        [HttpGet("GetFeedbacks")]
        public ActionResult<List<Feedback>> GetFeedbacks()
        {
            if (ifeedbackRepository.GetAllFeedbacks() == null)
                return NotFound();
            return Ok(ifeedbackRepository.GetAllFeedbacks());
        }

        [HttpGet("GetFeedbackById/{id:int}")]
        public ActionResult<FeedbackDTO> GetFeedbackById(int id)
        {
            if (id < 0)
                return BadRequest(ModelState.IsValid);
            FeedbackDTO f = ifeedbackRepository.GetFeedbackById(id);
            if (f == null)
                return NotFound();
            return Ok(f);
        }


        [HttpPost("AddFeedback")]
        public ActionResult<FeedbackDTO> AddFeedback(FeedbackDTO f)
        {
            if (f == null && !ModelState.IsValid)
                return BadRequest(ModelState);
            FeedbackDTO f2 = ifeedbackRepository.GetFeedbackById(f.Id);
            if (f2 != null)
                return Conflict();
            ifeedbackRepository.AddFeedback(f);
            return CreatedAtAction(nameof(GetFeedbackById), new { Id = f.Id },f);
        }

        [HttpPut("UpdateFeedback/{id:int}")]
        public ActionResult<FeedbackDTO> UpdateFeedback(int id, FeedbackDTO f)
        {
            if (f == null && ModelState.IsValid)
                return BadRequest(ModelState);
            if (ifeedbackRepository.GetFeedbackById(id) == null || f.Id != id)
                return Conflict();
            ifeedbackRepository.UpdateFeedback(id, f);
            return Ok(f);
        }

        [HttpDelete("DeleteFeedback")]
        public ActionResult DeleteFeedback(Feedback f)
        {
            if (f.Id > 0 || f.Id == null)
                return BadRequest(ModelState);
            if (ifeedbackRepository.GetFeedbackById(f.Id) == null)
            {
                return NotFound();
            }
            ifeedbackRepository.DeleteFeedback(f);
            return NoContent();
        }
    }
}
