qobjects = [
  {
    question: "What will happen if an exception occurs inside a try block and there is no catch block?",
    options: [
      "The program will continue executing the next statement.",
      "The program will handle the error automatically.",
      "The program will terminate with an error message.",
      "The program will ignore the error."
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_exceptions1.htm"
  },
  {
    fillintheblanks: "exercise_exceptions2.htm"
  },
  {
    question: "What is the purpose of the <code class='w3-codespan'>finally</code> block?",
    options: [
      "To handle exception classes.",
      "To execute code after <code>try...catch</code>, regardless of an exception occurring.",
      "To ignore errors."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>try<br>{<br>&nbsp;&nbsp;int[] myNumbers = {1, 2, 3};<br>&nbsp;&nbsp;Console.WriteLine(myNumbers[10]);<br>}<br>catch (Exception e)<br>{<br>&nbsp;&nbsp;Console.WriteLine(\"Something went wrong.\");<br>}<br>___<br>{<br>&nbsp;&nbsp;Console.WriteLine(\"The 'try catch' is finished.\");<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to complete the <code>try...catch</code> structure.",
    options: ["error", "finally", "throw", "end", "default"],
    correct: [1]
  },
  {
    question: "Which statement is used to manually throw an exception?",
    options: [
      "raise",
      "throw",
      "exception",
      "error"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>static void checkAge(int age)<br>{<br>&nbsp;&nbsp;if (age < 18)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;throw new ___(\"Access denied - You must be at least 18 years old.\");<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct exception class to create a custom error.",
    options: ["ArithmeticException", "IndexOutOfRangeException", "FileNotFoundException", "TimeOutException"],
    correct: [0]
  },
  {
    question: "Which of the following is NOT an exception class in C#?",
    options: [
      "ArithmeticException",
      "IndexOutOfRangeException",
      "DivideByZeroException",
      "LoopException"
    ],
    correct: 3
  }
]
