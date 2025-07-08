qobjects = [
  {
    question: "What does the SQL <code class='w3-codespan'>EXISTS</code> operator do?",
    options: [
      "Checks if a subquery returns one or more records",
      "Combines results of multiple queries",
      "Joins two tables based on a common column",
      "Filters rows based on a condition"
    ],
    correct: 0
  },
  {
    question: "The <code class='w3-codespan'>EXISTS</code> operator returns ___ when the subquery produces one or more records.",
    options: [
      "NULL",
      "FALSE",
      "TRUE",
      "ERROR"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>SELECT SupplierName<br>___ Suppliers<br>___ ___ (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);</code>",
    draganddropquestion: "Drag and drop the correct syntax to create a query that lists suppliers with products priced under 20.",
    options: [
      "<code>WHERE</code>",
      "<code>EXISTS</code>",
      "<code>SELECT</code>",
      "<code>FROM</code>",
      "<code>GROUP BY</code>"
    ],
    correct: [3, 0, 1]
  }
]
