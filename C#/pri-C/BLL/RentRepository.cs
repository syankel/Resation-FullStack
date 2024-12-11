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
    public class RentRepository : IRentRepository
    {
        private Reseration reseration;
        private IMapper mapper;

        public RentRepository(Reseration reseration, IMapper mapper)
        {
            this.reseration = reseration;
            this.mapper = mapper;
        }

        public void AddRent(RentDTO rent)
        {
            reseration.Rent.Add(mapper.Map<Rent>(rent));
            reseration.SaveChanges();
        }

        public void DeleteRent(Rent r)
        {
           reseration.Rent.Remove(r);
           reseration.SaveChanges();
        }

        public RentDTO GetRentById(int id)
        {
            Rent r = reseration.Rent.Find(id);
            return mapper.Map<RentDTO>(r);
        }
        public List<RentDTO> GetRents()
        {
    
            return mapper.Map<List<RentDTO>>(reseration.Rent.ToList());
        }

        public void UpdateRent(int id, RentDTO rent)
        {
            reseration.Rent.Update(mapper.Map<Rent>(rent));
            reseration.SaveChanges();
        }
    }
}
