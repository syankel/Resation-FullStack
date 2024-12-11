using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{//השאלה
    public class Rent
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime startRent { get; set; }
        public DateTime endRent { get; set; }

        public virtual Apartment apartemnt { get; set; }
        public int Apartemntid { get; set; }

    }
}
