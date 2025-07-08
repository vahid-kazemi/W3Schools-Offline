qobjects = [
  {
    question: "What is the correct way to include double quotes inside a string in C?",
    options: [
      "<code class='w3-codespan'>char txt[] = \"The \"Vikings\" are here.\";</code>",
      "<code class='w3-codespan'>char txt[] = \"The \\\"Vikings\\\" are here.\";</code>",
      "<code class='w3-codespan'>char txt[] = \"The 'Vikings' are here.\";</code>",
      "<code class='w3-codespan'>char txt[] = 'The \"Vikings\" are here.';</code>"
    ],
    correct: 1
  },
  {
    question: "Which escape character is used to insert a single quote (') in a string?",
    options: [
      "<code class='w3-codespan'>\"</code>",
      "<code class='w3-codespan'>\\'</code>",
      "<code class='w3-codespan'>\\\"</code>",
      "<code class='w3-codespan'>''</code>"
    ],
    correct: 1
  },
  {
    question: "What will this code output?<br><code class='codeblock'>char txt[] = \"The path is C:\\\\Program Files\\\\\";<br>printf(\"%s\", txt);</code>",
    options: [
      "The path is C:\\Program Files\\",
      "The path is C:Program Files",
      "The path is C:Program Files\\",
      "The path is C:/Program Files/"
    ],
    correct: 0
  },
  {
    question: "Which escape sequence is used to create a new line in a string?",
    options: [
      "<code class='w3-codespan'>\\t</code>",
      "<code class='w3-codespan'>\\0</code>",
      "<code class='w3-codespan'>\\n</code>",
      "<code class='w3-codespan'>\\\\</code>"
    ],
    correct: 2
  }
]
