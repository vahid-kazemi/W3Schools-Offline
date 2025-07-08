qobjects = [
  {
    question: "What is the primary purpose of the SQL <code class='w3-codespan'>OR</code> operator?",
    options: [
      "To filter records based on multiple conditions where at least one condition is true",
      "To filter records based on multiple conditions where all conditions must be true",
      "To sort records in descending order",
      "To count the number of rows in a table"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_or1.htm"
  },
  {
    question: "Which SQL query would select all customers from either Germany or Spain?",
    options: [
      "SELECT * FROM Customers<br>WHERE Country = 'Germany' OR Country = 'Spain';",
      "SELECT * FROM Customers<br>WHERE Country = 'Germany' AND Country = 'Spain';",
      "SELECT * FROM Customers<br>WHERE Country ARE ('Germany', 'Spain');",
      "SELECT * FROM Customers<br>WHERE Country FROM 'Germany' OR 'Spain';"
    ],
    correct: 0
  },
  {
    question: "What will the following SQL query return?<br><code class='codeblock'>SELECT * FROM Customers<br>WHERE City = 'Berlin' OR Country = 'Norway';</code>",
    options: [
      "All customers from either Berlin or Norway",
      "All customers from Berlin only",
      "All customers from Norway only"
    ],
    correct: 0
  },
  {
    question: "Which SQL query would select all Spanish customers whose names start with 'G' or 'R'?",
    options: [
      "SELECT * FROM Customers<br>WHERE Country = 'Spain' AND (CustomerName LIKE 'G%' OR CustomerName LIKE 'R%');",
      "SELECT * FROM Customers<br>WHERE Country = 'Spain' OR CustomerName LIKE 'G%' OR CustomerName LIKE 'R%';",
      "SELECT * FROM Customers<br>WHERE Country = 'Spain' AND CustomerName LIKE 'G%' AND CustomerName LIKE 'R%';",
      "SELECT * FROM Customers<br>WHERE Country = 'Spain' OR CustomerName LIKE 'G%';"
    ],
    correct: 0
  }
]
