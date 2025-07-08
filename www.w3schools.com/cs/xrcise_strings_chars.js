qobjects = [
  {
    question: "Which escape character is used to insert a double quote in a string?",
    options: [
      "\\'",
      "\\\"",
      "\\\\",
      "\\n"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>string txt = \"It___s alright.\";</code>",
    draganddropquestion: "Drag and drop the correct escape sequence to insert a single quote in the string.",
    options: ["\\'", "\\\"", "\\\\", "\\n"],
    correct: [0]
  },
  {
    question: "What will the following code output?<br><code class='w3-codespan'>string txt = \"We are the \\\"Vikings\\\".\";<br>Console.WriteLine(txt);</code>",
    options: [
      "We are the Vikings.",
      "We are the \\\"Vikings\\\".",
      "We are the \"Vikings\".",
      "Error"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>string txt = \"The character ___ is called backslash.\";</code>",
    draganddropquestion: "Drag and drop the correct escape sequence to represent a backslash in the string.",
    options: ["\\\\", "\\'", "\\\"", "\\b"],
    correct: [0]
  },
  {
    question: "Which escape character is used to insert a new line in a string?",
    options: [
      "\\t",
      "\\n",
      "\\b",
      "\\\\"
    ],
    correct: 1
  }
]
