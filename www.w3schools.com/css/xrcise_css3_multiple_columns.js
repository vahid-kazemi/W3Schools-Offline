qobjects = [
  {
    question: "What is the purpose of the CSS <code class='w3-codespan'>column-count</code> property?",
    options: [
      "To set the width of each column in a multi-column layout.",
      "To specify the number of columns an element should be divided into.",
      "To define the space between the columns.",
      "To add a rule between columns."
    ],
    correct: 1
  },
  {
    question: "Which CSS property defines the space between columns in a multi-column layout?",
    options: [
      "<code>column-space</code>",
      "<code>column-gap</code>",
      "<code>column-rule</code>",
      "<code>column-span</code>"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;column-___: 3;<br>&nbsp;&nbsp;column-___: 20px;<br>&nbsp;&nbsp;column-rule: 1px solid black;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property names to create a multi-column layout with 3 columns, 20px gap, and a solid black rule between columns.",
    options: ["count", "width", "gap", "span"],
    correct: [0, 2]
  },
  {
    question: "Which CSS property is a shorthand for setting all the <code>column-rule-*</code> properties?",
    options: [
      "<code>column-space</code>",
      "<code>column-gap</code>",
      "<code>column-rule</code>",
      "<code>column-rule-all</code>"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>h2 {<br>&nbsp;&nbsp;column-___: all;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property name to make the heading span across all columns.",
    options: ["span", "count", "gap", "width"],
    correct: [0]
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;column-___: 1px;<br>&nbsp;&nbsp;column-___: solid;<br>&nbsp;&nbsp;column-___: lightblue;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property names to define the rule width, style, and color for columns.",
    options: ["gap", "rule-width", "rule-style", "rule-color"],
    correct: [1, 2, 3]
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;column-___: 150px;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property name to set the optimal width for columns.",
    options: ["width", "count", "gap", "rule"],
    correct: [0]
  }
]
