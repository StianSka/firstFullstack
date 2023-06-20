
namespace apiProsject.utils
{
    public class utils
    {
        public static int RngNum(int min, int max)
        {
            Random random = new Random();
            return random.Next(min, max);

        }

    }
}
