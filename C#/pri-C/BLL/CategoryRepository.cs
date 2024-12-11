using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using AutoMapper;
namespace BLL
{
    public class CategoryRepository:ICategoryRepository
    {
        private Reseration reseration;
        private IMapper mapper;
        public CategoryRepository(Reseration reseration,IMapper mapper)
        {
            this.reseration = reseration;
            this.mapper = mapper;
        }

        public void AddCategory(CategoryDTO category)
        {
            reseration.Category.Add(mapper.Map<Category>(category));
            reseration.SaveChanges();
        }

        public void DeleteCategory(Category c)
        {
            reseration.Category.Remove(c);
            reseration.SaveChanges();
        }
       

        public List<CategoryDTO> GetCategories()
        {
            return mapper.Map<List<CategoryDTO>>(reseration.Category.ToList());
        }

        
        public CategoryDTO GetCategoryById(int id)
        {
            Category c = reseration.Category.Find(id);
            return mapper.Map<CategoryDTO>(c);
        }

       

        public void UpdateCategory(int id, CategoryDTO category)
        {
            reseration.Category.Update(mapper.Map<Category>(category));
            reseration.SaveChanges();
        }
    }
}