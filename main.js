const cells = document.querySelectorAll(".cell");
const statusTaxt = document.querySelector("#statustTaxt");
const restarBtn = document.querySelector("#restar");
const winContainer = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let opiton = ["", "", "", "", "", "", "", "", ""];
let cursonPale = "X";
let running = false;

initakGame();

function initakGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicl))
    restarBtn.addEventListener("click", restarGame);
    statusTaxt.textContent = `${cursonPale} yuti`;
    running = true;

}
function cellClicl() {
    const cellIndex = this.getAttribute("cellIndex");

    if (opiton[cellIndex] != "" || !running) {
        return;
    }
    uptcell(this, cellIndex);
    checeWinner();
}

function uptcell(cell, index) {
    opiton[index] = cursonPale;
    cell.textContent = cursonPale;
}
function chengPale() {
    cursonPale = (cursonPale == "X") ? "O" : "X";
    statusTaxt.textContent = `${cursonPale} yuradi`;
}
function checeWinner() {
    let roundWon = false;
    for (let i = 0; i < winContainer.length; i++) {
        const condition = winContainer[i];
        const cellA = opiton[condition[0]];
        const cellB = opiton[condition[1]];
        const cellC = opiton[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusTaxt.textContent = `${cursonPale} yuti`;
        running = false;
    }
    else if (!opiton.includes("")) {
        statusTaxt.textContent = `Durang`;
        running = false;
    }
    else {
        chengPale();
    }
}
function restarGame() {
    cursonPale == "X";
    opiton = ["", "", "", "", "", "", "", "", ""];
    statusTaxt.textContent = `${cursonPale}`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
};