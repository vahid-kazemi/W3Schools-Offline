qobjects = [
  {
    question: "What does the <code class='w3-codespan'>LEFT JOIN</code> keyword return?",
    options: [
      "Only matching records from both tables",
      "All records from the left table and matching records from the right table",
      "All records from the right table and matching records from the left table",
      "All records from both tables"
    ],
    correct: 1
  }, 
  {
    question: "True or False.<br><code class='w3-codespan'>LEFT JOIN</code> is the same as <code class='w3-codespan'>LEFT OUTER JOIN</code>.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>SELECT *<br>FROM Orders<br>___ ___ Customers<br>___ Orders.CustomerID=Customers.CustomerID;</code>",
    draganddropquestion: "Drag and drop the correct syntax to perform a LEFT JOIN between Customers and Orders.",
    options: [
      "<code>JOIN</code>",
      "<code>LEFT</code>",
      "<code>OUTER</code>",
      "<code>ON</code>",
      "<code>INNER</code>"
    ],
    correct: [1, 0, 3]
  },
  {
    fillintheblanks: "exercise_joins1.htm"
  }

]