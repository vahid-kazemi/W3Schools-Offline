qobjects = [
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;___: ___ ___;<br>}</code></code>",
    draganddropquestion: "Drag and drop the correct order of properties and values, including the <code class='w3-codespan'>!important</code> rule to the following example:",
    options: ["!important", "blue", "background-color"],
    correct: [2, 1, 0]
  },
  {
    question: "What does the <code class='w3-codespan'>!important</code> rule do in CSS?",
    options: [
      "Adds a higher specificity to a selector",
      "Overrides all previous styling rules for a specific property",
      "Prevents a property from being inherited",
      "Adds a comment to the CSS code"
    ],
    correct: 1
  },
  {
    question: "Which rule takes precedence in the following CSS?<br><code class='codeblock'>#myid { color: blue !important; }<br>.myclass { color: red !important; }</code>",
    options: [
      "The ID selector (#myid)",
      "The class selector (.myclass)",
      "Both rules are ignored",
      "Neither rule is applied"
    ],
    correct: 0
  },
  {
    question: "When is it appropriate to use <code class='w3-codespan'>!important</code>?",
    options: [
      "To override styles when no other method works",
      "To link different style sheets",
      "To create a fallback style"
    ],
    correct: 0
  },
  {
    question: "What is the potential drawback of using <code class='w3-codespan'>!important</code> extensively?",
    options: [
      "It can cause conflicts and make the CSS harder to debug",
      "It links different style sheets",
      "It prevents inheritance of styles"
    ],
    correct: 0
  }
]
