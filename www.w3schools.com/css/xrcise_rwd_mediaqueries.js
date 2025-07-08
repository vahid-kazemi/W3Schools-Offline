qobjects = [
  {
    question: "What does the <code class='w3-codespan'>@media</code> rule allow you to do?",
    options: [
      "Add JavaScript conditions for resizing content.",
      "Include CSS if a certain condition is met.",
      "Automatically generate responsive layouts."
    ],
    correct: 1
  },
  {
    question: "What is the typical purpose of breakpoints in responsive design?",
    options: [
      "To define static sizes for web pages.",
      "To create custom selectors.",
      "To apply styles at specific screen widths.",
      "To align elements horizontally."
    ],
    correct: 2
  },
  {
    question: "What happens at <code class='w3-codespan'>@media only screen and (max-width: 600px)</code>?",
    options: [
      "Styles apply for screens larger than 600px.",
      "Styles apply for screens smaller than 600px.",
      "Breakpoints are disabled.",
      "Elements are hidden from all devices."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>@media screen and (___: 480px) {<br>&nbsp;&nbsp;body {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-color: lightgreen;<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct property to define the minimum width for the media query.",
    options: ["max-width", "min-height", "min-width", "max-height"],
    correct: [2]
  }
]
