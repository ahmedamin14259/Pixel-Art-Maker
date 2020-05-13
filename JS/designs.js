let canvas = document.getElementById("pixelCanvas");

document.getElementById("create").addEventListener("click", e => {
e.preventDefault();
canvas.innerHTML = "";
makeGrid();
colorPicker();
});

let makeGrid = () => {
let height = document.getElementById("inputHeight").value;
const rows = document.createElement("tr");
while (height > 0) {
canvas.appendChild(rows.cloneNode(true));
height--;
}

let width = document.getElementById("inputWidth").value;
const columns = document.createElement("td");
let allTheRows = document.querySelectorAll("tr");
allTheRows.forEach(function(x, y) {
for (var i = 0; i < width; i++) {
allTheRows[y].appendChild(columns.cloneNode(true));
}
});
};

let colorPicker = () => {
let allSquares = document.querySelectorAll("td");
for (var i = 0; i < allSquares.length; i++) {
allSquares[i].addEventListener("click", function() {
const colorSelected = document.getElementById("colorPicker").value;
this.style.backgroundColor = colorSelected;
});
}
};