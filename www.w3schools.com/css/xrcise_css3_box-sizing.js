qobjects = [
  {
    question: "Which CSS property is used to control the box model of an element?",
    options: [
      "<code>box-sizing</code>",
      "<code>margin</code>",
      "<code>padding</code>",
      "<code>border</code>",
      "<code>box-shadow</code>"
    ],
    correct: 0
  },
  {
    question: "What does the value <code class='w3-codespan'>border-box</code> for <code class='w3-codespan'>box-sizing</code> do?",
    options: [
      "Includes only the content within the specified width and height",
      "Includes padding and border within the specified width and height",
      "Excludes padding, border, and margin from the box size",
      "Applies only to elements with a border"
    ],
    correct: 1
  },
  {
    question: "Which value of <code class='w3-codespan'>box-sizing</code> is the default in CSS?",
    options: [
      "<code>border-box</code>",
      "<code>content-box</code>",
      "<code>inherit</code>",
      "<code>initial</code>"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Fill in the blanks to set the box model to include padding and borders in the specified dimensions.",
    options: ["box-sizing", "border-box", "content-box", "margin", "padding"],
    correct: [0, 1]
  },
  {
    draganddroptext: "<code>* {<br>&nbsp;&nbsp;box-sizing: ___;<br>}</code>",
    draganddropquestion: "Fill in the blank to apply a box-sizing rule globally where padding and borders are included in element dimensions.",
    options: ["content-box", "inherit", "border-box", "padding-box"],
    correct: [2]
  }
]
