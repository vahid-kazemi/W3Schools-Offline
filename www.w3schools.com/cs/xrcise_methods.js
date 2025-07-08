qobjects = [
  {
    draganddroptext: "<code>static void MyMethod()<br>{<br>&nbsp;&nbsp;Console.WriteLine(\"Executed!\");<br>}<br><br>static void Main(string[] args)<br>{<br>&nbsp;&nbsp;___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct call to execute the <code class='w3-codespan'>MyMethod()</code> method.",
    options: ["MyMethod();", "CallMethod();", "Main();", "Execute();"],
    correct: [0]
  },
  {
    question: "What is the purpose of methods in C#?",
    options: [
      "To store multiple values in a single variable.",
      "To execute a block of code when it is called.",
      "To iterate over elements in a collection.",
      "To handle exceptions in a program."
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_methods1.htm"
  },
  {
    fillintheblanks: "exercise_methods2.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>static void MyMethod()<br>{<br>&nbsp;&nbsp;Console.WriteLine(\"Hello, World!\");<br>}<br><br>static void Main(string[] args)<br>{<br>&nbsp;&nbsp;MyMethod();<br>}</code>",
    options: [
      "Nothing",
      "Hello, World!",
      "Error",
      "Main method executed"
    ],
    correct: 1
  },
  {
    question: "What does the <code class='w3-codespan'>void</code> keyword indicate in a method declaration?",
    options: [
      "The method is private.",
      "The method is static.",
      "The method must return a value.",
      "The method has no return value."
    ],
    correct: 3
  }
]
