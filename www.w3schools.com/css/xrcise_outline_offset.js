qobjects = [
  {
    question: "What does the <code class='w3-codespan'>outline-offset</code> property do?",
    options: [
      "Sets the thickness of the outline",
      "Adds space between the outline and the edge/border of an element",
      "Specifies the color of the outline"
    ],
    correct: 1
  },
  {
    question: "What happens to the space created by <code class='w3-codespan'>outline-offset</code>?",
    options: [
      "It is filled with the background color",
      "It is transparent",
      "It is filled with the border color",
      "It matches the border color"
    ],
    correct: 1
  },
  {
    question: "If an element has <code class='w3-codespan'>outline-offset: 20px</code>, where will the outline appear?",
    options: [
      "20px inside the border",
      "20px outside the edge/border",
      "Aligned with the border",
      "The outline will not appear"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;margin: 30px;<br>&nbsp;&nbsp;border: 2px solid black;<br>&nbsp;&nbsp;outline: 1px solid red;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to add an outline of 15px outside the border edge of the &lt;p&gt; element.",
    options: ["outline-off", "outline-set", "outline-offset", "outline-off-set", "15px", "solid", "blue", "dotted"],
    correct: [2, 4]
  }
]
