qobjects = [
  {
    question: "What are the minimum values required to define a text shadow?",
    options: [
      "Horizontal and vertical shadow values",
      "Horizontal shadow, vertical shadow, and blur radius",
      "Horizontal shadow, vertical shadow, blur radius, and color",
      "Color and blur radius"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_css3_shadows1.htm"
  },
  {
    fillintheblanks: "exercise_css3_shadows2.htm"
  },
  {
    fillintheblanks: "exercise_css3_shadows3.htm"
  },
  {
    question: "How do you add multiple shadows to text?",
    options: [
      "Use a semicolon-separated list of shadows",
      "Use a comma-separated list of shadows",
      "Use a space-separated list of shadows",
      "Define shadows in separate CSS rules"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>#example {<br>&nbsp;&nbsp;text-shadow: ___ ___ ___ ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to create a red text shadow with horizontal shadow of 3px, vertical shadow of 3px, and a blur radius of 5px.",
    options: ["3px", "3px", "5px", "red"],
    correct: [[0,1], [0,1], 2, 3]
  },
  {
    draganddroptext: "<code>#example {<br>&nbsp;&nbsp;text-shadow: ___ ___ ___ ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to create a glowing red shadow with no horizontal or vertical offset and a blur radius of 3px.",
    options: ["0", "0", "3px", "red"],
    correct: [[0,1], [0,1], 2, 3]
  }
]
