qobjects = [
  {
    question: "What does the <code class='w3-codespan'>return</code> keyword do in a method?",
    options: [
      "It ends the method and returns control to the caller.",
      "It prints the result of the method.",
      "It calls another method.",
      "It declares a method with no parameters."
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_methods4.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>static int MyMethod(int x, int y)<br>{<br>&nbsp;&nbsp;return x + y;<br>}<br><br>static void Main(string[] args)<br>{<br>&nbsp;&nbsp;Console.WriteLine(MyMethod(5, 3));<br>}</code>",
    options: [
      "8",
      "5",
      "3",
      "Error"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>static int MyMethod(int x, int y)<br>{<br>&nbsp;&nbsp;return x + y;<br>}<br><br>static void Main(string[] args)<br>{<br>&nbsp;&nbsp;int z = ___(5, 3);<br>&nbsp;&nbsp;Console.WriteLine(z);<br>}</code>",
    draganddropquestion: "Drag and drop the correct method name to store the result of the method call in <code class='w3-codespan'>z</code>.",
    options: ["MyMethod", "Main", "Calculate", "ReturnValue"],
    correct: [0]
  },
  {
    question: "What does the <code class='w3-codespan'>int</code> keyword in a method declaration indicate?",
    options: [
      "The method does not return a value.",
      "The method returns an integer value.",
      "The method accepts only integers as parameters.",
      "The method has no parameters."
    ],
    correct: 1
  }
]
