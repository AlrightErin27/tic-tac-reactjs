import { useState } from "react";

function App() {
  const [playerX, setPlayerX] = useState(true);

  let count = 0;
  let rowsArr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  function handleClick(e) {
    e.preventDefault();

    const sq = document.getElementById(e.target.id);

    if (playerX && sq.innerText !== "X" && sq.innerText !== "O") {
      setPlayerX(false);
      sq.innerText = "X";
    } else if (!playerX && sq.innerText !== "X" && sq.innerText !== "O") {
      setPlayerX(true);
      sq.innerText = "O";
    }

    console.log(playerX);
    count++;
    return count;
  }

  return (
    <div id="app" className="back">
      <h1>Tic Tac React</h1>
      <div className="grid">
        <div className="row" id="row1">
          <div className="square" id="s1" onClick={(e) => handleClick(e)}>
            {rowsArr[0][0]}
          </div>
          <div className="square" id="s2" onClick={(e) => handleClick(e)}>
            {rowsArr[0][1]}
          </div>
          <div className="square" id="s3" onClick={(e) => handleClick(e)}>
            {rowsArr[0][2]}
          </div>
        </div>

        <div className="row" id="row2">
          <div className="square" id="s4" onClick={(e) => handleClick(e)}>
            {rowsArr[1][0]}
          </div>
          <div className="square" id="s5" onClick={(e) => handleClick(e)}>
            {rowsArr[1][1]}
          </div>
          <div className="square" id="s6" onClick={(e) => handleClick(e)}>
            {rowsArr[1][2]}
          </div>
        </div>

        <div className="row" id="row3">
          <div className="square" id="s7" onClick={(e) => handleClick(e)}>
            {rowsArr[2][0]}
          </div>
          <div className="square" id="s8" onClick={(e) => handleClick(e)}>
            {rowsArr[2][1]}
          </div>
          <div className="square" id="s9" onClick={(e) => handleClick(e)}>
            {rowsArr[2][2]}
          </div>
        </div>
      </div>
      <h3>{playerX ? "Player X's turn." : "Player O's turn"}</h3>
    </div>
  );
}

export default App;
