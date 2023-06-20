import { useEffect, useState } from "react";

export default function Card() {
  const [cardName, setCardName] = useState();
  const [maxHp, setMaxHp] = useState();
  const [currentHp, setCurrentHp] = useState();
  const [reasourses, setReasourses] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://localhost:7211/object");
        setCardName(response.data.name);
        setMaxHp(response.data.maxHp);
        setCurrentHp(response.data.currentHp);
        setReasourses(response.data.potionCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  if (cardName === null) {
    return <div>Loading...</div>;
  }
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
