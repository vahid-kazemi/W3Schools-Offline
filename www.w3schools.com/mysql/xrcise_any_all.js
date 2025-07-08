qobjects = [
  {
    draganddroptext: "<code>SELECT ProductName<br>FROM Products<br>WHERE ProductID ___ ___ <br>(SELECT ProductID<br>FROM OrderDetails<br>WHERE Quantity > 10);</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to complete the query using the ANY operator.",
    options: [
      "<code>=</code>",
      "<code>ANY</code>",
      "<code>ALL</code>",
      "<code>NOT</code>"
    ],
    correct: [0, 1]
  },
  {
    question: "Which SQL statement uses the <code class='w3-codespan'>ANY</code> operator correctly?",
    options: [
      "SELECT * FROM Products<br>WHERE ProductID ANY <br>(SELECT ProductID FROM OrderDetails);",
      "SELECT * FROM Products<br>WHERE ProductID = ANY <br>(SELECT ProductID FROM OrderDetails);",
      "SELECT ProductName ANY <br>(SELECT ProductID FROM OrderDetails WHERE Quantity > 10);",
      "SELECT * FROM Products<br>WHERE ANY <br>ProductID IN (SELECT ProductID FROM OrderDetails);"
    ],
    correct: 1
  },
  {
    question: "What does the SQL <code class='w3-codespan'>ALL</code> operator do?",
    options: [
      "Returns TRUE if all subquery values meet the condition",
      "Returns TRUE if any subquery value meets the condition",
      "Returns all columns from the table",
      "Returns only distinct rows from the table"
    ],
    correct: 0
  },
  {
    question: "Which SQL statement uses the <code class='w3-codespan'>ALL</code> operator correctly?",
    options: [
      "SELECT ProductName FROM Products<br>WHERE ProductID = ALL<br>(SELECT ProductID FROM OrderDetails);",
      "SELECT ALL ProductName FROM Products<br>WHERE Quantity > 10;",
      "SELECT * FROM Products<br>WHERE ALL<br>ProductID IN (SELECT ProductID FROM OrderDetails);",
      "SELECT * FROM Products<br>WHERE ProductID ALL<br>(SELECT ProductID FROM OrderDetails);"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>SELECT ProductName<br>FROM Products<br>WHERE ProductID ___ ___ <br>(SELECT ProductID<br>FROM OrderDetails<br>WHERE Quantity = 10);</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to complete the query using the ALL operator.",
    options: [
      "<code>=</code>",
      "<code>ANY</code>",
      "<code>ALL</code>",
      "<code>NOT</code>"
    ],
    correct: [0, 2]
  }
]
