using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BLL;
using DTO;
using DAL;
namespace pri_C.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private ICategoryRepository IcategoryRepository;

        public CategoryController(ICategoryRepository IcategoryRepository)
        {
            this.IcategoryRepository = IcategoryRepository;
        }

        [HttpGet("GetCategories")]
        public ActionResult<List<Apartment>> GetCategories()
        {
            return Ok(IcategoryRepository.GetCategories());
        }

        [HttpGet("GetCategoryById/{id}")]
        public ActionResult<CategoryDTO> GetCategoryById(int Id)
        {
            if (Id < 0)
                return BadRequest(ModelState.IsValid);
            CategoryDTO c = IcategoryRepository.GetCategoryById(Id);
            if (c == null)
                return NotFound();
            return Ok(c);
        }

       
        [HttpPost("AddCategory")]
        public ActionResult<CategoryDTO> AddCategory(CategoryDTO c)
        {
            if (c == null && !ModelState.IsValid)
                return BadRequest(ModelState);
            CategoryDTO c2 = IcategoryRepository.GetCategoryById(c.Id);
            if (c2 != null)
                return Conflict();
            IcategoryRepository.AddCategory(c);
            return CreatedAtAction(nameof(GetCategoryById), new { Id = c.Id }, c);
        }

        [HttpPut("UpdateCategory/{id:int}")]
        public ActionResult<CategoryDTO> UpdateCategory(int id, CategoryDTO c)
        {
            if (c == null && ModelState.IsValid)
                return BadRequest(ModelState);
            if (IcategoryRepository.GetCategoryById(id) == null || c.Id != id)
                return Conflict();
            IcategoryRepository.UpdateCategory(id, c);
            return Ok(c);
        }

        [HttpDelete("DeleteCategory/{id:int}")]
        public ActionResult DeleteCategory(Category c)
        {
            if (c.Id > 0 || c.Id == null)
                return BadRequest(ModelState);
            if (IcategoryRepository.GetCategoryById(c.Id) == null)
            {
                return NotFound();
            }
            IcategoryRepository.DeleteCategory(c);
            return NoContent();
        }
    }
}
