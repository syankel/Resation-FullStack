using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ApartmentDTO
    {
        public int Id { get; set; }
        public string Address { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int NumOfBeds { get; set; }
        public bool Status { get; set; }
        public string Image { get; set; }
        public int CategoryId { get; set; }
        public string Erea { get; set; }

        //public CategoryDTO? Category { get; set; }


    }
}
