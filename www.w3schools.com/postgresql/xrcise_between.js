qobjects = [
  {
    draganddroptext: "<code>SELECT * FROM cars<br>WHERE year ___ ___ ___ ___;<</code>",
    draganddropquestion: "Drag and drop the missing code to select all cars from 2010 to 2020.",
    options: [
      "<code>IN</code>",
      "<code>&lt;</code>",
      "<code>&gt;</code>",
      "<code>IS</code>",
      "<code>BETWEEN</code>",
      "<code>AND</code>",
      "<code>OR</code>",
      "<code>2009</code>",
      "<code>2010</code>",
      "<code>2011</code>",
      "<code>2019</code>",
      "<code>2020</code>",
      "<code>2021</code>"
    ],
    correct: [4, 8, 5, 11]
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>SELECT * FROM cars<br>WHERE year BETWEEN 1970 AND 2025;</code><br>Will cars from 2025 be included in the result?",
    options: [
      "Yes",
      "No"
    ],
    correct: 0
  }, 
  {
    fillintheblanks: "exercise_operators5.htm"
  }
]