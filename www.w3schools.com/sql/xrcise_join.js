qobjects = [
  {
    question: "What is the primary purpose of an SQL <code class='w3-codespan'>JOIN</code>?",
    options: [
      "To create a new table from existing tables",
      "To delete duplicate rows in a table",
      "To sort data in ascending or descending order",
      "To combine rows from two or more tables based on a related column"
    ],
    correct: 3
  },
  {
    fillintheblanks: "exercise_join1.htm"
  },
  {
    question: "Which SQL <code class='w3-codespan'>JOIN</code> type returns only the records that have matching values in both tables?",
    options: [
      "LEFT JOIN",
      "FULL OUTER JOIN",
      "INNER JOIN",
      "RIGHT JOIN"
    ],
    correct: 2
  },
  {
    question: "What does a <code class='w3-codespan'>LEFT JOIN</code> return?",
    options: [
      "All records from the left table and matched records from the right table",
      "Only matched records from both tables",
      "All records from the right table and matched records from the left table",
      "All records from both tables"
    ],
    correct: 0
  },
  {
    question: "Which SQL statement is correct to join 'Orders' and 'Customers' tables on 'CustomerID'?",
    options: [
      "SELECT * FROM Orders<br>JOIN Customers;",
      "SELECT * FROM Orders<br>INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;",
      "SELECT Orders.CustomerID, Customers.CustomerName<br>FROM Customers;",
      "SELECT Orders<br>INNER JOIN Customers WHERE Orders.CustomerID;"
    ],
    correct: 1
  },
  {
    question: "Which SQL JOIN returns all records when there is a match in either left or right table?",
    options: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    correct: 3
  }
]
