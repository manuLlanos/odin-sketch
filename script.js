const container = document.querySelector("#container");
const newCanvasButton = document.querySelector("#btn-new");

const DEFAULT_SIZE = 16;
const WIDTH = 960;

function createCanvas(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.className = "square";
            square.style.height = `${Math.floor(WIDTH / size)}px`;
            square.style.width = `${Math.floor(WIDTH / size)}px`;
            square.addEventListener("mouseenter", () => { square.style.backgroundColor = getRandomColorString() });
            row.appendChild(square);
        }

        container.appendChild(row);
    }

}

function askUserForSize() {
    let sizeInput = 0;
    do {
        sizeInput = parseInt(prompt("Canvas size? (max:100)", "16"));
    }
    while (sizeInput < 0 || sizeInput > 100);

    deleteRows();

    createCanvas(sizeInput);

}

function deleteRows() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function random(n) {
    return Math.floor(Math.random() * n);
}

function getRandomColorString() {
    let red = random(256);
    let blue = random(256);
    let green = random(256);
    return `rgb(${red},${blue},${green})`;
}

newCanvasButton.addEventListener("click", askUserForSize);

createCanvas(DEFAULT_SIZE);