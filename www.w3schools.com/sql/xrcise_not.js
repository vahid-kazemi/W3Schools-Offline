qobjects = [
  {
    question: "What is the primary purpose of the SQL <code class='w3-codespan'>NOT</code> operator?",
    options: [
      "To filter records that match a specified condition",
      "To filter records that do not match a specified condition",
      "To filter records that match multiple conditions",
      "To filter records that are exactly equal to a specified condition"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_not1.htm"
  },

  {
    question: "Which SQL query would select all customers that are NOT from 'Spain'?",
    options: [
      "SELECT * FROM Customers WHERE Country = 'Spain';",
      "SELECT * FROM Customers WHERE Country NOT 'Spain';",
      "SELECT * FROM Customers WHERE NOT Country = 'Spain';",
      "SELECT * FROM Customers WHERE Country != 'Spain';"
    ],
    correct: 2
  },

  {
    draganddroptext: "SELECT * FROM Customers<br><code>___ CustomerName ___ ___ '___';</code>",
    draganddropquestion: "Select the correct statements to return all customers whose names do NOT start with the letter 'A':",
    options: [
      "<code>WHERE</code>",
      "<code>NOT</code>",
      "<code>LIKE</code>",
      "<code>FROM</code>",
      "<code>A%</code>"
    ],
    correct: [0, 1, 2, 4]
  },

  {
    question: "Which SQL statement would select all customers whose CustomerID is NOT between 10 and 50?",
    options: [
      "SELECT * FROM Customers WHERE CustomerID = 10 AND 50;",
      "SELECT * FROM Customers WHERE CustomerID BETWEEN 10 AND 50;",
      "SELECT * FROM Customers WHERE CustomerID NOT IN (10, 50);",
      "SELECT * FROM Customers WHERE CustomerID NOT BETWEEN 10 AND 50;"
    ],
    correct: 3
  },

  {
    question: "Which query will select customers who are NOT located in 'Paris' or 'London'?",
    options: [
      "SELECT * FROM Customers WHERE NOT City IN ('Paris', 'London');",
      "SELECT * FROM Customers WHERE City NOT IN ('Paris', 'London');",
      "SELECT * FROM Customers WHERE City != ('Paris', 'London');",
      "SELECT * FROM Customers WHERE City NOT LIKE ('Paris', 'London');"
    ],
    correct: 1
  }
]
