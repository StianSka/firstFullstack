export default function EnemyScreen({ enemys }) {
  return (
    <div className="enemy-screen">
      {enemys == null
        ? ""
        : enemys.map((item) => (
            <div key={item.id} className="character-portrait">
              <div>{item.name}</div>
              <div>
                Hp: {item.currentHp} / {item.maxHp}
              </div>
            </div>
          ))}
    </div>
  );
}
