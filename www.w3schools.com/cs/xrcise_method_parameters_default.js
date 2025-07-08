qobjects = [
  {
    question: "What will the following code output?<br><code class='codeblock'>static void MyMethod(string country = \"Norway\")<br>{<br>&nbsp;&nbsp;Console.WriteLine(country);<br>}<br><br>static void Main(string[] args)<br>{<br>&nbsp;&nbsp;MyMethod();<br>}</code>",
    options: [
      "Norway",
      "USA",
      "Sweden",
      "Error"
    ],
    correct: 0
  },
  {
    question: "What is another name for a parameter with a default value?",
    options: [
      "Required parameter",
      "Static parameter",
      "Optional parameter",
      "Global parameter"
    ],
    correct: 2
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>static void MyMethod(string country = \"Norway\")<br>{<br>&nbsp;&nbsp;Console.WriteLine(country);<br>}<br><br>static void Main(string[] args)<br>{<br>&nbsp;&nbsp;MyMethod(\"USA\");<br>&nbsp;&nbsp;MyMethod();<br>}</code>",
    options: [
      "Norway",
      "USA Norway",
      "Norway USA",
      "USA USA",
      "Error"
    ],
    correct: 1
  }
]
