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
    public interface IUserRepository
    {
         List<UserDTO> GetUsers();
         UserDTO GetUserById(int id);
         void DeleteUser(User u);
        void AddUser(UserDTO user);
        void UpdateUser(UserDTO user);

    }
}
