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
   
   

    public interface IFeedbackRepository
    {
        List<FeedbackDTO> GetAllFeedbacks();
        FeedbackDTO GetFeedbackById(int id);
        void DeleteFeedback(Feedback f);      
        void AddFeedback(FeedbackDTO feedback);    
        void UpdateFeedback(int id, FeedbackDTO feedback);
    }
}
