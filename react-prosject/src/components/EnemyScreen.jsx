export default function EnemyScreen({ enemys, doMove }) {
  return (
    <div className="enemy-screen">
      {enemys == null
        ? ""
        : enemys.map((item) => (
            <div
              key={item.id}
              className="character-portrait"
              onClick={() => doMove(item.id)}
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
