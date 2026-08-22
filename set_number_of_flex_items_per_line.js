let num  = 0;

function setFlexItemsPerLine(itemsPerLine) {
    // converts number into % for flex basis 
    const percentage = (100 / itemsPerLine).toFixed(4);

    div.style.flexBasis = `${percentage}%`;
    // the boxes will grow if they need to 
    // using 1 here instead of 0 in the etch a sketch to try it out when i use it
    div.style.flexGrow = "1";
    // the boxes will shrink if they need to
    // using 1 here instead of 0 in the etch a sketch to try it out when i use it
    div.style.flexShrink = "1"

}

setFlexItemsPerLine(num);