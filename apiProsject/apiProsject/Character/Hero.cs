namespace apiProsject.Character
{
    public class Hero
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int MaxHp { get; set; }
        public int CurrentHp { get; set; }
        public int Strength { get; set; }
        public int PotionCount { get; set; }
        public int Speed { get; set; }

        public void DrinkPotion()
        {
            if (PotionCount <= 0) { return; }
            if (CurrentHp + 20 > MaxHp) { CurrentHp = MaxHp; PotionCount -= 1; }
            else { CurrentHp += 20; PotionCount -= 1; }
        }
    }
}
