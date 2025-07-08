qobjects = [
  {
    question: "What CSS property can be used to horizontally center a block element like a <code class='w3-codespan'>&lt;div&gt;</code>?",
    options: [
      "<code>text-align: middle</code>",
      "<code>margin: auto</code>",
      "<code>display: block</code>",
      "<code>position: relative</code>"
    ],
    correct: 1
  },
  {
    question: "Which CSS property should you use to center-align text inside an element?",
    options: [
      "<code>margin: auto</code>",
      "<code>text-align: center</code>",
      "<code>vertical-align: middle</code>",
      "<code>line-height</code>"
    ],
    correct: 1
  },
  {
    question: "How can you center an image horizontally in its container?",
    options: [
      "Set <code>text-align: middle</code> on the container",
      "Set <code>margin-left: auto</code> and <code>margin-right: auto</code> on the image and make it a block element",
      "Set <code>float: center</code> on the image",
      "Set <code>position: relative</code> on the image"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_align1.htm"
  },
  {
    fillintheblanks: "exercise_align2.htm"
  },
  {
    question: "Which CSS layout method is the most modern and recommended for centering content both horizontally and vertically?",
    options: [
      "<code>padding</code>",
      "<code>line-height</code>",
      "<code>position and transform</code>",
      "<code>flexbox</code>"
    ],
    correct: 3
  },
  {
    draganddroptext: "<code>.center {<br>&nbsp;&nbsp;___: ___;<br>&nbsp;&nbsp;___: 50%;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS properties to horizontally center a block element with a specified width.",
    options: ["margin", "auto", "width", "50%", "text-align", "center"],
    correct: [0, 1, 2]
  },
  {
    draganddroptext: "<code>.center {<br>&nbsp;&nbsp;display: ___;<br>&nbsp;&nbsp;___: ___;<br>&nbsp;&nbsp;align-items: center;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS properties to center content using flexbox.",
    options: ["align-items", "display", "center", "flex", "justify-content", "height", "200px"],
    correct: [3, 4, 2]
  }
]
