using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{//משןב
    public class Feedback
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Content { get; set; }
        public DateTime? Created { get; set; }

        public virtual User? User { get; set; }
        public int Userid { get; set; }
        public  virtual Apartment? Apartemnt { get; set; }  
        public int Apartemntid { get; set; }

}
}
