namespace apiProsject.Character
{
using apiProsject.utils;
public class Goblin : Enemy
    {
        public Goblin(Guid guid, string name, int maxHp, int hp, int strength, int potionCount, int speed)
        {
            Id = guid;
            Name = name;
            MaxHp = maxHp;
            CurrentHp = hp;
            Strength = strength;
            PotionCount = potionCount;
            Speed = speed;
        }
        public static Goblin MakeRandomGoblin()
        {
            Guid id = Guid.NewGuid();
            string[] names = { "Mork", "Gork", "Gazgull", "Grom", "Gorkett", };
            int nameIndex = utils.RngNum(0, names.Length);
            int maxHp = utils.RngNum(100,500);
            int currentHp = utils.RngNum(100, 101);
            int strength = utils.RngNum(10, 120);
            int potionCount = utils.RngNum(1, 8);
            int speed = utils.RngNum(10, 80);

            Goblin result = new Goblin(id,names[nameIndex],maxHp, currentHp, strength, potionCount, speed);
            return result;
        }
    }
}
