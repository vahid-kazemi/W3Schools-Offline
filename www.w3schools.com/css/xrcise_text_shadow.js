qobjects = [
  {
    draganddroptext: "<code>h1 {<br>&nbsp;&nbsp;___: 2px 2px ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to add a red shadow to text.",
    options: ["color", "text-shadow", "background-color", "font-style", "red"],
    correct: [1, 4]
  },
  {
    question: "What does the <code class='w3-codespan'>text-shadow</code> property do?",
    options: [
      "Adds background color to the text",
      "Changes the font style of the text",
      "Adds shadow to the text",
      "Aligns the text horizontally"
    ],
    correct: 2
  },
  {
    question: "True or False:<br>It is possible to add multiple text shadows to a single element.",
    options: [
      "Yes",
      "No"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>h1 {<br>&nbsp;&nbsp;text-shadow: ___ 5px red;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to specify horizontal and vertical shadows for the <code class='w3-codespan'>&lt;h1&gt;</code> element.",
    options: ["2px", "h=2px", "hor=2px", "horizontal=2px", "hor:2px"],
    correct: [0]
  },
  {
    question: "Which of the following correctly adds a text shadow with a blur effect?",
    options: [
      "<code>text-shadow: 2px red;</code>",
      "<code>text-shadow: 2px 2px 5px red;</code>",
      "<code>text-shadow: 5px red 5px;</code>"
    ],
    correct: 1
  }
]
