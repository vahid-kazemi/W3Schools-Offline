qobjects = [
  {
    question: "What is the purpose of the <code class='w3-codespan'>@media</code> rule in CSS?",
    options: [
      "To add animations to elements",
      "To define styles for different media types",
      "To optimize CSS for faster loading",
      "To set styles for print media only"
    ],
    correct: 1
  },
  {
    question: "What does the keyword <code class='w3-codespan'>not</code> do in a media query?",
    options: [
      "Combines multiple media features",
      "Prevents older browsers from applying styles",
      "Inverts the meaning of the media query",
      "Specifies a fallback stylesheet"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>___ ___ and (min-width: 480px) {<br>&nbsp;&nbsp;body { ___: lightgreen; }<br>}</code>",
    draganddropquestion: "Fill in the blanks to create a media query that sets the background color of the body to lightgreen when the viewport is at least 480px wide.",
    options: ["screen", "print", "background-color", "color", "@media", "max-width"],
    correct: [4, 0, 2]
  },
  {
    draganddroptext: "<code>@media all and (max-width: ___px) {<br>&nbsp;&nbsp;h1 { ___: center; }<br>}</code>",
    draganddropquestion: "Fill in the blanks to create a media query that centers the heading when the viewport width is 600px or smaller.",
    options: ["600", "480", "text-align", "margin", "padding"],
    correct: [0, 2]
  },
  {
    draganddroptext: "<code>@media screen and (min-width: ___px) and (max-width: ___px) {<br>&nbsp;&nbsp;.container { ___: 20px; }<br>}</code>",
    draganddropquestion: "Fill in the blanks to create a media query that sets the padding to 20px for containers when the viewport width is between 700px and 900px.",
    options: ["700", "900", "padding", "margin", "width"],
    correct: [0, 1, 2]
  },
  {
    draganddroptext: "<code>@media screen and (___: 480px) {<br>&nbsp;&nbsp;body {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: lightgreen;<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct property to define the minimum width for the media query.",
    options: ["max-width", "min-height", "min-width", "max-height"],
    correct: [2]
  }
]