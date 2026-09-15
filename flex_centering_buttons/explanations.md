How flex determines how to increase or reduce the size of flex-items

1. flex checks the container dimensions in that main axis
- width for main axis (flex-direction : row)
- height in main axis (flex-direction:column) 
2. flex checks the width of the container
- this will be used to determine the extra space
3. flex checks the flex-basis of the child items
- flex-basis determines the starting size in the main-axis
    - this size can change with flex-grow and flex-shrink
- if flex-direction : row, this is horizontal
    - as such if width and flex-basis are both present for the child-items, flex-basis is chosen and overrides width (except for flex-basis: auto)
- if flex-direction : column, this is vertical
- flex-basis values:
    - auto
        - the flex item simply takes the available space
        - the flex-basis uses the width as the starting point
        - if the width is not explicitly provided, the width is determined from the intrinsic sizing of the item
            - the intrinsic sizing is determined by the internal elements without the system giving it a size
        - we can use min-content and max-content as values for flex-basis to determine the starting size as well
            - max-content determines the width based on the entire width of the item whch can fit in that main-axis
                - for a flex item with the text "I love flexbox", the max-content as a basis will automatically calculate the width to allow the entire "I love flexbox" on the line.
                - obviously, max-content is used more than ave ontent since we usually want the keep the entire text on the same line
            ```html
            <div class="father">
                <div class="child">
                    <p>my name is John</p>
                </div>
            </div>
            ```
            ```css
            .father {
                border: 1px solid green;
                display: flex;
            }

            .child {
                width: max-content;
            }
            ```
            - min-content determines the width based on hte width of the longest unbroken line so the text willbe wrappd so that it appears as:
                I
                love
                flexbox
            ```html
            <div class="father">
                <div class="child">
                    <p>my name is John</p>
                </div>
            </div>
            ```
            ```css
            .father {
                border: 1px solid green;
                display: flex;
            }

            .child {
                width: min-content;
            }
            ```