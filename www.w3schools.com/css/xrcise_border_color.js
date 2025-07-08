qobjects = [
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;border-style: solid;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to set the border color to &quot;green&quot;.",
    options: ["green", "border-set", "color", "border-color", "border-style"],
    correct: [3, 0]
  },
  {
    question: "What is the default color for a border if <code class='w3-codespan'>border-color</code> is not set?",
    options: [
      "Transparent",
      "Black",
      "It inherits the color of the element",
      "None"
    ],
    correct: 2
  },
  {
    question: "How would you set the border color to 'red' for the top, 'green' for the right, 'blue' for the bottom, and 'yellow' for the left?",
    options: [
      "<code>border-color: red blue green yellow;</code>",
      "<code>border-color: red green blue yellow;</code>",
      "<code>border-color: yellow blue green red;</code>",
      "<code>border-color: green red yellow blue;</code>"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_border2.htm"
  },
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;border-style: solid;<br>&nbsp;&nbsp;border-color: ___ ___ ___ ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to set the border colors: red for top, green for right, blue for bottom, and yellow for left.",
    options: ["blue", "red", "green", "yellow"],
    correct: [1, 2, 0, 3]
  },
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;border-style: solid;<br>&nbsp;&nbsp;border-color: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to set the border color using <b>RGB</b> values for red.",
    options: ["rgb(255, 255, 0)", "rgb(255, 0, 0)", "rgb(0, 255, 255)", "rgb(0, 255, 0)"],
    correct: [1]
  }
]
