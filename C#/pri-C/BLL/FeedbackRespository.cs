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
    public class FeedbackRespository:IFeedbackRepository
    {
        private Reseration reseration;
        private IMapper mapper;
        public FeedbackRespository(Reseration reseration, IMapper mapper)
        {
            this.reseration = reseration;
            this.mapper = mapper;
        }

        public void AddFeedback(FeedbackDTO feedback)
        {
            reseration.Feedback.Add(mapper.Map<Feedback>(feedback));
            reseration.SaveChanges();
        }

        public void DeleteFeedback(Feedback f)
        {
            reseration.Feedback.Remove(f);
            reseration.SaveChanges();
        }

        public List<FeedbackDTO> GetAllFeedbacks()
        {
            return mapper.Map<List<FeedbackDTO>>(reseration.Feedback.ToList());
        }

        public FeedbackDTO GetFeedbackById(int id)
        {
            Feedback f = reseration.Feedback.Find(id);
            return mapper.Map<FeedbackDTO>(f);
        }

        public void UpdateFeedback(int id, FeedbackDTO feedback)
        {
            reseration.Feedback.Update(mapper.Map<Feedback>(feedback));
            reseration.SaveChanges();
        }

    }
}
