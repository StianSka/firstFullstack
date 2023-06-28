export default function EnemyScreen({ heroes, heroCliked }) {
  return (
    <div className="hero-screen">
      {heroes == null
        ? ""
        : heroes.map((item) => (
            <div
              key={item.id}
              className="character-portrait"
              onClick={() => heroCliked(item.id)}
            >
              <div>{item.name}</div>
              <div>
                Hp: {item.currentHp} / {item.maxHp}
              </div>
            </div>
          ))}
    </div>
  );
}
