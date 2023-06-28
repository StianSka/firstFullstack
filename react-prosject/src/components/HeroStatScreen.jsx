export default function HeroStatScreen({ hero }) {
  console.log(hero);
  return (
    <div className="hero-stats-screen">
      {hero == null ? (
        ""
      ) : (
        <>
          <div className="hero-stats">Potions: {hero.potionCount}</div>
          <div className="hero-stats">Strength: {hero.strength}</div>
          <div className="hero-stats">Speed: {hero.speed}</div>
        </>
      )}
    </div>
  );
}
