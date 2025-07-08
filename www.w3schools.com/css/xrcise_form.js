qobjects = [
  {
    draganddroptext: "<code>input[type=text] {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to style all text input fields to have a width of 100%.",
    options: ["background-color", "1", "100%", "padding", "border-radius", "width", "box-sizing"],
    correct: [5, 2]
  },
  {
    question: "Which property can be used to add space inside an input field?",
    options: [
      "<code>padding</code>",
      "<code>space</code>",
      "<code>margin</code>",
      "<code>border</code>"
    ],
    correct: 0
  },
  {
    question: "How can you select only text input fields in a form?",
    options: [
      "<code>input[type=string]</code>",
      "<code>input[type=text]</code>",
      "<code>input[type=field]</code>",
      "<code>input[text]</code>"
    ],
    correct: 1
  },
  {
    question: "What does the <code class='w3-codespan'>box-sizing: border-box;</code> property ensure?",
    options: [
      "Padding and borders are included in the total width and height",
      "Only the content width is considered for the element's size",
      "The input field has rounded corners",
      "The input field has no padding"
    ],
    correct: 0
  },
  {
    question: "Which property would you use to add a border to an input field?",
    options: [
      "<code>outlines</code>",
      "<code>brdr</code>",
      "<code>padding</code>",
      "<code>border</code>"
    ],
    correct: 3
  },
  {
    question: "Which selector can be used to do something with an input field when it gets focus?",
    options: [
      "<code>input:active</code>",
      "<code>input:checked</code>",
      "<code>input:focus</code>",
      "<code>input:hover</code>"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>input[___] {<br>&nbsp;&nbsp;___: green;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and values to style a text input field with a green background and white text.",
    options: [
      "bg-color", "green", 
      "color", "white", 
      "border", "none", 
      "padding", "background-color", "type=text",
      "type=field"
    ],
    correct: [8, 7, 2, 3]
  }
]
