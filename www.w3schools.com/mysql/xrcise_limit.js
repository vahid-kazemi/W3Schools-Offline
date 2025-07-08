qobjects = [
  {
    question: "Which one of the following is a correct SQL statement:",
    options: [
      "<code>SELECT * FROM Customers LIMIT 5</code>",
      "<code>LIMIT 5;SELECT * FROM Customers</code>",
      "<code>SELECT LIMT 5 * FROM Customers</code>"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>SELECT * FROM Customers ___ ___ ___ ___;</code>",
    draganddropquestion: "Insert the missing parts to return only the SECOND and the THIRD record",
    options: [
      "<code>MAX</code>",
      "<code>OFFSET</code>",
      "<code>1</code>",
      "<code>2</code>",
      "<code>3</code>",
      "<code>LIMIT</code>",
      "<code>VALUE</code>",
      "<code>:</code>",
      "<code>RECORDS</code>",
    ],
    correct: [5,3,1,2]
  },
  {
    question: "True or False.<br>You cannot use <code>ORDER BY</code> when using the <code>LIMIT</code> keyword.",
    options: [
      "True",
      "False"
    ],
    correct: 1
  }
];
