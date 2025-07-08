qobjects = [
  {
    draganddroptext: "<code>.grid-container {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to turn the container into a grid container.",
    options: ["block", "inline", "grid", "display", "container", "flex"],
    correct: [3, 2]
  },
  {
    draganddroptext: "<code>.grid-container {<br>&nbsp;&nbsp;___: auto auto auto ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to define a grid layout with 4 columns, each having automatic width.",
    options: ["auto", "80px", "grid-template-columns", "grid", "gap", "40px", "200px"],
    correct: [2, 0]
  },
  {
    draganddroptext: "<code>.grid-container {<br>&nbsp;___: ___ 200px;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to define the height of two rows in the grid as 80px and 200px.",
    options: ["80px", "100px", "200px", "auto", "grid-template-rows", "grid-template-columns"],
    correct: [4, 0]
  },
  {
    draganddroptext: "<code>.grid-container {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to align the grid content evenly inside the container.",
    options: ["space-between", "space-around", "space-evenly", "justify-content", "align", "center"],
    correct: [3, 2]
  },
  {
    draganddroptext: "<code>.grid-container {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to vertically center-align the grid content inside the container.",
    options: ["start", "end", "center", "space-evenly", "align-content", "align"],
    correct: [4, 2]
  },
  {
    question: "What property defines the number of columns in a CSS grid layout?",
    options: [
      "<code class='w3-codespan'>grid-template-rows</code>",
      "<code class='w3-codespan'>grid-template-columns</code>",
      "<code class='w3-codespan'>column-gap</code>",
      "<code class='w3-codespan'>align-content</code>"
    ],
    correct: 1
  },
  {
    question: "What happens if you specify more grid items than columns in a grid?",
    options: [
      "The extra items will overlap the existing grid items.",
      "The grid will automatically add new rows.",
      "The extra items will be hidden.",
      "The grid layout will break."
    ],
    correct: 1
  },
  {
    question: "Which value of <code class='w3-codespan'>justify-content</code> aligns the grid content at the start of the container?",
    options: [
      "<code class='w3-codespan'>center</code>",
      "<code class='w3-codespan'>space-evenly</code>",
      "<code class='w3-codespan'>start</code>",
      "<code class='w3-codespan'>end</code>",
      "<code class='w3-codespan'>first</code>"
    ],
    correct: 2
  }
]
