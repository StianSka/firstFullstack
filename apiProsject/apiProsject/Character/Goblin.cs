namespace apiProsject.Character
{
using apiProsject.utils;
public class Goblin : Enemy
    {
        public Goblin(string name, int maxHp, int hp, int strength, int potionCount, int speed)
        {
            Name = name;
            MaxHp = maxHp;
            CurrentHp = hp;
            Strength = strength;
            PotionCount = potionCount;
            Speed = speed;
        }
        public static Goblin MakeRandomGoblin()
        {
            string[] names = { "Mork", "Gork", "Gazgull", "Grom", "Gorkett", };
            int nameIndex = utils.RngNum(0, names.Length);
            int maxHp = utils.RngNum(100,500);
            int CurrentHp = utils.RngNum(100, maxHp);
            int strength = utils.RngNum(10, 120);
            int potionCount = utils.RngNum(0, 8);
            int speed = utils.RngNum(10, 80);

            Goblin result = new Goblin(names[nameIndex],maxHp, CurrentHp, strength, potionCount, speed);
            return result;
        }
    }
}
