namespace apiProsject.Character
{
    public class Hero
    {
        protected string Name;
        protected int MaxHp;
        protected int CurrentHp;
        protected int Strength;
        protected int PotionCount;
        protected int Speed;

        public void DrinkPotion()
        {
            if (PotionCount <= 0) { return; }
            if (CurrentHp + 20 > MaxHp) { CurrentHp = MaxHp; PotionCount -= 1; }
            else { CurrentHp += 20; PotionCount -= 1; }
        }
    }
}
