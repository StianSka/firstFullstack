export default function HeroStatScreen({ hero }) {
  return (
    <div className="hero-stats-screen">
      <div className="hero-stats">
        Hp: {hero.currentHp} / {hero.maxHp}
      </div>
      <div className="hero-stats">Potions: {hero.potionCount}</div>
      <div className="hero-stats">Strength: {hero.strength}</div>
      <div className="hero-stats">Speed: {hero.speed}</div>
    </div>
  );
}
