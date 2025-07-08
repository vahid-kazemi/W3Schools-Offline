qobjects = [
  {
    question: "Which of the following can be used as a mask layer in CSS?",
    options: [
      "A PNG image",
      "An SVG image",
      "A CSS gradient",
      "All of the above"
    ],
    correct: 3
  },
  {
    question: "Which property is used to apply a linear gradient as a mask layer?",
    options: [
      "<code>mask-gradient</code>",
      "<code>mask-linear</code>",
      "<code>mask-image</code>",
      "<code>mask-opacity</code>"
    ],
    correct: 2
  },
  {
    question: "What happens if you omit the <code class='w3-codespan'>mask-repeat</code> property?",
    options: [
      "The mask image will not be displayed.",
      "The mask image will repeat automatically.",
      "The mask image will stretch to fill the element.",
      "The mask image will be centered by default."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>.masked {<br>&nbsp;&nbsp;mask-image: ___;<br>&nbsp;&nbsp;mask-repeat: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to create a mask with no repeating pattern using a PNG image.",
    options: ["url(mask.png)", "linear-gradient(black, transparent)", "no-repeat", "repeat"],
    correct: [0, 2]
  },
  {
    question: "Which CSS function creates a circular mask layer?",
    options: [
      "<code>circle()</code>",
      "<code>round()</code>",
      "<code>polygon()</code>",
      "<code>path()</code>"
    ],
    correct: 0
  }
]
