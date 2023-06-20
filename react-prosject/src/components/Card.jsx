import { useState } from "react";

export default function Card() {
  const [cardName, setCardName] = useState();
  const [maxHp, setMaxHp] = useState();
  const [currentHp, setCurrentHp] = useState();
  const [reasourses, setReasourses] = useState();
  async function getData() {
    const response = await axios.get("https://localhost:7211/index");
    const stuff = response.data;
    console.log(stuff);
    setCardName(stuff[0].name);
    setMaxHp(stuff[0].maxHp);
    setCurrentHp(stuff[0].currentHp);
    setReasourses(stuff[0].potionCount);
  }

  getData();
  return (
    <div className="card">
      <div className="card-picture">picture?</div>
      <div className="card-deets">
        <div>{cardName}</div>
        <div>
          HP {currentHp}/{maxHp}{" "}
        </div>
        <div>Potions {reasourses}</div>
      </div>
      <div className="card-moves">
        <button>move 1</button>
        <button>move 2</button>
        <button>move 3</button>
        <button>move 4</button>
      </div>
    </div>
  );
}
