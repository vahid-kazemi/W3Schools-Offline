qobjects = [
  {
    draganddroptext: "<code>.flex-container div {<br>&nbsp;&nbsp;___: 3;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property name to change the order of flex items.",
    options: ["flex-grow", "order", "align-self", "flex-basis"],
    correct: [1]
  },
  {
    draganddroptext: "<code>.flex-container div {<br>&nbsp;&nbsp;flex-shrink: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to prevent a flex item from shrinking.",
    options: ["0", "1", "2", "8"],
    correct: [0]
  },
  {
    draganddroptext: "<code>.flex-container div {<br>&nbsp;&nbsp;flex: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct shorthand values to make an item not grow, not shrink, and 200px wide.",
    options: ["no no 200px", "0 0 200px", "1 1 auto", "0 1 100px", "flex-start"],
    correct: [1]
  },
  {
    draganddroptext: "<code>.flex-container div:nth-child(3) {<br>&nbsp;&nbsp;align-self: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to align a flex item to the center of the container.",
    options: ["flex-start", "center", "flex-end", "stretch"],
    correct: [1]
  },
  {
    draganddroptext: "<code>.flex-container div:nth-child(2) {<br>&nbsp;&nbsp;align-self: ___;<br>}<br>.flex-container div:nth-child(3) {<br>&nbsp;&nbsp;align-self: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to align one item to the top and another to the bottom of the container.",
    options: ["top", "bottom", "flex-start", "flex-end", "center", "stretch"],
    correct: [[2,3], [3,2]]
  },
  {
    draganddroptext: "<code>.flex-container div {<br>&nbsp;&nbsp;flex-___: 1;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property name to make all flex items grow equally.",
    options: ["shrink", "basis", "grow", "order"],
    correct: [2]
  }
]
