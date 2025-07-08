qobjects = [
  {
    draganddroptext: "<code>.box {<br>&nbsp;&nbsp;___: absolute;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct properties and values to make an element appear in front of all others in the stacking order.",
    options: ["z-index", "position", "absolute", "relative", "front", "1", "1000"],
    correct: [1, 0, 6]
  },
  {
    question: "What does the <code class='w3-codespan'>z-index</code> property specify?",
    options: [
      "The alignment of elements",
      "The stacking order of elements",
      "The position of elements on the page",
      "The size of elements"
    ],
    correct: 1
  },
  {
    question: "Which type of elements can <code class='w3-codespan'>z-index</code> be applied to?",
    options: [
      "Static elements",
      "Positioned elements and flex items",
      "Only flex items",
      "All elements"
    ],
    correct: 1
  },
  {
    question: "What happens if two overlapping positioned elements do not have a <code class='w3-codespan'>z-index</code> specified?",
    options: [
      "The one defined first in the CSS will appear on top",
      "The one defined last in the HTML will appear on top",
      "Both elements will share the same layer",
      "The browser will display an error"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>.box {<br>&nbsp;&nbsp;___: absolute;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS properties to make an element stack behind all others.",
    options: ["position", "absolute", "relative", "z-index", "0", "-1"],
    correct: [0, 3, 5]
  },
  {
    fillintheblanks: "exercise_z-index1.htm"
  }
]
