qobjects = [
  {
    question: "What is a constructor in C#?",
    options: [
      "A method used to destroy objects.",
      "A method that must return a value.",
      "A method that can only be called manually.",
      "A method used to initialize objects when they are created."
    ],
    correct: 3
  },
  {
    fillintheblanks: "exercise_classes5.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>class Car<br>{<br>&nbsp;&nbsp;public string model;<br>&nbsp;&nbsp;public Car()<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;model = \"Mustang\";<br>&nbsp;&nbsp;}<br>}<br><br>class Program<br>{<br>&nbsp;&nbsp;static void Main(string[] args)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Car Ford = new Car();<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(Ford.model);<br>&nbsp;&nbsp;}<br>}</code>",
    options: [
      "Ford",
      "null",
      "Mustang",
      "Error"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>public Book(___ bookName)<br>{<br>&nbsp;&nbsp;book = bookName;<br>}</code>",
    draganddropquestion: "Drag and drop the correct parameter type for the constructor.",
    options: ["string", "int", "bool", "float"],
    correct: [0]
  },
  {
    question: "What is a key rule about constructors in C#?",
    options: [
      "A constructor must have a return type.",
      "A constructor must have a different name than the class.",
      "A constructor must have the same name as the class.",
      "A constructor must be declared as static."
    ],
    correct: 2
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>class Car<br>{<br>&nbsp;&nbsp;public string model;<br>&nbsp;&nbsp;public Car(string modelName)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;model = modelName;<br>&nbsp;&nbsp;}<br>}<br><br>class Program<br>{<br>&nbsp;&nbsp;static void Main(string[] args)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Car myCar = new Car(\"Toyota\");<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(myCar.model);<br>&nbsp;&nbsp;}<br>}</code>",
    options: [
      "Mustang",
      "Car",
      "modelName",
      "model",
      "Error",
      "Toyota"
    ],
    correct: 5
  },
  {
    question: "Which of the following is true about constructors in C#?",
    options: [
      "If no constructor is defined, C# provides a default constructor.",
      "A constructor must always have at least one parameter.",
      "Constructors must return a value.",
      "Constructors cannot be overloaded."
    ],
    correct: 0
  }
]
