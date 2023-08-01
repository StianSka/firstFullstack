import { useState } from "react";

export default function ButtonMenu({ usePotion, primeMove }) {
  const [selectedMove, setSelectedMove] = useState(0);

  const handleMoveClick = (index, move) => {
    setSelectedMove(index);
    primeMove(move);
  };

  return (
    <div className="move-menu">
      <div
        className="button-div"
        style={{
          background: selectedMove === 0 ? "lightgray" : "transparent",
        }}
        onClick={() => handleMoveClick(0, "basic")}
      >
        basic attack
      </div>

      <div
        className="button-div"
        style={{
          background: selectedMove === 1 ? "lightgray" : "transparent",
        }}
        onClick={() => handleMoveClick(1, "spender")}
      >
        point spender
      </div>

      <div
        className="button-div"
        style={{
          background: selectedMove === 2 ? "lightgray" : "transparent",
        }}
        onClick={() => handleMoveClick(2, "ultimate")}
      >
        ultimate move
      </div>
      <div className="big-button-div" onClick={usePotion}>
        use potion
      </div>
    </div>
  );
}
