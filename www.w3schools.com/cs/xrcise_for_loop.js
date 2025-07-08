qobjects = [
  {
    draganddroptext: "<code>___ (int i = 0; ___; i++)<br>{<br>&nbsp;&nbsp;Console.WriteLine(i);<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword and condition to ensure the loop runs while <code>i</code> is less than 5.",
    options: ["i < 5", "i > 5", "i == 5", "for", "while", "if"],
    correct: [3, 0]
  },
  {
    fillintheblanks: "exercise_while_loop3.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>for (int i = 0; i < 5; i++)<br>{<br>&nbsp;&nbsp;Console.WriteLine(i);<br>}</code>",
    options: [
      "0 1 2 3 4",
      "1 2 3 4 5",
      "0 1 2 3 4 5",
      "0 1 2 3"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>for (int i = 0; i <= 10; ___)<br>{<br>&nbsp;&nbsp;Console.WriteLine(i);<br>}</code>",
    draganddropquestion: "Drag and drop the correct statement to increment <code>i</code> by 2 in each iteration.",
    options: ["i = i + 2", "i++", "i = 2", "i--"],
    correct: [0]
  },
  {
    question: "True or False:<br>It is NOT possible to place a loop inside another loop.",
    options: [
      "True",
      "False"
    ],
    correct: 1
  },
  {
    question: "What is a nested loop in C#?",
    options: [
      "A loop that iterates over an array.",
      "A loop that runs after another loop finishes.",
      "A loop placed inside another loop.",
      "A loop that uses multiple variables."
    ],
    correct: 2
  }
]
