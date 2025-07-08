qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>x = 300<br>def myfunc():<br>&nbsp;&nbsp;x = 200<br>myfunc()<br>print(x)</code><br>What will be the printed result?",
    options: [
      "200",
      "300",
      "200300"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>x = 300<br>def myfunc():<br>&nbsp;&nbsp;global x<br>&nbsp;&nbsp;x = 200<br>myfunc()<br>print(x)</code>.",
    options: [
      "200",
      "300",
      "200300"
    ],
    correct: 0
  },
  {
    question: "Which statement keyword can be used for variables inside nested function?",
    options: [
      "<code>local</code>",
      "<code>nonglobal</code>",
      "<code>nonlocal</code>"
    ],
    correct: 2
  }
]