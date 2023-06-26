import { useEffect, useState } from "react";
import HeroStatScreen from "./HeroStatScreen";

export default function BattleScreen() {
  const [heroes, setHeroes] = useState(null);
  const [currentHeroTurn, setCurrentHeroTurn] = useState(0);
  const [hasHealed, setHashealed] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://localhost:7211/index");
        setHeroes(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [hasHealed]);

  async function heal() {
    setHashealed(false);
    const response = await axios.put(
      "https://localhost:7211/doHealing/" + heroes[currentHeroTurn].id
    );
    await setHashealed(response.data);
    console.log("har kjørt");
  }

  return (
    <div className="main-battle">
      {heroes == null ? (
        ""
      ) : (
        <HeroStatScreen hero={heroes[currentHeroTurn]}></HeroStatScreen>
      )}
      <div className="hero-screen">
        <div className="hero-portrait">
          {heroes == null ? "" : heroes[0].name}
        </div>
        <div className="hero-portrait">
          {heroes == null ? "" : heroes[1].name}
        </div>
        <div className="hero-portrait">
          {heroes == null ? "" : heroes[2].name}
        </div>
      </div>
      <div className="enemy-screen"></div>
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
