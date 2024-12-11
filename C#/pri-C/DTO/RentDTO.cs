using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class RentDTO
    {
        public int Id { get; set; }
        public DateTime startRent { get; set; }
        public DateTime endRent { get; set; }
        public int Apartemntid { get; set; }
        //public ApartmentDTO? Apartment { get; set; }
    }
}
