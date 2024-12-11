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
 public interface IRentRepository
{
    List<RentDTO> GetRents();
    RentDTO GetRentById(int id);
    void DeleteRent(Rent r);
    void AddRent(RentDTO rent);
    void UpdateRent(int id, RentDTO rent);
}

}
