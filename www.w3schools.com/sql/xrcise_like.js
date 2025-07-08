qobjects = [
  {
    question: "What does the SQL <code class='w3-codespan'>LIKE</code> operator do?",
    options: [
      "Groups records based on a condition",
      "Returns the largest value in a column",
      "Searches for a specified pattern in a column"
    ],
    correct: 2
  },
  {
    question: "Which SQL statement will return all customers with names starting with 'H'?",
    options: [
      "SELECT * FROM Customers WHERE CustomerName LIKE '%H';",
      "SELECT * FROM Customers WHERE CustomerName LIKE '_H';",
      "SELECT * FROM Customers WHERE CustomerName LIKE 'H%';",
      "SELECT * FROM Customers WHERE CustomerName LIKE 'H__%';"
    ],
    correct: 2
  },
  {
    question: "Which wildcard in the LIKE operator represents any single character?",
    options: [
      "The percent sign (%)",
      "The underscore sign (_)",
      "The caret sign (^) ",
      "The asterisk sign (*)"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_like1.htm"
  },
  {
    fillintheblanks: "exercise_like2.htm"
  },
  {
    fillintheblanks: "exercise_like3.htm"
  },
  {
    fillintheblanks: "exercise_like4.htm"
  },
  {
    fillintheblanks: "exercise_like5.htm"
  },
  {
    draganddroptext: "<code>SELECT * FROM Customers ___ CustomerName ___ 'A%';</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to select customers whose names start with 'A'.",
    options: [
      "<code>LIKE</code>",
      "<code>AND</code>",
      "<code>OR</code>",
      "<code>WHERE</code>",
      "<code>SELECT</code>"
    ],
    correct: [3, 0]
  }
]
