qobjects = [
  {
    question: "Which property is used to define the color of an element's outline?",
    options: [
      "border-color",
      "outline-color",
      "color",
      "outline-style"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_outline2.htm"
  },
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;border: 2px solid black;<br>&nbsp;&nbsp;___: dotted;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct properties and values to create a dotted blue outline.",
    options: ["solid", "outline-style", "outline-color", "dotted", "blue", "red"],
    correct: [1, 2, 4]
  },
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;outline-style: solid;<br>&nbsp;&nbsp;outline-color: ___;<br>}</code>",
    draganddropquestion: "Complete the style to set the outline color to red using an RGB value.",
    options: ["#ff0000", "rgb(255, 0, 0)", "red", "hsl(0, 100%, 50%)"],
    correct: [1]
  },
  {
    question: "Which of the following is <b>NOT</b> a valid way to set the outline color?",
    options: [
      "Color name (e.g., 'red')",
      "RGB value (e.g., 'rgb(255,0,0)')",
      "Image URL (e.g., 'url(image.png)')",
      "HEX value (e.g., '#ff0000')"
    ],
    correct: 2
  },
  {
    question: "What does the <code class='w3-codespan'>invert</code> value for the <code class='w3-codespan'>outline-color</code> property do?",
    options: [
      "Sets the outline to black",
      "Ensures the outline is visible regardless of color background",
      "Sets the border color inherited from outline",
      "Sets the outline to the opposite of an inherited color"
    ],
    correct: 1
  },
]
