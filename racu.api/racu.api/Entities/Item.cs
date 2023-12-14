using System.ComponentModel.DataAnnotations;
using System.Drawing;

namespace racu.api.Entities
{
    public class Item : BaseEntity
    {
        [Required]
        public Guid UserId { get; set; }
        public virtual User User { get; set; }

        [Required, MaxLength(50)]
        public string Title { get; set; }

        [MaxLength(100)]
        public string Description { get; set; }
        public string? Image { get; set; }
    }
}
