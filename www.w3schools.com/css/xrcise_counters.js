qobjects = [
  {
    question: "What is the purpose of the <code class='w3-codespan'>counter-reset</code> property in CSS?",
    options: [
      "To display the value of a counter",
      "To increment the value of a counter",
      "To create or reset a counter",
      "To apply styling to counters"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>body {<br>&nbsp;&nbsp;___: section;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS property to create a counter:",
    options: ["counter(section)", "position", "counter-reset", "counter-increment", "section", "1", "start"],
    correct: [2]
  },
  {
    question: "Which property is used to increment the value of a counter?",
    options: [
      "<code>counter-reset</code>",
      "<code>content</code>",
      "<code>counter-increment</code>",
      "<code>counters</code>"
    ],
    correct: 2
  },
  {
    question: "Which function is used to display the value of a counter in generated content?",
    options: [
      "<code>counter()</code>",
      "<code>content()</code>",
      "<code>count()</code>",
      "<code>increment()</code>"
    ],
    correct: 0
  },
  {
    question: "In the following CSS, what will be displayed before each <code class='w3-codespan'>&lt;h2&gt;</code> element?<br><code class='codeblock'><pre>body {<br>  counter-reset: section;<br>}<br><br>h2::before {\n  counter-increment: section;\n  content: \"Section \" counter(section) \": \";\n}</pre></code>",
    options: [
      "The text \"Section\" followed by the section number",
      "The text \"Section\" only",
      "Nothing, as counters are not applied"
    ],
    correct: 0
  }
]
