qobjects = [
  {
    draganddroptext: "<code>.container {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to turn the container into a grid layout.",
    options: ["flex", "grid", "inline", "block", "display", "position"],
    correct: [4, 1]
  },
  {
    draganddroptext: "<code>.container {<br>&nbsp;&nbsp;___: 50px;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property to set the gap between the rows in a grid.",
    options: ["row-gap", "column-gap", "gap", "padding"],
    correct: [0]
  },
  {
    draganddroptext: "<code>.item1 {<br>&nbsp;&nbsp;grid-row-start: ___;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to place an item between row lines 1 and 3.",
    options: ["end", "0", "1", "2", "3", "grid-row-end", "auto"],
    correct: [2, 5, 4]
  },
  {
    question: "Which property is a shorthand for <code class='w3-codespan'>row-gap</code> and <code class='w3-codespan'>column-gap</code>?",
    options: [
      "<code class='w3-codespan'>shorthand</code>",
      "<code class='w3-codespan'>gap</code>",
      "<code class='w3-codespan'>padding</code>",
      "<code class='w3-codespan'>margin</code>",
      "<code class='w3-codespan'>grid-gap</code>"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>.container {<br>&nbsp;&nbsp;___: grid;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Set the gap between rows to 50px, and the gap between columns to 100px in the grid.",
    options: ["row-gap", "display", "5px", "column-gap", "gap", "50px 100px", "150px", "padding"],
    correct: [1, 4, 5]
  },
  {
    question: "The horizontal lines of grid items are called:",
    options: [
      "gaps",
      "columns",
      "vectors",
      "rows"
    ],
    correct: 3
  },
  {
    question: "What is the difference between <code class='w3-codespan'>grid</code> and <code class='w3-codespan'>flex</code>?",
    options: [
      "Grid is for two-dimensional layouts, while Flex is for one-dimensional layouts.",
      "Grid is for responsive designs, while Flex is for static designs.",
      "Grid is for rows only, while Flex is for columns only."
    ],
    correct: 0
  }
]
