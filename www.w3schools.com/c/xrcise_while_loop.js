qobjects = [
  {
    question: "What is the purpose of the <code class='w3-codespan'>while</code> loop in C?",
    options: [
      "To execute a block of code a fixed number of times",
      "To execute a block of code as long as a specified condition is true",
      "To execute code only if a condition is false",
      "To declare multiple variables in a loop"
    ],
    correct: 1
  },
  {
    question: "What is the correct syntax for a <code class='w3-codespan'>while</code> loop?",
    options: [
      "<code class='w3-codespan'>while { condition }</code>",
      "<code class='w3-codespan'>while (condition) { // code block }</code>",
      "<code class='w3-codespan'>while (condition) // code block</code>",
      "<code class='w3-codespan'>while condition { // code block }</code>"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_while_loop1.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>int i = 0;<br>while (i < 3) {<br>&nbsp;&nbsp;printf(\"%d \", i);<br>&nbsp;&nbsp;i++;<br>}</code>",
    options: [
      "0\n1\n2",
      "1\n2\n3",
      "0\n1\n2\n3",
      "No output"
    ],
    correct: 0
  },
  {
    question: "What happens if the condition in a <code class='w3-codespan'>while</code> loop is always true and there is no increment statement?",
    options: [
      "The loop runs indefinitely",
      "The loop runs once",
      "The loop produces an error",
      "The loop runs twice"
    ],
    correct: 0
  }
]
