const resetBtn = document.querySelector(".reset");
let turn = "x";
let symbols = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
function app() {
  const board = document.querySelector(".board");
  const tiles = Array.from(document.querySelectorAll(".tile"));

  board.addEventListener("click", ({ target }) => {
    const classes = Array.from(target.classList);

    if (classes.includes("tile") && classes.length !== 1) return;

    const idx = tiles.indexOf(target);
    target.classList.add(`tile-${turn}`);
    symbols[idx % 3][Math.floor(idx / 3)] = turn;
    turn = turn === "x" ? "o" : "x";
    displayTurn(turn);

    checkWin();
  });
}

function displayTurn(turn) {
  const turnHeadline = document.querySelector(".turn");
  turnHeadline.textContent = `${turn.toUpperCase()} turn`;
}
// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
//
function removeClass(elem, name) {
  let classlist = elem.className.split(/\s/),
    newlist = [];

  for (let i = 0; i < classlist.length; i++) {
    if (classlist[i] !== name) {
      newlist.push(classlist[i]);
    }
  }
  elem.className = newlist.join(" ");
  return true;
}
function reset() {
  symbols = [].concat([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  Array.from(document.querySelectorAll(".tile")).forEach((el) => {
    removeClass(el, "tile-x");
    removeClass(el, "tile-o");
  });
  app();
}
resetBtn.addEventListener("click", reset);

function checkWin() {
  let win = "";
  let counterHorizontal = 0;
  console.log(symbols);
  for (let i = 0; i < 3; i++) {
    //horizontal line
    if (
      symbols[i].includes("x") === false &&
      symbols[i].includes("") === false
    ) {
      win = "o";
      //   break;
    }
    console.log("1", win);
    if (
      symbols[i].includes("o") === false &&
      symbols[i].includes("") === false
    ) {
      win = "x";
      //   break;
    }
    console.log("1.2", win);

    // vertical line
    counterHorizontal = 0;
    for (let j = 1; j < 3; j++) {
      if (symbols[0][i] === symbols[j][i] && symbols[j][i] != "") {
        counterHorizontal++;
      }
    }

    if (counterHorizontal === 2 && symbols[0][i] !== "") {
      win = symbols[0][i];
      //   break;
    }
    console.log("2", win);
  }
  // diagonal lines
  if (
    symbols[0][0] === symbols[1][1] &&
    symbols[1][1] === symbols[2][2] &&
    symbols[0][0] != ""
  ) {
    win = symbols[0][0];
  }
  console.log("3.", win);

  if (
    symbols[0][2] === symbols[1][1] &&
    symbols[1][1] === symbols[2][0] &&
    symbols[0][2] != ""
  ) {
    win = symbols[0][2];
  }
  console.log("3.2", win);
  if (win !== "") {
    alert(`The winner: ${win.toUpperCase()}`);
  }
  if (symbols.flat().includes("") === false) {
    alert("Draw!");
  }
}

app();
