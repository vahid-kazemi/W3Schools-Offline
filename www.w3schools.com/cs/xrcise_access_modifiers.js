qobjects = [
  {
    question: "What is the purpose of access modifiers in C#?",
    options: [
      "To determine how objects are created.",
      "To set the visibility and accessibility of classes, fields, and methods.",
      "To specify the return type of a method.",
      "To control the execution order of methods."
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_classes6.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>class Car<br>{<br>&nbsp;&nbsp;private string model = \"Mustang\";<br>}<br><br>class Program<br>{<br>&nbsp;&nbsp;static void Main(string[] args)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Car myObj = new Car();<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(myObj.model);<br>&nbsp;&nbsp;}<br>}</code>",
    options: [
      "Mustang",
      "null",
      "Error: 'Car.model' is inaccessible due to its protection level",
      "The field is automatically converted to public"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>class Car<br>{<br>&nbsp;&nbsp;___ string model = \"Mustang\";<br>}</code>",
    draganddropquestion: "Drag and drop the correct access modifier to make <code>model</code> accessible from any class.",
    options: ["public", "private", "protected", "internal"],
    correct: [0]
  },
  {
    question: "Which access modifier makes a field accessible only within the same class?",
    options: [
      "public",
      "private",
      "protected",
      "internal"
    ],
    correct: 1
  },
  {
    question: "What will happen if no access modifier is specified for a class field?",
    options: [
      "It will be treated as public by default.",
      "It will be treated as private by default.",
      "It will be treated as protected by default.",
      "It will be inaccessible by any class."
    ],
    correct: 1
  }
]
