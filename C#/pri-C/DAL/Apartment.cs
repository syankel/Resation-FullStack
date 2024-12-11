using System.ComponentModel.DataAnnotations.Schema;

namespace DAL
{//המקום שמושאל
    public class Apartment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Address { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int NumOfBeds { get; set; }
        public bool Status { get; set; }
        public string Image { get; set; }

        public virtual List<Rent>? Rents { get; set; }
        
        public  virtual List<Feedback> ? Feedback { get; set; }

        public virtual Category? Category { get; set; }
        public int CategoryId { get; set; }//מפתח זר

        public string Erea { get; set; }

    }
}