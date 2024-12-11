using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;
using AutoMapper;
using System.Security.Claims;

namespace BLL
{
    public class UserRepository:IUserRepository
    {
        private Reseration reseration;
        private IMapper mapper;

        public UserRepository(Reseration reseration,IMapper mapper)
        {
            this.reseration = reseration;
            this.mapper = mapper;
        }

        //public ClaimsIdentity? Role { get; internal set; }

        public void AddUser(UserDTO user)
        {
            reseration.Users.Add(mapper.Map<User>(user));
            reseration.SaveChanges();
        }


        public void DeleteUser(User u)
        {
           reseration.Users.Remove(u);
           reseration.SaveChanges ();  
        }

        public UserDTO GetUserById(int id)
        {
            User u= reseration.Users.Find(id);
            return mapper.Map<UserDTO>(u);
        }

        public List<UserDTO> GetUsers()
        {
            return mapper.Map<List<UserDTO>>(reseration.Users.ToList());
        }

        public void UpdateUser(UserDTO user)
        {
            reseration.Users.Update(mapper.Map<User>(user));
            reseration.SaveChanges();
        }
    }
}
