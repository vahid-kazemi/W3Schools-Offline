qobjects = [
  {
    draganddroptext: "<code>.flex-container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property name to set the direction of the flex container to <code class='w3-codespan'>column</code>.",
    options: ["flex-wrap", "flex-flow", "flex-direction", "align-items", "flexbox", "column"],
    correct: [2, 5]
  },
  {
    draganddroptext: "<code>.flex-container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;justify-content: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to center the flex items along the main axis.",
    options: ["flex-start", "center", "space-between", "stretch"],
    correct: [1]
  },
  {
    draganddroptext: "<code>.flex-container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property name to align items to the bottom of the flex container.",
    options: ["content", "align-items", "flex-end", "self", "wrap"],
    correct: [1, 2]
  },
  {
    draganddroptext: "<code>.flex-container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;___: wrap;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property name to allow flex items to wrap onto multiple lines.",
    options: ["flex-direction", "flex-flow", "flex-wrap", "flex-align"],
    correct: [2]
  },
  {
    draganddroptext: "<code>.flex-container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;flex-flow: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct combination of properties for row direction and wrapping.",
    options: ["row nowrap", "row wrap", "column wrap", "column nowrap"],
    correct: [1]
  },
  {
    question: "What does the following code do? <br><code class='codeblock'>.flex-container {<br>&nbsp;&nbsp;display: flex;<br>&nbsp;&nbsp;height: 300px;<br>&nbsp;&nbsp;justify-content: center;<br>&nbsp;&nbsp;align-items: center;<br>}</code>",
    options: [
      "Prevents items from wrapping to new lines",
      "Aligns items to the start of the flex container",
      "Creates a perfect centered flex item"
    ],
    correct: [2]
  },
  {
    question: "Which value displays the flex items vertically (from top to bottom)?",
    options: [
      "row",
      "space-evenly",
      "column",
      "center"
    ],
    correct: [2]
  }
]
