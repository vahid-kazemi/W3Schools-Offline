qobjects = [
  {
    question: "True or False:<br>Passing a variable by reference allows a function to modify its original value.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "Which syntax correctly passes an integer by reference?",
    options: [
      "<code class='w3-codespan'>void myFunction(int x)</code>",
      "<code class='w3-codespan'>void myFunction(&x)</code>",
      "<code class='w3-codespan'>void myFunction(ref int x)</code>",
      "<code class='w3-codespan'>void myFunction(int &x)</code>"
    ],
    correct: 3
  },
  {
    question: "Which syntax correctly passes a string by reference?",
    options: [
      "<code class='w3-codespan'>void modifyString(string &str)</code>",
      "<code class='w3-codespan'>void modifyString(string *str)</code>",
      "<code class='w3-codespan'>void modifyString(ref string str)</code>",
      "<code class='w3-codespan'>void modifyString(&string str)</code>"
    ],
    correct: 0
  }
]
