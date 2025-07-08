qobjects = [
  {
    question: "What will the following code output?<br><code class='codeblock'>enum Level {<br>&nbsp;&nbsp;LOW,<br>&nbsp;&nbsp;MEDIUM,<br>&nbsp;&nbsp;HIGH<br>};<br><br>int main() {<br>&nbsp;&nbsp;enum Level myVar = MEDIUM;<br>&nbsp;&nbsp;printf(\"%d\", myVar);<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    correct: 1
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>enum Level {<br>&nbsp;&nbsp;LOW = 5,<br>&nbsp;&nbsp;MEDIUM,<br>&nbsp;&nbsp;HIGH<br>};<br><br>int main() {<br>&nbsp;&nbsp;enum Level myVar = HIGH;<br>&nbsp;&nbsp;printf(\"%d\", myVar);<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    correct: 2
  },
  {
    question: "What is the default integer value assigned to the first element of an enum if no values are specified?",
    options: [
      "0",
      "1",
      "The value must be set explicitly",
      "10"
    ],
    correct: 0
  },
  {
    question: "What is the purpose of using enums in C?",
    options: [
      "To create floating-point constants",
      "To give names to constant values, making code easier to read and maintain",
      "To replace arrays",
      "To create functions"
    ],
    correct: 1
  }
]
