
using apiProsject.Character;

namespace apiProsject.utils
{
    public class utils
    {
        public static int RngNum(int min, int max)
        {
            Random random = new Random();
            return random.Next(min, max);

        }
        public static bool DoPlayerMove(Hero hero, Enemy enemy, string move)
        {
            bool result = false;
            if (move == "basic") result = hero.basic(enemy);
            else if (move == "spender") result = hero.spender(enemy);
            else if (move == "ultimate") result = hero.ultimate(enemy);
            
            return result;
        }
    }
}
