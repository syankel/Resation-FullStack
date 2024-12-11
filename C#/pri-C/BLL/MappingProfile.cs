using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DAL;
using DTO;
namespace BLL
{
    public class MappingProfile:Profile
    {
        
            public MappingProfile()
            {
                CreateMap<Category, CategoryDTO>().ReverseMap();
                CreateMap<Apartment, ApartmentDTO>().ReverseMap();
                CreateMap<Feedback, FeedbackDTO>().ReverseMap();
            CreateMap<Rent, RentDTO>().ReverseMap();
            CreateMap<User, UserDTO>().ReverseMap();





        }
    }
    }


