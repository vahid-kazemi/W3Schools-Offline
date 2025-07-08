const qobjects = [
  {
    question: "What is the primary purpose of comments in SQL?",
    options: [
      "To execute additional SQL statements",
      "To explain sections of SQL code or prevent execution",
      "To create aliases for columns",
      "To perform complex calculations"
    ],
    correct: 1
  },
  {
    question: "Which symbol is used to start a single-line comment in SQL?",
    options: [
      "--",
      "..",
      "/*",
      "#"
    ],
    correct: 0
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
    question: "How would you comment out the WHERE clause in the following SQL?<br><code class='codeblock'>SELECT * FROM Customers<br>WHERE City='Berlin';</code>",
    options: [
      "<code>-- WHERE City='Berlin';</code>",
      "<code>SELECT * FROM Customers -- WHERE City='Berlin';</code>",
      "<code>SELECT * FROM Customers /* WHERE City='Berlin'; */</code>",
      "Both B and C"
    ],
    correct: 3
  },
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
    question: "What will the following SQL do?<br><code class='codeblock'>SELECT * FROM Customers<br>WHERE (CustomerName LIKE 'A%' /* OR CustomerName LIKE 'B%' */);</code>",
    options: [
      "Return all customers whose names start with 'A' or 'B'",
      "Return all customers whose names start with 'A'",
      "Return all customers",
      "Return no customers"
    ],
    correct: 1
  }
]
