qobjects = [
  {
    question: "What does the <code class='w3-codespan'>border-image</code> property do in CSS?",
    options: [
      "Sets the color of the border",
      "Applies a background image to an element",
      "Uses an image as the border of an element",
      "Creates rounded corners on an element"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_css3_border_images1.htm"
  },
  {
    fillintheblanks: "exercise_css3_border_images2.htm"
  },
  {
    question: "Which property is required for <code class='w3-codespan'>border-image</code> to work?",
    options: [
      "padding",
      "border",
      "margin",
      "background"
    ],
    correct: 1
  },
  {
    question: "Which shorthand property is used to combine all the border image properties?",
    options: [
      "<code>border-image</code>",
      "<code>border-style</code>",
      "<code>border-slice</code>",
      "<code>border-repeat</code>"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>#element {<br>&nbsp;&nbsp;border: 10px solid transparent;<br>&nbsp;&nbsp;border-image: url(border.png) ___ ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to slice the image at 20% and repeat the middle sections.",
    options: ["20%", "stretch", "round", "repeat"],
    correct: [0, 3]
  }
]
