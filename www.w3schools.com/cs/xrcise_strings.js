qobjects = [
  {
    draganddroptext: "<code>string txt = \"Hello World\";<br>Console.WriteLine(txt.___());</code>",
    draganddropquestion: "Drag and drop the correct method to convert the string to uppercase.",
    options: ["ToUpper", "ToLower", "Length", "Trim"],
    correct: [0]
  },
  {
    question: "What is the correct way to declare a string variable in C#?",
    options: [
      "char name = 'John';",
      "string name = \"John\";",
      "text name = 'John';",
      "str name = \"John\";"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_strings1.htm"
  },
  {
    fillintheblanks: "exercise_strings5.htm"
  },
  {
    question: "What will the following code output?<br><code class='w3-codespan'>string txt = \"Hello World\";<br>Console.WriteLine(txt.ToLower());</code>",
    options: [
      "HELLO WORLD",
      "hello world",
      "Hello World",
      "Error"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>string txt = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";<br>Console.WriteLine(txt.___);</code>",
    draganddropquestion: "Drag and drop the correct property to display the length of the string.",
    options: ["Length", "ToUpper", "ToLower", "Count"],
    correct: [0]
  },
  {
    question: "What is the output of the following code?<br><code class='w3-codespan'>string txt = \"Hello\";<br>Console.WriteLine(\"The length of the string is: \" + txt.Length);</code>",
    options: [
      "5",
      "6",
      "Hello",
      "Error"
    ],
    correct: 0
  }
]
