namespace apiProsject.Character
{
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
    }
}
