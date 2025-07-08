qobjects = [
  {
    question: "Which CSS property is used to clip an image into specific shapes?",
    options: [
      "<code>shape-outside</code>",
      "<code>border-radius</code>",
      "<code>clip-path</code>",
      "<code>mask</code>"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>img {<br>&nbsp;&nbsp;___: ___(40%);<br>}</code>",
    draganddropquestion: "Drag and drop the correct function to clip an image into a circle.",
    options: ["rounded", "circle", "ellipse", "polygon", "clip-path", "clips"],
    correct: [4, 1]
  },
  {
    question: "How do you clip an image into a perfect circle?",
    options: [
      "<code>clip-path: circle(100%)</code>",
      "<code>clip-path: circle(50%)</code>",
      "<code>clip-path: ellipse(100%)</code>",
      "<code>clip-path: ellipse(50%)</code>"
    ],
    correct: 1
  },
  {
    question: "What is the default center position for <code class='w3-codespan'>circle()</code> and <code class='w3-codespan'>ellipse()</code> in the <code class='w3-codespan'>clip-path</code> property?",
    options: [
      "left",
      "right",
      "center",
      "top"
    ],
    correct: 2
  },
  {
    question: "Which <code class='w3-codespan'>clip-path</code> function is used to define custom shapes using x and y coordinates?",
    options: [
      "<code>circle()</code>",
      "<code>ellipse()</code>",
      "<code>polygon()</code>",
      "<code>rectangle()</code>"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>img {<br>&nbsp;&nbsp;___: ___(40% 50%);<br>}</code>",
    draganddropquestion: "Drag and drop the correct function to clip an image into an ellipse.",
    options: ["rounded", "circle", "ellipse", "polygon", "clip-path", "clips"],
    correct: [4, 2]
  },
  {
    draganddroptext: "<code>img {<br>&nbsp;&nbsp;___: ___(50% 0%, 100% 50%, 50% 100%, 0% 50%);<br>}</code>",
    draganddropquestion: "Drag and drop the correct function to clip an image into a polygon.",
    options: ["circle", "ellipse", "polygon", "clip-path"],
    correct: [3, 2]
  },
  {
    question: "Which CSS property works with <code class='w3-codespan'>clip-path</code> to shape the wrapping text around an image?",
    options: [
      "<code>shape-inside</code>",
      "<code>shape-outside</code>",
      "<code>float</code>",
      "<code>mask</code>"
    ],
    correct: 1
  }
]
