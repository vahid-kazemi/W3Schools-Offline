qobjects = [
  {
    question: "What does the SQL <code class='w3-codespan'>LEFT JOIN</code> keyword do?",
    options: [
      "Returns only matching records from both tables",
      "Returns all records from the left table and matching records from the right table",
      "Returns all records from the right table and matching records from the left table",
      "Returns all records from both tables"
    ],
    correct: 1
  },
  {
    question: "True or False?<br>In some databases <code class='w3-codespan'>LEFT JOIN</code> is called <code class='w3-codespan'>LEFT OUTER JOIN</code>.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>SELECT *<br>FROM Orders<br>___ Customers<br>ON Orders.CustomerID=Customers.CustomerID;</code>",
    draganddropquestion: "Drag and drop the correct syntax to perform a LEFT JOIN between Customers and Orders.",
    options: [
      "<code>LEFT JOIN</code>",
      "<code>INNER JOIN</code>",
      "<code>FULL JOIN</code>",
      "<code>ON</code>",
      "<code>RIGHT JOIN</code>"
    ],
    correct: [0]
  }
]
