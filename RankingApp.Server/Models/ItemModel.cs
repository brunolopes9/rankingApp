using System.Collections.Generic;
using System.Linq;
namespace RankingApp.Server.Models
{
    public class ItemModel
    {
        public int Id { get; set; }

        public required string Title { get; set; }

        public int ImageId { get; set; }

        public int Ranking { get; set; }

        public int ItemType { get; set; }

    }
}
