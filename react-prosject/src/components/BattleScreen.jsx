import { useEffect, useState } from "react";
import HeroStatScreen from "./HeroStatScreen";
import EnemyScreen from "./EnemyScreen";

export default function BattleScreen() {
  const [heroes, setHeroes] = useState(null);
  const [enemys, setEnemys] = useState(null);
  const [currentHeroTurn, setCurrentHeroTurn] = useState(0);
  const [hasUppdate, setHasUppdate] = useState(false);

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const response = await axios.get("https://localhost:7211/hero");
        setHeroes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getHeroes();
  }, [hasUppdate]);

  useEffect(() => {
    const getEnemys = async () => {
      try {
        const response = await axios.get("https://localhost:7211/enemys");
        setEnemys(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getEnemys();
  }, [hasUppdate]);

  async function heal() {
    setHasUppdate(false);
    const response = await axios.put(
      "https://localhost:7211/doHealing/" + heroes[currentHeroTurn].id
    );
    (await response.data) === false
      ? alert("Cant do that!")
      : setHasUppdate(response.data);
  }

  const heroCliked = (i) => {
    setCurrentHeroTurn(i);
  };

  return (
    <div className="main-battle">
      {heroes == null ? (
        ""
      ) : (
        <HeroStatScreen hero={heroes[currentHeroTurn]}></HeroStatScreen>
      )}
      <div className="hero-screen">
        <div className="character-portrait" onClick={() => heroCliked(0)}>
          {heroes == null ? "" : heroes[0].name}
        </div>
        <div className="character-portrait" onClick={() => heroCliked(1)}>
          {heroes == null ? "" : heroes[1].name}
        </div>
        <div className="character-portrait" onClick={() => heroCliked(2)}>
          {heroes == null ? "" : heroes[2].name}
        </div>
      </div>
      {heroes == enemys ? "" : <EnemyScreen enemys={enemys}></EnemyScreen>}
      <div className="move-menu">
        <button>basic attack</button>
        <button onClick={heal}>use potion</button>
        <button>point spender</button>
        <button>ultimate move</button>
      </div>
      <div className="description-box"></div>
    </div>
  );
}
