using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{//שוכר
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int Identity { get; set; }
        public int Password { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int Phone { get; set; }
        //public string Role { get; set; }
        //public string UserName { get; set; }
        public virtual List<Rent>? Rent { get; set; }
        public virtual List<Feedback>? Feedback { get; set; }  

    }
}
