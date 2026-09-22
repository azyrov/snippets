let grandparent = document.querySelector("#grandparent");
let parent = document.querySelector("#parent");


parent.addEventListener("click", (e) => {
    /* WHY WE NEED closest() */
    // clicking anywhere within the parent will still trigger the parent though
    // try clicking in the gaps to prove this
    // these log `undefined` because these clicked locations have no dtaset value to produce
    // of course, we can give the parent a data-value in html so that is triggered

    /* USING closest() */
    // we store the closest ancestor to the target with the button element
    const button = e.target.closest("button");

    // if the triggered location does not have an ancester "button" element, do nothing and return
    // in other words, do nothing 
    if (!(button)) return;

    const value = button.dataset.value;
    console.log(value);

    if (value === `child-one`) {
        console.log(`I am ${value}`)
    } else if (value === `child-two`) {
        console.log(`I am ${value}`)
    } else if (value === `child-three`) {
        console.log(`I am ${value}`)
    } 
})