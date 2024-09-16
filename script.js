const container = document.querySelector("#container");

const SIZE = 16;
const WIDTH = 960;

function createCanvas(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.className = "square";
            square.style.height = `${WIDTH / size}px`;
            square.style.width = `${WIDTH / size}px`;
            square.addEventListener("mouseenter", () => { square.classList.toggle("filled") });
            row.appendChild(square);
        }

        container.appendChild(row);
    }

}

createCanvas(SIZE);