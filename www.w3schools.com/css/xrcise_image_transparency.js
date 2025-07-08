qobjects = [
  {
    question: "What does the <code class='w3-codespan'>opacity</code> property control?",
    options: [
      "The size of an element",
      "The alignment of an element",
      "The transparency of an element",
      "The color of an element"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_image_transparency1.htm"
  },
  {
    fillintheblanks: "exercise_image_transparency2.htm"
  },
  {
    question: "What range of values can the <code class='w3-codespan'>opacity</code> property take?",
    options: [
      "0 to 100",
      "0.0 to 1.0",
      "-1.0 to 1.0",
      "1 to 10"
    ],
    correct: 1
  },
  {
    question: "How does <code class='w3-codespan'>opacity</code> affect child elements?",
    options: [
      "It applies transparency only to the parent element",
      "It applies the same transparency to all child elements",
      "It removes the child elements from view",
      "It changes the background color of the child elements"
    ],
    correct: 1
  },
  {
    question: "What can be used to apply transparency to a background color without affecting child elements?",
    options: [
      "HSL",
      "RGBA",
      "Opacity",
      "Transparency"
    ],
    correct: 1
  },
  {
    question: "Which CSS rule would you use to make an image fully opaque when hovered over?",
    options: [
      "<code>img:hover { opacity: 0.5; }</code>",
      "<code>img:hover { opacity: 1.0; }</code>",
      "<code>img:hover { opacity: 0; }</code>",
      "<code>img:hover { opacity: -1; }</code>"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>img {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to set an image's transparency to 50%.",
    options: ["opacity", "0.5", "1", "0", "0.8"],
    correct: [0, 1]
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;background: ___(76, 175, 80, ___);<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to set a green background with 30% opacity using RGBA.",
    options: ["rgba", "rgb", "0.3", "1", "0.8", "transp"],
    correct: [0, 2]
  }
]
