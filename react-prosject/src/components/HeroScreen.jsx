import { useState } from "react";

export default function HeroScreen({ heroes, heroCliked }) {
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);

  const handleHeroClick = (heroId, index) => {
    setSelectedHeroIndex(index);
    heroCliked(heroId);
  };

  return (
    <div className="hero-screen">
      {heroes == null
        ? ""
        : heroes.map((item, index) => (
            <div
              key={item.id}
              className="character-portrait"
              onClick={() => handleHeroClick(item.id, index)}
              style={{
                background:
                  selectedHeroIndex === index ? "lightgray" : "transparent",
              }}
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
