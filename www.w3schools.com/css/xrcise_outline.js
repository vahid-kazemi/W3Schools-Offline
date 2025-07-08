qobjects = [
  {
    draganddroptext: "<code>p.dotted {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to create a dotted outline around <code class='w3-codespan'>&lt;p&gt;</code>.",
    options: ["outline-border", "outline-style", "outline-offset", "solid", "dotted", "dashed"],
    correct: [1, 4]
  },
  {
    question: "What is the key difference between an outline and a border in CSS?",
    options: [
      "Outline is inside the element, and border is outside.",
      "Outline is outside the element, and border is inside.",
      "Outline is part of the element's dimensions, and border is not.",
      "Both outline and border are inside the element."
    ],
    correct: 1
  },
  {
    question: "Which CSS property is required for an outline to be visible?",
    options: [
      "outline-width",
      "outline-color",
      "outline-style",
      "outline-offset"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;outline-style: ___;<br>&nbsp;&nbsp;outline-width: ___;<br>&nbsp;&nbsp;outline-color: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to create a solid, 5px-wide, red outline.",
    options: ["solid", "5px", "red"],
    correct: [0, 1, 2]
  }
]
