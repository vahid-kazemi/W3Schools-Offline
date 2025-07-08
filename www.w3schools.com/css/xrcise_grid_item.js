qobjects = [
  {
    draganddroptext: "<code>.item1 {<br>&nbsp;&nbsp;grid-area: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to assign the name 'header' to the grid item.",
    options: ["header", "footer", "main", "menu"],
    correct: [0]
  },
  {
    draganddroptext: "<code>.item1 {<br>&nbsp;&nbsp;grid-column: ___ / ___ ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to make 'item1' start at column 1 and span 3 columns.",
    options: ["1", "2", "3", "span"],
    correct: [0, 3, 2]
  },
  {
    draganddroptext: "<code>.item1 {<br>&nbsp;&nbsp;justify-self: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to align 'item1' to the right along the row axis.",
    options: ["start", "center", "end", "right"],
    correct: [3]
  },
  {
    draganddroptext: "<code>.item1 {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to center 'item1' along the column axis.",
    options: ["start", "center", "end", "stretch", "align-self", "justify", "middle"],
    correct: [4, 1]
  },
  {
    question: "Which property is a shorthand for specifying the starting and ending column lines for a grid item?",
    options: [
      "<code>grid-column</code>",
      "<code>grid-row</code>",
      "<code>grid-template-columns</code>",
      "<code>grid-template-areas</code>"
    ],
    correct: 0
  },
  {
    question: "True or False:<br>The <code class='w3-codespan'>grid-area</code> property is a shorthand for <code class='w3-codespan'>column-gap</code> and <code class='w3-codespan'>row-gap</code>",
    options: [
      "True",
      "False"
    ],
    correct: 1
  }
]
