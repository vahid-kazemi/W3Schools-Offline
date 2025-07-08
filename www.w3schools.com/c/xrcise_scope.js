qobjects = [
  {
    question: "Where can a variable with local scope be accessed?",
    options: [
      "Inside the function it was created",
      "Anywhere in the program",
      "Only inside the main function",
      "Only in global scope"
    ],
    correct: 0
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>int x = 10;<br><br>void myFunction() {<br>&nbsp;&nbsp;int x = 5;<br>&nbsp;&nbsp;printf(\"%d\\n\", x);<br>}<br><br>int main() {<br>&nbsp;&nbsp;myFunction();<br>&nbsp;&nbsp;printf(\"%d\\n\", x);<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "10 and 10",
      "5 and 5",
      "5 and 10",
      "10 and 5"
    ],
    correct: 2
  },
  {
    question: "What is a global variable in C?",
    options: [
      "A variable that is only accessible in the main function",
      "A variable that can be accessed from any function in the program",
      "A variable created inside a function",
      "A variable used only once"
    ],
    correct: 1
  },
  {
    question: "What will happen if you try to access a local variable outside of its function?",
    options: [
      "It will output 0",
      "It will cause a compilation error",
      "It will output a random value",
      "It will access the global variable with the same name"
    ],
    correct: 1
  },
  {
    question: "Why is it generally recommended to use local variables over global variables?",
    options: [
      "Local variables are faster",
      "Global variables cannot be printed",
      "Local variables make the code easier to maintain and understand",
      "Global variables are automatically deleted"
    ],
    correct: 2
  }
]
