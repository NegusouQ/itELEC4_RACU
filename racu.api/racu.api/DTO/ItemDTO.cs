namespace racu.api.DTO
{
    public class ItemRequest : BaseRequest
    {
        public Guid UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string? Image { get; set; }
    }
}
