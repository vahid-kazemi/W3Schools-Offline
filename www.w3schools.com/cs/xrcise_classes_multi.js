qobjects = [
  {
    draganddroptext: "<code>Car myObj1 = new Car();<br>Car myObj2 = ___ Car();</code>",
    draganddropquestion: "Drag and drop the correct keyword to create a second object.",
    options: ["insert", "new", "create", "class", "object"],
    correct: [1]
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>class Car<br>{<br>&nbsp;&nbsp;string color = \"red\";<br>}<br><br>class Program<br>{<br>&nbsp;&nbsp;static void Main(string[] args)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Car myObj1 = new Car();<br>&nbsp;&nbsp;&nbsp;&nbsp;Car myObj2 = new Car();<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(myObj1.color);<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(myObj2.color);<br>&nbsp;&nbsp;}<br>}</code>",
    options: [
      "red blue",
      "red red",
      "null null",
      "Error"
    ],
    correct: 1
  },
  {
    question: "Why is the <code class='w3-codespan'>public</code> keyword needed in the <code class='w3-codespan'>Car</code> class when accessed from another class?",
    options: [
      "To make the class accessible in different programming languages.",
      "To allow the variable to be accessed from other classes.",
      "To make the class static.",
      "To restrict access to the class fields."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>class Car<br>{<br>&nbsp;&nbsp;___ string color = \"red\";<br>}</code>",
    draganddropquestion: "Drag and drop the correct access modifier to allow access from another class.",
    options: ["access", "public", "private", "static", "internal"],
    correct: [1]
  },
  {
    question: "Which best describes the advantage of using multiple classes?",
    options: [
      "It allows better organization and modularity in a program.",
      "It makes a program execute faster.",
      "It automatically generates objects for a class.",
      "It eliminates the need for constructors."
    ],
    correct: 0
  }
]
