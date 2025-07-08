qobjects = [
  {
    question: "What is the default center position for a conic gradient?",
    options: [
      "Top left",
      "Bottom right",
      "Center",
      "Top center"
    ],
    correct: 2
  },
  {
    question: "What is the purpose of the &quot;from angle&quot; value in a conic gradient?",
    options: [
      "Defines the starting color of the gradient",
      "Rotates the gradient by a specified angle",
      "Defines the center position of the gradient",
      "Repeats the gradient at the specified angle"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>#example {<br>&nbsp;&nbsp;background-image: ___(red, yellow, green);<br>}</code>",
    draganddropquestion: "Drag and drop the correct function to create a conic gradient transitioning from red to yellow to green.",
    options: ["conic-gradient", "linear-gradient", "radial-gradient", "repeating-conic-gradient"],
    correct: [0]
  },
  {
    draganddroptext: "<code>#example {<br>&nbsp;&nbsp;background-image: ___(___ ___, red, yellow, green);<br>}</code>",
    draganddropquestion: "Drag and drop the correct function to create a conic gradient starting at 90 degrees.",
    options: ["conic-gradient", "90deg", "linear-gradient", "radial-gradient", "center", "at", "from"],
    correct: [0, 6, 1]
  }
]
