qobjects = [
  {
    question: "Which combinator selects elements that are direct children of a specified element?",
    options: [
      "Child combinator (> )",
      "Descendant combinator (space)",
      "Next sibling combinator (+)",
      "Subsequent-sibling combinator (~)"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_combinators1.htm"
  },
  {
    fillintheblanks: "exercise_combinators2.htm"
  },
  {
    fillintheblanks: "exercise_combinators3.htm"
  },
  {
    fillintheblanks: "exercise_combinators4.htm"
  },
  {
    question: "What is the purpose of the next sibling combinator (+)?",
    options: [
      "Selects all sibling elements after a specified element",
      "Selects the first element immediately following a specified element",
      "Selects all elements that are direct children of a specified element",
      "Selects all elements that are descendants of a specified element"
    ],
    correct: 1
  },
  {
    question: "Which combinator selects all elements that are siblings of a specified element?",
    options: [
      "Child combinator (> )",
      "Descendant combinator (space)",
      "Next sibling combinator (+)",
      "Subsequent-sibling combinator (~)"
    ],
    correct: 3
  },
  {
    draganddroptext: "<code>div ___ p {<br>&nbsp;&nbsp;background-color: yellow;<br>}</code>",
    draganddropquestion: "Drag and drop the correct combinator to select all <code class='w3-codespan'>&lt;p&gt;</code> elements that are next siblings of a <code class='w3-codespan'>&lt;div&gt;</code> element.",
    options: [">", "+", "~"],
    correct: [2]
  },
  {
    draganddroptext: "<code>div ___ p {<br>&nbsp;&nbsp;background-color: yellow;<br>}</code>",
    draganddropquestion: "Drag and drop the correct combinator to select all <code class='w3-codespan'>&lt;p&gt;</code> elements that are direct children of <code class='w3-codespan'>&lt;div&gt;</code> elements.",
    options: [">", "+", "~"],
    correct: [0]
  }
]
