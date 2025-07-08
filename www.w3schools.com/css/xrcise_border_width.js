qobjects = [
  {
    question: "Which property is used to set the width of an element's border?",
    options: [
      "<code>border-style</code>",
      "<code>border-width</code>",
      "<code>border-color</code>",
      "<code>border-radius</code>"
    ],
    correct: 1
  },
  {
    question: "What is the default value of <code class='w3-codespan'>border-width</code>?",
    options: [
      "<code>thin</code>",
      "<code>medium</code>",
      "<code>thick</code>",
      "It depends on the border style."
    ],
    correct: 1
  },
  {
    question: "How would you set the border width to 10px for the top and bottom, and 5px for the left and right?",
    options: [
      "<code>border-width: 10px 5px;</code>",
      "<code>border-width: 5px 10px;</code>",
      "<code>border-width: 10px;</code>",
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;border-style: solid;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to set the width of the border to 5px.",
    options: ["thin", "5px", "thick", "border-width", "width-of-border", "border-w"],
    correct: [3, 1]
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;border-style: dotted;<br>&nbsp;&nbsp;border-width: ___ ___ ___ ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to set border widths: 10px top, 15px right, 5px bottom, and 20px left.",
    options: ["20px", "10px", "5px", "15px"],
    correct: [1, 3, 2, 0]
  },
  {
    draganddroptext: "<code>h1 {<br>&nbsp;&nbsp;border-style: solid;<br>&nbsp;&nbsp;border-width: ___ ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to set border-width: 12px for top and bottom, 8px for left and right.",
    options: ["8px", "12px"],
    correct: [1, 0]
  }
]
