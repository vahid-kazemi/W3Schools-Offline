qobjects = [
  {
    question: "What is the main purpose of encapsulation in C#?",
    options: [
      "To allow all data to be publicly accessible.",
      "To make sure sensitive data is hidden from unauthorized access.",
      "To speed up the execution of code."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>class Person<br>{<br>&nbsp;&nbsp;private string name;<br>&nbsp;&nbsp;public string Name<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;get { return name; }<br>&nbsp;&nbsp;&nbsp;&nbsp;set { name = ___; }<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword that represents the assigned value in the setter.",
    options: ["value", "name", "get", "set"],
    correct: [0]
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>class Person<br>{<br>&nbsp;&nbsp;private string name;<br>&nbsp;&nbsp;public string Name<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;get { return name; }<br>&nbsp;&nbsp;&nbsp;&nbsp;set { name = value; }<br>&nbsp;&nbsp;}<br>}<br><br>class Program<br>{<br>&nbsp;&nbsp;static void Main(string[] args)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Person myObj = new Person();<br>&nbsp;&nbsp;&nbsp;&nbsp;myObj.Name = \"Liam\";<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(myObj.Name);<br>&nbsp;&nbsp;}<br>}</code>",
    options: [
      "Liam",
      "null",
      "Error",
      "Undefined"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>class Person<br>{<br>&nbsp;&nbsp;public string Name { ___; ___; }<br>}</code>",
    draganddropquestion: "Drag and drop the correct keywords to define an automatic property.",
    options: ["get", "set", "return", "value"],
    correct: [0, 1]
  },
  {
    question: "How can you make a property read-only?",
    options: [
      "By defining only a getter and omitting the setter.",
      "By defining only a setter and omitting the getter.",
      "By making the property <code>public</code>."
    ],
    correct: 0
  },
  {
    question: "Why is encapsulation important?",
    options: [
      "It allows direct modification of fields from outside the class.",
      "It restricts access to fields, increasing data security.",
      "It prevents methods from being used.",
      "It makes all class members public by default."
    ],
    correct: 1
  }
]
