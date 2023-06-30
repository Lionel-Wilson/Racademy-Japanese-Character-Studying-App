using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuizProjectService.Data;
using QuizProjectService.Models;
using System;

namespace QuizProjectService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuizController : Controller
    {
        private readonly DataContext _context;
        private readonly ILogger<QuizController> _logger;

        public QuizController(DataContext context, ILogger<QuizController> logger)
        {
            _context = context;
            _logger = logger;
        }


        Random random = new Random();



        [HttpGet]
        public async Task<ActionResult<List<QuizItem>>> Get(int numberOfQuestionSetByUser)
        {
            List<QuizItem> quizitemList = await _context.QuizItems.ToListAsync();
            
            List<QuizItem> ret = new List<QuizItem>();

            for (int i = 0; i <= (numberOfQuestionSetByUser-1); i++)
            {
                int index = random.Next(quizitemList.Count);

                ret.Add(quizitemList[index]);
            }
            return ret;
            
        }
    }
}
