qobjects = [
  {
    question: "Which of the following has the highest specificity?",
    options: [
      "Class selector",
      "Element selector",
      "ID selector",
      "Inline style"
    ],
    correct: 3
  },
  {
    question: "What happens when two CSS rules have the same specificity?",
    options: [
      "The first rule is applied",
      "The latest rule in the CSS file is applied",
      "Both rules are ignored",
      "The browser applies the default style"
    ],
    correct: 1
  },
  {
    question: "In the following example, which color will be applied to the <code class='w3-codespan'>&lt;div&gt;</code> element?<br><code class='codeblock'>#myDiv { color: blue; }<br>div[id=myDiv] { color: green; }</code>",
    options: [
      "Blue",
      "Green",
      "No color",
      "Default browser color"
    ],
    correct: 0
  },
  {
    question: "Which of the following has the lowest specificity?",
    options: [
      "Element selector",
      "Class selector",
      "ID selector",
      "Attribute selector"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>&lt;p style=\"___: ___;\"&gt;Hello World&lt;/p&gt;</code>",
    draganddropquestion: "Drag and drop the correct property and value to apply an inline style that takes precedence over other CSS rules.<br><br><b>Hint:</b> The <code class='w3-codespan'>&lt;p&gt;</code> element should get a red background color.",
    options: ["selector", "inline", "background-color", "precedence", "css-rules", "red"],
    correct: [2, 5]
  }
]
