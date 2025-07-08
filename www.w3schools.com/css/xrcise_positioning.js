qobjects = [
  {
    question: "What is the default value of the <code class='w3-codespan'>position</code> property for HTML elements?",
    options: [
      "<code>relative</code>",
      "<code>static</code>",
      "<code>absolute</code>",
      "<code>fixed</code>"
    ],
    correct: 1
  },
  {
    question: "Which <code class='w3-codespan'>position</code> value makes an element stay in the same place even if the page is scrolled?",
    options: [
      "<code>static</code>",
      "<code>relative</code>",
      "<code>absolute</code>",
      "<code>fixed</code>"
    ],
    correct: 3
  },
  {
    question: "What happens when an element is given <code class='w3-codespan'>position: absolute;</code> but has no positioned ancestors?",
    options: [
      "It is positioned relative to the nearest fixed element",
      "It is positioned relative to the document body",
      "It is positioned relative to the viewport",
      "It behaves like <code>position: relative;</code>"
    ],
    correct: 1
  },
  {
    question: "What is required for <code class='w3-codespan'>position: sticky;</code> to work?",
    options: [
      "At least one of top, bottom, left, or right must be set",
      "The element must have a positioned ancestor",
      "The element must be inside a fixed container",
      "The element must have a specific height"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>div.sticky {<br>&nbsp;___: ___;<br>&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS properties to make an element sticky at the top of the page when scrolling.",
    options: ["position", "sticky", "relative", "top", "0", "left"],
    correct: [[0,3], [1,4], [3,0], [4,1]]
  },
  {
    fillintheblanks: "exercise_positioning1.htm"
  },
  {
    fillintheblanks: "exercise_positioning2.htm"
  },
  {
    fillintheblanks: "exercise_positioning3.htm"
  },
  {
    fillintheblanks: "exercise_positioning4.htm"
  }
]
