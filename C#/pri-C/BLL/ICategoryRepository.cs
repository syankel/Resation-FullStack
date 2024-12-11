using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
namespace BLL
{
    public interface ICategoryRepository
    {
         List <CategoryDTO> GetCategories();
         CategoryDTO GetCategoryById(int id);
        void DeleteCategory(Category c);
         void AddCategory(CategoryDTO category);
         void UpdateCategory(int id, CategoryDTO category);
    }
}
