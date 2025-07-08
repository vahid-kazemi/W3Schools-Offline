qobjects = [
  {
    question: "What is the equivalent RGBA value for the <code class='w3-codespan'>transparent</code> keyword?",
    options: [
      "<code>rgba(255,255,255,0)</code>",
      "<code>rgba(0,0,0,0)</code>",
      "<code>rgba(0,0,0,1)</code>",
      "<code>rgba(255,255,255,1)</code>"
    ],
    correct: 1
  },
  {
    question: "What does the <code class='w3-codespan'>currentcolor</code> keyword refer to?",
    options: [
      "The background color of the element",
      "The current value of the <code>color</code> property of the element",
      "The border color of the element"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>#example {<br>&nbsp;&nbsp;background-color: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to make the background of the <code class='w3-codespan'>#example</code> element fully transparent.",
    options: ["transparent", "inherit", "currentcolor", "rgba(255,255,255,1)"],
    correct: [0]
  },
  {
    question: "How can you set the border color of a <code class='w3-codespan'>&lt;div&gt;</code> to match its text color?",
    options: [
      "<code>border-color: inherit;</code>",
      "<code>border-color: transparent;</code>",
      "<code>border-color: currentcolor;</code>",
      "<code>border-color: default;</code>"
    ],
    correct: 2
  },
  {
    question: "What does the <code class='w3-codespan'>inherit</code> keyword do?",
    options: [
      "Inherits the style of the parent element for the specified property",
      "Sets the element's style to its default value",
      "Makes the element's style fully transparent",
      "Sets the element's style to match its siblings"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>body {<br>&nbsp;&nbsp;color: green;<br>}<br>div {<br>&nbsp;&nbsp;background-color: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to set the <code class='w3-codespan'>&lt;div&gt;</code> background color to match the text color of the <code class='w3-codespan'>&lt;body&gt;</code> element.",
    options: ["currentcolor", "g", "inherit", "transparent"],
    correct: [0]
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;border: 2px solid red;<br>}<br>span {<br>&nbsp;&nbsp;border: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to make the <code class='w3-codespan'>&lt;span&gt;</code> element inherit the border from its parent <code class='w3-codespan'>&lt;div&gt;</code>.",
    options: ["inherit", "transparent", "currentcolor", "default"],
    correct: [0]
  }
]
