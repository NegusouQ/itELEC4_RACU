namespace racu.api.DTO
{
    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class UserRequest : BaseRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public int Avatar { get; set; }
    }

    public class UserReponse : BaseResponse
    {

        
    }
}
