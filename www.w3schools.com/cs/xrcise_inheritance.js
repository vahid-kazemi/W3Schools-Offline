qobjects = [
  {
    draganddroptext: "<code>class Car<br>{<br>&nbsp;&nbsp;___ string model = \"Mustang\";<br>}<br><br>class SportsCar : Car<br>{<br>&nbsp;&nbsp;// Inherits from Car<br>}</code>",
    draganddropquestion: "Drag and drop the correct access modifier to allow <code class='w3-codespan'>model</code> to be accessed in inherited classes.",
    options: ["access", "syntax", "protected", "private", "internal", "public"],
    correct: [2]
  },
  {
    question: "What is inheritance in C#?",
    options: [
      "A way to copy code between classes.",
      "A mechanism where one class inherits properties and methods from another class.",
      "A method to create private variables.",
      "A process of defining multiple classes with the same name."
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_classes7.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>class Vehicle<br>{<br>&nbsp;&nbsp;public string brand = \"Ford\";<br>}<br><br>class Car : Vehicle<br>{<br>&nbsp;&nbsp;public string modelName = \"Mustang\";<br>}<br><br>class Program<br>{<br>&nbsp;&nbsp;static void Main(string[] args)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Car myCar = new Car();<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(myCar.brand + \" \" + myCar.modelName);<br>&nbsp;&nbsp;}<br>}</code>",
    options: [
      "Mustang Ford",
      "Ford Mustang",
      "Error: Cannot access 'brand'",
      "null null"
    ],
    correct: 1
  },
  {
    question: "Which symbol is used to indicate inheritance in C#?",
    options: [
      ".",
      ":",
      "->",
      "::"
    ],
    correct: 1
  },
  {
    question: "What is the main advantage of inheritance?",
    options: [
      "It allows one class to reuse fields and methods of another class.",
      "It forces all classes to have the same methods."
    ],
    correct: 0
  },
  {
    question: "What does the <code class='w3-codespan'>sealed</code> keyword do when used with a class?",
    options: [
      "It prevents methods from being overridden.",
      "It prevents the class from being inherited.",
      "It creates a constructor.",
      "It allows the class to override methods."
    ],
    correct: 1
  }
]
