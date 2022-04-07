function App() {
  let rowsArr = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  function handleClick(e) {
    e.preventDefault();
    console.log(e.target.id, "Clicked!");
  }

  return (
    <div id="app">
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
    </div>
  );
}

export default App;
