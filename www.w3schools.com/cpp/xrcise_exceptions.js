qobjects = [
  {
    question: "What is the purpose of exception handling in C++?",
    options: [
      "To execute code faster",
      "To handle errors and execute code when an error occurs",
      "To ignore errors during execution",
      "To organize code into classes and objects"
    ],
    correct: 1
  },
  {
    question: "Which keywords are used for exception handling in C++?",
    options: [
      "if, else, while",
      "public, private, protected",
      "try, throw, catch",
      "switch, case, default"
    ],
    correct: 2
  },
  {
    question: "Consider the following code. What will be the output?<br><code class='codeblock'>try {<br>&nbsp;&nbsp;int age = 15;<br>&nbsp;&nbsp;if (age >= 18) {<br>&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; \"Access granted - you are old enough.\";<br>&nbsp;&nbsp;} else {<br>&nbsp;&nbsp;&nbsp;&nbsp;throw (age);<br>&nbsp;&nbsp;}<br>}<br>catch (int myNum) {<br>&nbsp;&nbsp;cout &lt;&lt; \"Access denied - You must be at least 18 years old.\";<br>&nbsp;&nbsp;cout &lt;&lt; \"Age is: \" &lt;&lt; myNum;<br>}</code>",
    options: [
      "Access denied - You must be at least 18 years old.\nAge is: 15",
      "Access granted - you are old enough.",
      "Error: cannot throw int",
      "No output"
    ],
    correct: 0
  },
  {
    question: "What does the throw keyword do in exception handling?",
    options: [
      "Tests a block of code for errors",
      "Handles errors after they occur",
      "Throws an exception to be caught by a catch block",
      "Skips the execution of code"
    ],
    correct: 2
  },
  {
    question: "True or False:<br>In a try-catch block, if no error occurs in the try block, the catch block is skipped.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "What is the purpose of the 'three dots' (...) in a catch block?",
    options: [
      "To catch only int type exceptions",
      "To handle any type of exception",
      "To ignore the exception",
      "To throw a custom error message"
    ],
    correct: 1
  },
  {
    question: "In exception handling, what is the role of the catch block?",
    options: [
      "To test code for errors",
      "To throw an exception when an error occurs",
      "To handle errors after an exception is thrown",
      "To ignore all exceptions"
    ],
    correct: 2
  }
]
