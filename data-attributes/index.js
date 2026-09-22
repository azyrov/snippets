let grandparent = document.querySelector("#grandparent");
let parent = document.querySelector("#parent");


parent.addEventListener("click", (e) => {
    const value = e.target.dataset.value;
    console.log(value);

    if (value === "child-one") {
        console.log(`I am ${value}`)
    } else if (value === `child-two`) {
        console.log(`I am ${value}`)
    } else if (value === `child-three`) {
        console.log(`I am ${value}`)
    } 
})