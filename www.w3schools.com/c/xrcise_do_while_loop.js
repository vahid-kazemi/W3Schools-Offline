qobjects = [
  {
    question: "What is the main difference between a <code class='w3-codespan'>do/while</code> loop and a <code class='w3-codespan'>while</code> loop?",
    options: [
      "The <code class='w3-codespan'>do/while</code> loop checks the condition first",
      "The <code class='w3-codespan'>do/while</code> loop executes the code block at least once before checking the condition",
      "The <code class='w3-codespan'>do/while</code> loop only runs if the condition is initially false",
      "The <code class='w3-codespan'>do/while</code> loop is only used for infinite loops"
    ],
    correct: 1
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>int i = 5;<br>do {<br>&nbsp;&nbsp;printf(\"%d\\n\", i);<br>&nbsp;&nbsp;i++;<br>} <br>while (i < 5);</code>",
    options: [
      "5",
      "No output",
      "0",
      "5\n6\n7\n8\n9"
    ],
    correct: 0
  },
  {
    question: "Which of the following correctly shows the syntax of a <code class='w3-codespan'>do/while</code> loop?",
    options: [
      "<code class='w3-codespan'>do { // code block } while (condition);</code>",
      "<code class='w3-codespan'>do while (condition) { // code block }</code>",
      "<code class='w3-codespan'>while (condition) do { // code block }</code>",
      "<code class='w3-codespan'>do { // code block } while condition;</code>"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_while_loop2.htm"
  },
  {
    question: "What happens if you forget to increment a variable inside a <code class='w3-codespan'>do/while</code> loop?",
    options: [
      "The loop runs indefinitely",
      "The loop will execute only once",
      "The loop produces an error",
      "The loop skips the condition check"
    ],
    correct: 0
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>int i = 0;<br>do {<br>&nbsp;&nbsp;printf(\"%d \", i);<br>&nbsp;&nbsp;i++;<br>} <br>while (i < 3);</code>",
    options: [
      "0 1 2",
      "1 2 3",
      "0 1 2 3",
      "0 1"
    ],
    correct: 0
  }
]
