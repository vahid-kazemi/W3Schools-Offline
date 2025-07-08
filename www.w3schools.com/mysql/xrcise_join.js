qobjects = [
  {
    draganddroptext: "<code>___ Orders.OrderID, Customers.CustomerName<br>___ Orders<br>___ Customers ___ Orders.CustomerID=Customers.CustomerID;</code>",
    draganddropquestion: "Drag and drop all keywords to make a legal SQL statement",
    options: [
      "<code>FROM</code>",
      "<code>SELECT</code>",
      "<code>ON</code>",
      "<code>LEFT JOIN</code>"
    ],
    correct: [1,0,3,2]
  },
  {
    question: "Which one is NOT a legal JOIN type in MySQL?",
    options: [
      "<code>LEFT JOIN</code>",
      "<code>RIGHT JOIN</code>",
      "<code>INNER JOIN</code>",
      "<code>CROSS JOIN</code>",
      "<code>OUTER JOIN</code>",
    ],
    correct: 4
  },
  {
    fillintheblanks: "exercise_join1.htm"
  }
];
