const grid = document.querySelector("#grid");
const btnclear = document.querySelector("#clear"); //clears grid
const btnreset = document.querySelector("#reset"); //resets grid size
const btnshowgrid = document.querySelector("#showgrid"); //show or hide grid: default is hide
var size = parseInt(prompt(`How many squares per side on grid? `));
var gridBoxes;

function createGrid() {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.classList.add("gridBox");
    // div.setAttribute("style", "border: 1px solid grey;");
    grid.appendChild(div);
  }
  gridBoxes = document.querySelectorAll(".gridBox");
  gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener("mouseover", (e) => {
      gridBox.classList.add("active");
    });
  });
}
var gridVisible = false;

showgrid.addEventListener("click", (e) => {
  if (gridVisible === false) {
    gridBoxes.forEach((gridBox) => {
      gridBox.setAttribute("style", "border: 1px solid grey;");
    });
    gridVisible = true;
  } else if (gridVisible === true) {
    gridBoxes.forEach((gridBox) => {
      gridBox.setAttribute("style", "border: none;");
    });
    gridVisible = false;
  }
});

clear.addEventListener("click", (e) => {
  gridBoxes.forEach((gridBox) => {
    gridBox.classList.remove("active");
  });
});

reset.addEventListener("click", (e) => {
    var child = grid.lastElementChild; 
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
  size = parseInt(prompt(`How many squares per side on grid? `));
  createGrid();
});

createGrid(size);
