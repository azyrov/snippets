let arr = [1, 2, 3]

function useForLoop (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += arr[i];
    }

    console.log(sum);
}
// useForLoop(arr);

function forOfLoop(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }

    console.log(sum);
}
// forOfLoop(arr);

function forEachLoop(array) {
    let sum = 0;
    array.forEach((item) => {
        sum += item;
    })

    console.log(sum)
}

// forEachLoop(arr)

function reduceLoop(array) {
    console.log(array.reduce(((sum, num) => (sum += num)), 0));
}

// reduceLoop(arr);