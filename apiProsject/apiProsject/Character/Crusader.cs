namespace apiProsject.Character
{
    using apiProsject.utils;
    public class Crusader : Hero
    {
        public Crusader(Guid guid, string name, int maxHp, int hp, int strength, int potionCount, int speed)
        {
            Id = guid;
            Name = name;
            MaxHp = maxHp;
            CurrentHp = hp;
            Strength = strength;
            PotionCount = potionCount;
            Speed = speed;
        }
        public static Crusader MakeRandomCrusader()
        {
            Guid id = Guid.NewGuid();
            string[] names = { "Karl", "Tristan ", "Baldwin ", "Percival ", "Gideon ", "Roland  " };
            int nameIndex = utils.RngNum(0, names.Length);
            int maxHp = utils.RngNum(100, 500);
            int currentHp = utils.RngNum(100, maxHp);
            int strength = utils.RngNum(10, 120);
            int potionCount = utils.RngNum(1, 8);
            int speed = utils.RngNum(10, 80);

            Crusader result = new Crusader(id, names[nameIndex], maxHp, currentHp, strength, potionCount, speed);
            return result;
        }
        public override bool basic(Enemy enemy)
        {
            bool result = false;
            if (enemy.CurrentHp - this.Strength  < 0) { enemy.CurrentHp = 0; result = true; }
            else { enemy.CurrentHp = enemy.CurrentHp - this.Strength; result = true; }
            
            return result;
        }
        public override bool spender(Enemy enemy)
        {
            return false;
        }
        public override bool ultimate(Enemy enemy)
        {
            return false;
        }
            
    }
}
