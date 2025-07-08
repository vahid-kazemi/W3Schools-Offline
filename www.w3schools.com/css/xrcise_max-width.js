qobjects = [
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to set the max width of a <code class='w3-codespan'>div</code> element to 800px.",
    options: ["width", "max-width", "margin", "auto", "800px", "border", "center"],
    correct: [1, 4]
  },
  {
    question: "What happens to a block-level element when its width is set to <code class='w3-codespan'>50%</code>, and its margin is set to <code class='w3-codespan'>auto</code>?",
    options: [
      "It stretches to the edges of the container",
      "It is horizontally centered within its container",
      "It aligns to the left of the container",
      "It aligns to the right of the container"
    ],
    correct: 1
  },
  {
    question: "What is an issue with using <code class='w3-codespan'>width</code> instead of <code class='w3-codespan'>max-width</code> on a block-level element?",
    options: [
      "It makes the element invisible",
      "It can cause a horizontal scrollbar on smaller browser windows",
      "It does not allow setting margins",
      "It makes the element always take up half width"
    ],
    correct: 1
  },
  {
    question: "How does <code class='w3-codespan'>max-width</code> improve browser handling compared to <code class='w3-codespan'>width</code>?",
    options: [
      "It makes every element invisible",
      "It allows the element to shrink in smaller browser windows",
      "It adds padding to the element",
      "It aligns to the right of the element"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;___: 500px;<br>&nbsp;&nbsp;___: ___<br>}</code>",
    draganddropquestion: "Drag and drop the correct properties and values to center the <code class='w3-codespan'>&lt;div&gt;</code> horizontally.",
    options: ["max-width", "auto", "500px", "border", "center", "margin", "horizontal"],
    correct: [0, 5, 1]
  }
]
