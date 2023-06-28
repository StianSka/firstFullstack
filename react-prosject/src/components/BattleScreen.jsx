import { useEffect, useState } from "react";
import HeroStatScreen from "./HeroStatScreen";
import EnemyScreen from "./EnemyScreen";
import HeroScreen from "./HeroScreen";

export default function BattleScreen() {
  const [heroes, setHeroes] = useState(null);
  const [enemys, setEnemys] = useState(null);
  const [currentHeroTurnId, setCurrentHeroTurnId] = useState(null);
  const [hasUppdate, setHasUppdate] = useState(false);

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const response = await axios.get("https://localhost:7211/hero");
        setHeroes(response.data);
        if (currentHeroTurnId === null) {
          setCurrentHeroTurnId(response.data[0].id);
        }
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
      "https://localhost:7211/doHealing/" + currentHeroTurnId
    );
    (await response.data) === false
      ? alert("Cant do that!")
      : setHasUppdate(response.data);
  }

  const heroCliked = (i) => {
    setCurrentHeroTurnId(i);
    console.log(i);
  };

  return (
    <div className="main-battle">
      {heroes == null ? (
        ""
      ) : (
        <HeroStatScreen
          hero={heroes.find((obj) => obj.id === currentHeroTurnId)}
        ></HeroStatScreen>
      )}
      {heroes == null ? (
        ""
      ) : (
        <HeroScreen heroes={heroes} heroCliked={heroCliked}></HeroScreen>
      )}
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
