qobjects = [
  {
    draganddroptext: "<code>SELECT Employees.LastName, COUNT(Orders.OrderID) AS NumberOfOrders<br>___ (Orders INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID)<br>GROUP BY LastName<br>___ COUNT(Orders.OrderID) > ___;</code>",
    draganddropquestion: "Drag and drop the correct syntax to lists the employees that have registered more than 10 orders.",
    options: [
      "<code>COUNT</code>",
      "<code>FROM</code>",
      "<code>GROUP BY</code>",
      "<code>HAVING</code>",
      "<code>WHERE</code>",
      "<code>ORDER BY</code>",
      "<code>10</code>"
    ],
    correct: [1, 3, 6]
  },
  {
    question: "Which SQL query correctly filters groups where the total number of orders is greater than 100?",
    options: [
      "SELECT COUNT(OrderID), CustomerID<br>FROM Orders<br>WHERE COUNT(OrderID) > 100<br>GROUP BY CustomerID;",
      "SELECT CustomerID, COUNT(OrderID)<br>FROM Orders<br>GROUP BY CustomerID<br>WHERE COUNT(OrderID) > 100;",
      "SELECT CustomerID, COUNT(OrderID)<br>FROM Orders<br>GROUP BY CustomerID<br>HAVING COUNT(OrderID) > 100;",
      "SELECT COUNT(OrderID), CustomerID<br>FROM Orders<br>HAVING COUNT(OrderID) > 100<br>GROUP BY CustomerID;"
    ],
    correct: 2
  },
  {
    question: "What is the difference between the <code class='w3-codespan'>WHERE</code> and <code class='w3-codespan'>HAVING</code> clauses?",
    options: [
      "The WHERE clause filters rows; the HAVING clause filters groups",
      "The WHERE clause filters groups; the HAVING clause filters rows",
      "The WHERE clause is used only with JOIN; the HAVING clause is used with UNION",
      "The WHERE clause is used for sorting; the HAVING clause is used for filtering"
    ],
    correct: 0
  }
]
