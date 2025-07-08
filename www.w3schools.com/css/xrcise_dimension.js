qobjects = [
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;___: ___;<br>&nbsp;&nbsp;height: 100px;<br>}</code>",
    draganddropquestion: "Set the maximum width of the <code class='w3-codespan'>div</code> to 500px.",
    options: ["width", "max-width", "height", "min-width", "500px"],
    correct: [1, 4]
  },
  {
    question: "What does the <code class='w3-codespan'>width</code> property define in CSS?",
    options: [
      "The total width including padding, border, and margin.",
      "The width of the content area, excluding padding, border, and margin.",
      "The minimum width of an element.",
      "The width of the entire viewport."
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_dimension1.htm"
  },
  {
    fillintheblanks: "exercise_dimension2.htm"
  },
  {
    question: "What happens if both <code class='w3-codespan'>width</code> and <code class='w3-codespan'>max-width</code> are set and the <code class='w3-codespan'>width</code> exceeds the <code class='w3-codespan'>max-width</code>?",
    options: [
      "The width property takes precedence.",
      "The max-width property takes precedence.",
      "The element will not be displayed.",
      "The browser throws an error."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;height: ___;<br>&nbsp;&nbsp;width: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to set a height of 200px and a width of 50%.",
    options: ["200px", "100px", "50%", "100%"],
    correct: [0, 2]
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;max-width: ___;<br>&nbsp;&nbsp;height: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to set a maximum width of 600px and height of 150px.",
    options: ["600px", "400px", "150px", "100px"],
    correct: [0, 2]
  },
  {
    question: "What is the default value for both the <code class='w3-codespan'>height</code> and <code class='w3-codespan'>width</code> property?",
    options: [
      "<code>length</code>",
      "<code>initial</code>",
      "<code>inherit</code>",
      "<code>auto</code>"
    ],
    correct: 3
  }
]
