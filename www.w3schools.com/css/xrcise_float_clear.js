qobjects = [
  {
    question: "What does the <code class='w3-codespan'>clear</code> property specify?",
    options: [
      "The alignment of floated elements",
      "What should happen with the element next to a floating element",
      "The size of floated elements",
      "The visibility of floated elements"
    ],
    correct: 1
  },
  {
    question: "Which <code class='w3-codespan'>clear</code> value pushes an element below both left and right floated elements?",
    options: [
      "<code>none</code>",
      "<code>left</code>",
      "<code>right</code>",
      "<code>both</code>"
    ],
    correct: 3
  },
  {
    question: "What is the default value of the <code class='w3-codespan'>clear</code> property?",
    options: [
      "<code>none</code>",
      "<code>left</code>",
      "<code>right</code>",
      "<code>both</code>"
    ],
    correct: 0
  },
  {
    question: "Which <code class='w3-codespan'>clear</code> value should you use to push an element below a left floated element?",
    options: [
      "<code>none</code>",
      "<code>left</code>",
      "<code>right</code>",
      "<code>both</code>"
    ],
    correct: 1
  },
  {
    question: "What does the &quot;modern clearfix hack&quot; do?",
    options: [
      "Aligns floated elements to the right",
      "Clears floats by adding a pseudo-element",
      "Adds a scrollbar for overflowing floated elements",
      "Removes padding and margins from floated elements"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>.clearfix::after {<br>&nbsp;&nbsp;content: ___;<br>&nbsp;&nbsp;clear: ___;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to create a modern clearfix hack using <code class='w3-codespan'>::after</code>.",
    options: ["content", "\"\"", "clear", "both", "display", "table"],
    correct: [1, 3, 4, 5]
  },
  {
    draganddroptext: "<code>.element {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to clear a left floated element.",
    options: ["clear", "both", "left", "right", "inherit", "none"],
    correct: [0, 2]
  }
]
