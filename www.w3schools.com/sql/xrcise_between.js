qobjects = [
  {
    question: "Which SQL statement selects all products with a price between 10 and 20?",
    options: [
      "SELECT * FROM Products WHERE Price = 10 AND Price = 20;",
      "SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;",
      "SELECT * FROM Products WHERE Price >= 10 OR Price <= 20;",
      "SELECT * FROM Products WHERE Price LIKE '10-20';"
    ],
    correct: 1
  },
  {
    question: "What is the primary purpose of the SQL <code class='w3-codespan'>BETWEEN</code> operator?",
    options: [
      "To select values within a specified range",
      "To check if a value matches a specific pattern",
      "To filter values based on a list",
      "To combine multiple conditions in a WHERE clause"
    ],
    correct: 0
  },
  {
    question: "What does the SQL <code class='w3-codespan'>NOT BETWEEN</code> operator do?",
    options: [
      "Selects values that do not fall within a specified range",
      "Selects values that are null",
      "Selects values outside of a table",
      "Selects values that match a specified pattern"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_between1.htm"
  },
  {
    fillintheblanks: "exercise_between2.htm"
  },
  {
    fillintheblanks: "exercise_between3.htm"
  },
  {
    question: "Which SQL query uses <code class='w3-codespan'>BETWEEN</code> with text values?",
    options: [
      "SELECT * FROM Products<br>WHERE ProductName = 'A%' AND ProductName = 'Z%';",
      "SELECT * FROM Products<br>WHERE ProductName BETWEEN 'Apple' AND 'Orange';",
      "SELECT * FROM Products<br>WHERE ProductName NOT IN ('Apple', 'Orange');",
      "SELECT * FROM Products<br>WHERE ProductName LIKE 'Apple%Orange';"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>SELECT * FROM Products ___ Price ___ ___ AND ___;</code>",
    draganddropquestion: "Drag and drop the correct syntax to complete the SQL query that selects products with prices between 50 and 70.",
    options: [
      "<code>BETWEEN</code>",
      "<code>NOT</code>",
      "<code>Price</code>",
      "<code>50</code>",
      "<code>70</code>",
      "<code>WHERE</code>"
    ],
    correct: [5,0, 3, 4]
  }
]
