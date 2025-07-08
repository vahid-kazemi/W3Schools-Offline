qobjects = [
  {
    question: "What is the correct syntax for a CSS comment?",
    options: [
      "&lt;!-- This is a comment --&gt;",
      "// This is a comment",
      "/* This is a comment */",
      "# This is a comment"
    ],
    correct: 2
  },
  {
    question: "True or False:<br>Comments are not displayed in the browser.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "Where can CSS comments be added?",
    options: [
      "Only at the beginning of a CSS file",
      "Anywhere within the CSS code",
      "Only at the end of CSS declarations",
      "CSS does not support comments"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>p {<br>&nbsp;&nbsp;color: red;&nbsp;&nbsp;___ Set text color to red ___<br>}</code>",
    draganddropquestion: "Drag and drop: Complete the comment in the CSS code.",
    options: ["/*", "#", "..", "*/", "*"],
    correct: [0, 3]
  },
  {
    question: "True or False:<br>Comments can span multiple lines, like:<br> <br><code class='codeblock'>/* This is<br>a multi-line<br>comment */<br><br>p {color: red;}</code>",
    options: [
      "True",
      "False"
    ],
    correct: 0
  }
]
