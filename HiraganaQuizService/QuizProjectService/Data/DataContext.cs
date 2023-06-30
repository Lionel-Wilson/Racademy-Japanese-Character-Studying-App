using Microsoft.EntityFrameworkCore;
using QuizProjectService.Models;

namespace QuizProjectService.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<QuizItem> QuizItems => Set<QuizItem>();
    }
}
