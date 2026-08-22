let input = document.querySelector("#item");

let list = document.querySelector("#unorderedList");

let button = document.querySelector("#btn")


input.value = ""
let inputValue = input.value;


function clickButton (button, callback) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        let listItem = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = input.value;
        list.append(listItem);
        listItem.append(span);

        let btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete";
        listItem.append(btnDelete);

        input.focus();
        input.value = "";

        callback(btnDelete)
    });
}

function clearList(button) {
    button.addEventListener("click", function(e) {
        this.parentNode.remove();
    })
}


clickButton(button,clearList)

