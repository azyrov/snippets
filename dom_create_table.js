function createTable (button) {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (let i = 0; i < 3; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 2; j++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`cell row ${[i]},column: ${[j]}`)
            cell.append(cellText);
            row.append(cell);
        }

    tblBody.append(row);
    }

    tbl.append(tblBody);
    tbl.style.border = "1px solid black";

    container.append(tbl)
}

let btn = document.createElement("button");
btn.textContent = "Click Me";
container.append(btn);

btn.addEventListener("click", createTable, {once: true})

