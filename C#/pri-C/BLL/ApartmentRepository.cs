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
    public class ApartmentRepository : IApartmentRepository
    {
        private Reseration reseration;
        private IMapper mapper;

        public ApartmentRepository(Reseration reseration, IMapper mapper)
        {
            this.reseration = reseration;
            this.mapper = mapper;
        }

        public void AddApartment(ApartmentDTO apartemnt)
        {
            reseration.Apartemnts.Add(mapper.Map<Apartment>(apartemnt));
            reseration.SaveChanges();
        }

        
        public void DeleteApartemnt(Apartment a)
        {
            reseration.Apartemnts.Remove(a);
            reseration.SaveChanges();

        }

        public ApartmentDTO GetApartemntById(int id)
        {
            Apartment a = reseration.Apartemnts.Find(id);
            return mapper.Map<ApartmentDTO>(a);
        }
        public List<ApartmentDTO> GetApartemnts()
        {
            return mapper.Map<List<ApartmentDTO>>(reseration.Apartemnts.ToList());
        }

        public void UpdateApartment(ApartmentDTO apartemnt)
        {
            reseration.Apartemnts.Update(mapper.Map<Apartment>(apartemnt));
            reseration.SaveChanges();
        }
    }
}
