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
            square.addEventListener("mouseenter", () => { square.classList.toggle("filled") });
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
    while(sizeInput < 0 || sizeInput > 100);

    deleteRows();

    createCanvas(sizeInput);

}

function deleteRows() {
    while(container.firstChild) {
        console.log("h");
        container.removeChild(container.firstChild);
    }
}

newCanvasButton.addEventListener("click", askUserForSize);

createCanvas(DEFAULT_SIZE);