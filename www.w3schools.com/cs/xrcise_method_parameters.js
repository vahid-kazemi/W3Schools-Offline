qobjects = [
  {
    question: "When a parameter is passed to the method, it is called an",
    options: [
      "boolean",
      "argument",
      "switch",
      "array"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_methods3.htm"
  },
  {
    draganddroptext: "<code>static void MyMethod(string fname)<br>{<br>&nbsp;&nbsp;Console.WriteLine(fname + \" Refsnes\");<br>}<br><br>static void Main(string[] args)<br>{<br>&nbsp;&nbsp;___(\"Liam\");<br>}</code>",
    draganddropquestion: "Drag and drop the correct method name to complete the call.",
    options: ["MyMethod", "Main", "MethodCall", "CallMethod"],
    correct: [0]
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>static void MyMethod(string fname)<br>{<br>&nbsp;&nbsp;Console.WriteLine(fname + \" Refsnes\");<br>}<br><br>static void Main(string[] args)<br>{<br>&nbsp;&nbsp;MyMethod(\"Jenny\");<br>}</code>",
    options: [
      "Liam Refsnes",
      "Jenny Refsnes",
      "Refsnes",
      "Error"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>static void MyMethod(string fname, ___ age)<br>{<br>&nbsp;&nbsp;Console.WriteLine(fname + \" is \" + age);<br>}</code>",
    draganddropquestion: "Drag and drop the correct type for the <code class='w3-codespan'>age</code> parameter.",
    options: ["int", "string", "bool", "float"],
    correct: [0]
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>static void MyMethod(string fname, int age)<br>{<br>&nbsp;&nbsp;Console.WriteLine(fname + \" is \" + age);<br>}<br><br>static void Main(string[] args)<br>{<br>&nbsp;&nbsp;MyMethod(\"Anja\", 31);<br>}</code>",
    options: [
      "Anja 31",
      "Anja is 31",
      "31 is Anja",
      "Error"
    ],
    correct: 1
  },
  {
    question: "What happens if you pass fewer arguments than the number of parameters in a method?",
    options: [
      "The method will use default values for the missing arguments.",
      "The method will throw an error.",
      "The method will execute but skip the parameters with missing arguments.",
      "The method will treat missing arguments as <code class='w3-codespan'>null</code>."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>static void MyMethod(string fname, int age)<br>{<br>&nbsp;&nbsp;Console.WriteLine(fname + \" is \" + age);<br>}<br><br>static void Main(string[] args)<br>{<br>&nbsp;&nbsp;MyMethod(\"Jenny\", ___);<br>}</code>",
    draganddropquestion: "Drag and drop the correct argument to pass for the <code class='w3-codespan'>age</code> parameter.",
    options: ["Awesome", "Twenty One", "21", "age"],
    correct: [2]
  }
]
