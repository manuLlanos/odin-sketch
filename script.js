const container = document.querySelector("#container");

const SIZE = 16;
const WIDTH = 960;

for (let i = 0; i < SIZE; i++) {
    let row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < SIZE; j++) {
        let square = document.createElement("div");
        square.className = "square";
        square.style.height = `${WIDTH/SIZE}px`;
        square.style.width = `${WIDTH/SIZE}px`;
        square.addEventListener("mouseenter", () => { square.classList.toggle("filled")});
        row.appendChild(square);
    }

    container.appendChild(row);
}