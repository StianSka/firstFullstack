import { useEffect, useState } from "react";
import HeroStatScreen from "./HeroStatScreen";
import EnemyScreen from "./EnemyScreen";
import HeroScreen from "./HeroScreen";
import ButtonMenu from "./ButtonMenu";

export default function BattleScreen() {
  const [heroes, setHeroes] = useState(null);
  const [enemys, setEnemys] = useState(null);
  const [currentHeroTurnId, setCurrentHeroTurnId] = useState(null);
  const [hasUppdate, setHasUppdate] = useState(false);
  const [primedMove, setPrimedMove] = useState("basic");

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

  const doMove = async (enemyId) => {
    setHasUppdate(false);
    console.log(enemyId, primedMove, currentHeroTurnId);
    const payload = {
      primedMove: primedMove,
      currentHeroTurnId: currentHeroTurnId,
      enemyId: enemyId,
    };
    const response = await axios.put("https://localhost:7211/doMove/", payload);
    await console.log(response.data);
    setHasUppdate(response.data);
  };

  const usePotion = async () => {
    setHasUppdate(false);
    const response = await axios.put(
      "https://localhost:7211/doHealing/" + currentHeroTurnId
    );
    (await response.data) === false
      ? alert("Cant do that!")
      : setHasUppdate(response.data);
  };

  const primeMove = (move) => {
    setPrimedMove(move);
  };

  const heroCliked = (id) => {
    setCurrentHeroTurnId(id);
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
      {heroes == enemys ? (
        ""
      ) : (
        <EnemyScreen enemys={enemys} doMove={doMove}></EnemyScreen>
      )}
      <ButtonMenu primeMove={primeMove} usePotion={usePotion}></ButtonMenu>
      <div className="description-box"></div>
    </div>
  );
}
