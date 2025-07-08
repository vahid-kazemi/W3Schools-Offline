qobjects = [
  {
    question: "Which function is used to get user input in C?",
    options: [
      "<code class='w3-codespan'>printf()</code>",
      "<code class='w3-codespan'>scanf()</code>",
      "<code class='w3-codespan'>pgets()</code>",
      "<code class='w3-codespan'>sgets()</code>"
    ],
    correct: 1
  },
  {
    question: "What is the correct syntax to store an integer input from the user in a variable called <code class='w3-codespan'>myNum</code>?",
    options: [
      "<code class='w3-codespan'>scanf(\"%d\", myNum);</code>",
      "<code class='w3-codespan'>scanf(\"%d\", &myNum);</code>",
      "<code class='w3-codespan'>scanf(myNum, \"%d\");</code>",
      "<code class='w3-codespan'>scanf(&myNum, \"%d\");</code>"
    ],
    correct: 1
  },
  {
    question: "Which format specifier is used with <code class='w3-codespan'>scanf()</code> to read a single character?",
    options: [
      "<code class='w3-codespan'>%d</code>",
      "<code class='w3-codespan'>%c</code>",
      "<code class='w3-codespan'>%f</code>",
      "<code class='w3-codespan'>%s</code>"
    ],
    correct: 1
  },
  {
    question: "Which function should you use if you need to read a full line of text including spaces?",
    options: [
      "<code class='w3-codespan'>scanf()</code>",
      "<code class='w3-codespan'>gets()</code>",
      "<code class='w3-codespan'>fgets()</code>",
      "<code class='w3-codespan'>puts()</code>"
    ],
    correct: 2
  },
  {
    question: "What will the following code output if the user enters <code class='w3-codespan'>John Doe</code>?<br><code class='codeblock'>char name[20];<br>scanf(\"%s\", name);<br>printf(\"Hello %s\", name);</code>",
    options: [
      "Hello John",
      "Hello John Doe",
      "Hello",
      "Hello Doe"
    ],
    correct: 0
  }
]
