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
        public async Task<ActionResult<List<List<QuizItem>>>> Get()
        {
            List<QuizItem> quizitemList = await _context.QuizItems.ToListAsync();

            List<List<QuizItem>> ret = new List<List<QuizItem>>();

            List<QuizItem> tempList = new List<QuizItem>();

            for (int i = 0; i < 5; i++)
            {
                int index = random.Next(quizitemList.Count);
                tempList.Add( quizitemList[index] );
            }
            ret.Add( tempList );  
            tempList = new List<QuizItem>();

            for (int j = 0; j < 3; j++)
            {
                int index = random.Next(quizitemList.Count);
                tempList.Add(quizitemList[index]);
            }
            ret.Add(tempList);
            tempList = new List<QuizItem>();

            for (int j = 0; j < 7; j++)
            {
                int index = random.Next(quizitemList.Count);
                tempList.Add(quizitemList[index]);
            }
            ret.Add(tempList);
            tempList = new List<QuizItem>();

            for (int j = 0; j < 7; j++)
            {
                int index = random.Next(quizitemList.Count);
                tempList.Add(quizitemList[index]);
            }
            ret.Add(tempList);
            tempList = new List<QuizItem>();
            for (int j = 0; j < 7; j++)
            {
                int index = random.Next(quizitemList.Count);
                tempList.Add(quizitemList[index]);
            }
            ret.Add(tempList);
            tempList = new List<QuizItem>();
            for (int j = 0; j < 7; j++)
            {
                int index = random.Next(quizitemList.Count);
                tempList.Add(quizitemList[index]);
            }
            ret.Add(tempList);
            tempList = new List<QuizItem>();
            for (int j = 0; j < 7; j++)
            {
                int index = random.Next(quizitemList.Count);
                tempList.Add(quizitemList[index]);
            }
            ret.Add(tempList);
            tempList = new List<QuizItem>();
            for (int j = 0; j < 7; j++)
            {
                int index = random.Next(quizitemList.Count);
                tempList.Add(quizitemList[index]);
            }
            ret.Add(tempList);
            tempList = new List<QuizItem>();

            for (int j = 0; j < 4; j++)
            {
                int index = random.Next(quizitemList.Count);
                tempList.Add(quizitemList[index]);
            }
            ret.Add(tempList);
            tempList = new List<QuizItem>();

            for (int k = 0; k < 6; k++)
            {
                int index = random.Next(quizitemList.Count);
                tempList.Add(quizitemList[index]);
            }
            ret.Add(tempList);


            return ret;
            
        }
    }
}
