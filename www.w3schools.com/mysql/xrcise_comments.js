const qobjects = [
  {
    draganddroptext: "<code>SELECT * FROM Customers<br>___ WHERE City = 'Berlin';</code>",
    draganddropquestion: "Drag and drop to make the WHERE clause a single-line comment.",
    options: [
      "<code>--</code>",
      "<code>/*</code>",
      "<code>//</code>",
      "<code>*/</code>"
    ],
    correct: [0]
  },
  {
    question: "What is the primary purpose of comments in SQL statements?",
    options: [
      "To execute additional SQL statements",
      "To explain sections of SQL code or prevent execution",
      "To create aliases for columns",
      "To perform complex calculations"
    ],
    correct: 1
  },
  {
    question: "What happens to the text inside a multi-line comment?",
    options: [
      "It is executed as part of the SQL statement",
      "It is ignored by the SQL engine",
      "It is treated as a syntax error",
      "It is displayed as output"
    ],
    correct: 1
  },
  {
    question: "Which of the following statements contains a valid multi-line comment?",
    options: [
      "/* SELECT * FROM Customers;",
      "/* SELECT * FROM Customers */",
      "-- SELECT * FROM Customers */",
      "/* SELECT * FROM Customers -- */"
    ],
    correct: 1
  },
  {
    question: "What will the following SQL do?<br><code class='codeblock'>SELECT * FROM Customers<br>WHERE<br>(CustomerName LIKE 'A%' /* OR CustomerName LIKE 'B%' */);</code>",
    options: [
      "Return all customers whose names start with 'A' or 'B'",
      "Return all customers whose names start with 'A'",
      "Return all customers",
      "Return no customers"
    ],
    correct: 1
  }
]
