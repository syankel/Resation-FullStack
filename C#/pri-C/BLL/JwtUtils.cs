using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DAL;
//using Microsoft.IdentityModel.Tokens;

//namespace BLL
//{
//    public class JwtUtils
//    {
//        public static string CreatJWT(UserRepository user)
//        {
//            var jwtTokenHandler = new JwtSecurityTokenHandler();
//            var key = Encoding.ASCII.GetBytes("====================sodresation===========================");
//            var identity = new ClaimsIdentity(new Claim[]
//            {
//                new Claim(ClaimTypes.Role ,user.Role),
//                new Claim(ClaimTypes.Name,user.UserName)
//            });
//            var cardintails = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256);
//            var tokenDescriptor = new SecurityTokenDescriptor
//            {
//                Subject = identity,
//                Expires = DateTime.Now.AddMinutes(10),
//                SigningCredentials = cardintails
//            };
//            var token = jwtTokenHandler.CreateToken(tokenDescriptor);
//            return jwtTokenHandler.WriteToken(token);
//        }
//    }
//}
