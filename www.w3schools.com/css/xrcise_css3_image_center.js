qobjects = [
  {
    question: "How can you center an image horizontally using margin?",
    options: [
      "Set <code>margin</code> to <code>align-center</code>.",
      "Set <code>margin</code> to <code>auto</code> and ensure the image has <code>display: inline;</code>.",
      "Set <code>margin</code> to <code>auto</code> and ensure the image has <code>display: block;</code>.",
      "Set <code>margin</code> to <code>center</code>."
    ],
    correct: 2
  },
  {
    question: "Which CSS property must you use with <code class='w3-codespan'>display: flex</code> to horizontally center an image?",
    options: [
      "<code>align-items</code>",
      "<code>justify-content</code>",
      "<code>margin</code>",
      "<code>align-self</code>"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>img {<br>&nbsp;&nbsp;___: block;<br>&nbsp;&nbsp;margin: ___;<br>&nbsp;&nbsp;___: 50%;<br>}</code>",
    draganddropquestion: "Drag and drop the correct properties and values to center an image horizontally using <code class='w3-codespan'>margin</code>.",
    options: ["max", "display", "center", "horizontal", "auto", "width"],
    correct: [1, 4, 5]
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;___: ___;<br>&nbsp;&nbsp;___: center;<br>}<br><br>div img {<br>&nbsp;&nbsp;width: 50%;<br>}</code>",
    draganddropquestion: "Drag and drop the correct properties and values to center an image horizontally using <code class='w3-codespan'>flexbox</code>.",
    options: ["flexbox", "justify-content", "justify-center", "text-align", "display", "flex", "50"],
    correct: [4, 5, 1]
  }
]
