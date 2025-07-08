qobjects = [
  {
    question: "What is the default shape of a radial gradient in CSS?",
    options: [
      "<code>circle</code>",
      "<code>ellipse</code>",
      "<code>rectangle</code>",
      "<code>polygon</code>"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_css3_gradients6.htm"
  },
  {
    fillintheblanks: "exercise_css3_gradients7.htm"
  },
  {
    question: "What is the default position of a radial gradient?",
    options: [
      "Top left",
      "Bottom right",
      "Center",
      "Top center"
    ],
    correct: 2
  },
  {
    question: "How do you create a repeating radial gradient?",
    options: [
      "<code>radial-gradient()</code>",
      "<code>repeating-radial-gradient()</code>",
      "<code>repeat-radial-gradient()</code>",
      "<code>circle-radial-gradient()</code>"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>#example {<br>&nbsp;&nbsp;background-image: ___(red, yellow, green);<br>}</code>",
    draganddropquestion: "Drag and drop the correct function to create a radial gradient transitioning from red to yellow to green.",
    options: ["rad-gradient", "radial-gradient", "repeating-radial", "linear-gradient", "none"],
    correct: [1]
  },
  {
    draganddroptext: "<code>#example {<br>&nbsp;&nbsp;background-image: ___(___, red, yellow, green);<br>}</code>",
    draganddropquestion: "Drag and drop the correct keywords to create a circular radial gradient transitioning from red to yellow to green.",
    options: ["radial-gradient", "circle", "linear-gradient", "round", "ellipse", "50%"],
    correct: [0, 1]
  },
  {
    draganddroptext: "<code>#example {<br>&nbsp;&nbsp;background-image: ___(___ at ___, red, yellow, green);<br>}</code>",
    draganddropquestion: "Drag and drop the correct function to create a radial gradient that ends at the closest corner, starting from the center.",
    options: ["radial-gradient", "center", "linear-gradient", "closest-corner"],
    correct: [0, 3, 1]
  }
]
