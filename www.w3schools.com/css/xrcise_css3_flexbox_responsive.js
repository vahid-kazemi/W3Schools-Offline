qobjects = [
  {
    draganddroptext: "<code>@media (max-width: 800px) {<br>&nbsp;&nbsp;.flex-container {<br>&nbsp;&nbsp;&nbsp;&nbsp;___: column;<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct property name to change the flex direction at the breakpoint.",
    options: ["flex-wrap", "flex-grow", "flex-shrink", "flex-direction"],
    correct: [3]
  },
  {
    draganddroptext: "<code>@media (max-width: 800px) {<br>&nbsp;&nbsp;.flex-item-left, .flex-item-right {<br>&nbsp;&nbsp;&nbsp;&nbsp;___: ___%;<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to make flex items take up the full width on small screens.",
    options: ["flexbox", "25", "flex", "50", "display", "75", "100"],
    correct: [2, 6]
  },
  {
    draganddroptext: "<code>@media (max-width: ___px) {<br>&nbsp;&nbsp;.flex-container {<br>&nbsp;&nbsp;&nbsp;&nbsp;flex-direction: column;<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to set the breakpoint for the media query.",
    options: ["100%", "screens", "800", "small"],
    correct: [2]
  }
]
