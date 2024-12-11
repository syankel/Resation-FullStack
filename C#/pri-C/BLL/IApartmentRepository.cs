using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;


namespace BLL
{
    public interface IApartmentRepository
    {
         List<ApartmentDTO> GetApartemnts();
         ApartmentDTO GetApartemntById(int id);
         void DeleteApartemnt(Apartment a);
         void AddApartment(ApartmentDTO apartemnt);
         void UpdateApartment(ApartmentDTO apartemnt);
       
    }
}
