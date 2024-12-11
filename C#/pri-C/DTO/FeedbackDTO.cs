using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class FeedbackDTO
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime Created { get; set; }
        //public int Userid { get; set; }
        //public string UserName { get; set; }
        public int ApartmentId { get; set; }
        //public ApartmentDTO? ApartmentDesc { get; set; }
    }
}
