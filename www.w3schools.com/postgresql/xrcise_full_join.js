qobjects = [
  {
    question: "What does the <code class='w3-codespan'>FULL JOIN</code> keyword return?",
    options: [
      "All records when there is a match in the left or right table",
      "All records from the left table and matching records from the right table",
      "All records from the right table and matching records from the left table"
    ],
    correct: 0
  },
  {
    question: "True or False?<br><code class='w3-codespan'>FULL OUTER JOIN</code> and <code class='w3-codespan'>FULL JOIN</code> are the same.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>SELECT *<br>FROM Orders<br>___ ___ Customers<br>___ Orders.CustomerID=Customers.CustomerID;</code>",
    draganddropquestion: "Drag and drop the correct syntax to perform a FULL JOIN between Customers and Orders.",
    options: [
      "<code>JOIN</code>",
      "<code>LEFT</code>",
      "<code>OUTER</code>",
      "<code>FULL</code>",
      "<code>ON</code>",
      "<code>INNER</code>"
    ],
    correct: [3, 0, 4]
  },
]
