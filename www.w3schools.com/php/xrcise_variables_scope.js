qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>$name = 'Linus';<br>function myTest() {<br>&nbsp;&nbsp;$name = 'Tobias';<br>}<br>myTest();<br>echo $name;</code><br>What will be the output?",
    options: [
      "Linus",
      "Tobias"
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>$name = 'Linus';<br>function myTest() {<br>&nbsp;&nbsp;global $name;<br>&nbsp;&nbsp;$name = 'Tobias';<br>}<br>myTest();<br>echo $name;</code><br>What will be the output?",
    options: [
      "Linus",
      "Tobias"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>$name = 'Linus';<br>function myTest() {<br>&nbsp;&nbsp;$GLOBALS['name'] = 'Tobias';<br>}<br>myTest();<br>echo $name;</code><br>What will be the output?",
    options: [
      "Linus",
      "Tobias",
      "An error will be raised"
    ],
    correct: 1
  }
]