qobjects = [
  {
    question: "What is a function declaration in C?",
    options: [
      "The body of the function",
      "The function's name, return type, and parameters",
      "The call to the function",
      "The code that executes when the function is called"
    ],
    correct: 1
  },
  {
    question: "Where is it generally recommended to place function declarations in a C program?",
    options: [
      "Inside the main function",
      "Below the main function",
      "Above the main function",
      "Directly after the function definition"
    ],
    correct: 2
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>void myFunction();<br><br>int main() {<br>&nbsp;&nbsp;myFunction();<br>&nbsp;&nbsp;return 0;<br>}<br><br>void myFunction() {<br>&nbsp;&nbsp;printf(\"Hello from myFunction\");<br>}</code>",
    options: [
      "No output, as the function is not defined",
      "Error due to missing function definition",
      "Hello from myFunction",
      "No output as main() does not call the function"
    ],
    correct: 2
  },
  {
    question: "What happens if you try to call a function that has not been declared or defined?",
    options: [
      "The program will throw an error",
      "The program will ignore the function call",
      "The program will run without issues",
      "The program will treat the function as a variable"
    ],
    correct: 0
  },
  {
    question: "Is it possible for one function to call another function in C?",
    options: [
      "Yes, as long as the function to be called is declared",
      "No, each function must be executed independently",
      "Yes, but only if they have the same return type",
      "No, functions cannot interact with each other"
    ],
    correct: 0
  }
]
