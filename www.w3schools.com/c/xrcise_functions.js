qobjects = [
  {
    question: "What does the keyword <code class='w3-codespan'>void</code> indicate when used with a function in C?",
    options: [
      "The function returns an integer",
      "The function can only be called once",
      "The function does not return a value",
      "The function can accept any type of parameter"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_functions1.htm"
  },
  {
    fillintheblanks: "exercise_functions2.htm"
  },
  {
    question: "Which line in the following code calls the function <code class='w3-codespan'>myFunction</code>?<br><code class='codeblock'>void myFunction() {<br>&nbsp;&nbsp;printf(\"Hello!\");<br>}<br><br>int main() {<br>&nbsp;&nbsp;myFunction();<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "<code class='w3-codespan'>void myFunction()</code>",
      "<code class='w3-codespan'>printf(\"Hello!\");</code>",
      "<code class='w3-codespan'>myFunction();</code>",
      "<code class='w3-codespan'>return 0;</code>"
    ],
    correct: 2
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>void calculateSum() {<br>&nbsp;&nbsp;int x = 3;<br>&nbsp;&nbsp;int y = 7;<br>&nbsp;&nbsp;printf(\"Sum: %d\", x + y);<br>}<br><br>int main() {<br>&nbsp;&nbsp;calculateSum();<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "Error",
      "Sum: 3",
      "Sum: 7",
      "Sum: 10"
    ],
    correct: 3
  }
]
