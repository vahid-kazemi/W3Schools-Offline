qobjects = [
  {
    draganddroptext: "<code>___ Car<br>{<br>&nbsp;&nbsp;string color = \"blue\";<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to define the class.",
    options: ["class", "object", "new", "Car"],
    correct: [0]
  },
  {
    question: "What is a class in C#?",
    options: [
      "An instance of an object.",
      "A blueprint for creating objects.",
      "A method inside an object.",
      "A built-in data type."
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_classes1.htm"
  },
  {
    fillintheblanks: "exercise_classes2.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>class Car<br>{<br>&nbsp;&nbsp;string color = \"red\";<br>}<br><br>class Program<br>{<br>&nbsp;&nbsp;static void Main(string[] args)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Car myObj = new Car();<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(myObj.color);<br>&nbsp;&nbsp;}<br>}</code>",
    options: [
      "red",
      "Car",
      "Error",
      "null"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>Car myObj = ___ Car();</code>",
    draganddropquestion: "Drag and drop the correct keyword to create an object.",
    options: ["new", "create", "class", "object"],
    correct: [0]
  },
  {
    question: "Which syntax correctly accesses a class field from an object?",
    options: [
      "Console.WriteLine(myObj->color);",
      "Console.WriteLine(myObj.color);",
      "Console.WriteLine(myObj::color);",
      "Console.WriteLine(color.myObj);"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>class Car<br>{<br>&nbsp;&nbsp;string color = \"red\";<br>}<br><br>Car myCar = new Car();<br>Console.WriteLine(___);</code>",
    draganddropquestion: "Drag and drop the correct syntax to print the color attribute.",
    options: ["myCar.color", "color.myCar", "Car.color", "Car.myCar"],
    correct: [0]
  }
]
