qobjects = [
  {
    question: "Consider the following code:</br><code class='codeblock'>let x = 5;<br>{<br>&nbsp;&nbsp;let x = 3;<br>}<br>alert(x);</code><br>What will be the alerted result?",
    options: [
      "5",
      "3"
    ],
    correct: 0
  },{
    question: "Consider the following code:</br><code class='codeblock'>let x = 5;<br>function myfunc() {<br>&nbsp;&nbsp;x = 3;<br>}<br>myfunc();<br>alert(x);</code><br>What will be the alerted result?",
    options: [
      "5",
      "3"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:</br><code class='codeblock'>let x = 5;<br>function myfunc() {<br>&nbsp;&nbsp;const x = 3;<br>}<br>myfunc();<br>alert(x);</code><br>What will be the alerted result?",
    options: [
      "5",
      "3"
    ],
    correct: 0
  },
]