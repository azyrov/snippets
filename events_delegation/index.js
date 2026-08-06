// let home = document.querySelector("#home");

// home.addEventListener("click", (e) => {
//     console.log("Home menu item was clicked")
// })

// let dashboard = document.querySelector("#dashboard");

// dashboard.addEventListener("click", (e) => {
//     console.log("Dashboard menu item was clicked")
// })

// let report = document.querySelector("#report");

// report.addEventListener("click", (e) => {
//     console.log("Report menu item was clicked")
// })

let menu = document.querySelector("#menu")
menu.addEventListener("click", (e) => {
    // we can store event.target as target then use target.id ad the switch condition

    switch (e.target.id) {
        case "home":
            console.log("Home menu item was clicked")
            break;
        
        case "dashboard":
            console.log("Dashboard menu item was clicked")
            break;

        case "report":
            console.log("Report menu item was clicked")
            break;
    }
})