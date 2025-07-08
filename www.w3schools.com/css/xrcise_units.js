qobjects = [
  {
    question: "Which CSS unit is considered an absolute length unit?",
    options: [
      "em",
      "vw",
      "px",
      "rem"
    ],
    correct: 2
  },
  {
    question: "Which unit is relative to the font size of the root element?",
    options: [
      "em",
      "rem",
      "vw",
      "vh"
    ],
    correct: 1
  },
  {
    question: "What does the <code class='w3-codespan'>vw</code> unit represent?",
    options: [
      "Relative to the font size of the element",
      "Relative to 1% of the width of the viewport",
      "Relative to the height of the parent element",
      "Relative to the font size of the root element"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>h1 {<br>&nbsp;&nbsp;font-size: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS unit to set the font size of an <code class='w3-codespan'>&lt;h1&gt;</code> element to 40 pixels.",
    options: ["40px", "40em", "40vw", "40%"],
    correct: [0]
  },
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;width: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS unit to set the width of a paragraph to 50% of its parent element.",
    options: ["50%", "50vw", "50rem", "50px"],
    correct: [0]
  },
  {
    draganddroptext: "<code>.container {<br>&nbsp;&nbsp;height: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS unit to set the height of a container to 25% of the viewport height.",
    options: ["25vh", "25vw", "25em", "25rem"],
    correct: [0]
  },
  {
    draganddroptext: "<code>body {<br>&nbsp;&nbsp;font-size: ___;<br>}</code><br><code>h1 {<br>&nbsp;&nbsp;font-size: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS units to set the root font size to 16px and the heading font size to 2 times the root font size.",
    options: ["16px", "2em", "2rem", "1em", "1rem"],
    correct: [0, 2]
  }
]
