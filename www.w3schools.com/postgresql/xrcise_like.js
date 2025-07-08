qobjects = [
  {
    draganddroptext: "<code>SELECT * FROM customers<br>___ customer_name ___ ___;</code>",
    draganddropquestion: "Drag and drop the missing code to select all customers that starts with the letter 'A'.",
    options: [
      "<code>'A%'</code>",
      "<code>'%A'</code>",
      "<code>'_A'</code>",
      "<code>=</code>",
      "<code>SELECT</code>",
      "<code>WHERE</code>",
      "<code>LIKE</code>"
    ],
    correct: [5, 6, 0]
  },
  {
    question: "Which one of the following SQL statements will return all customers from London?",
    options: [
      "<code>SELECT * FROM customers WHERE city LIKE 'L__nd_';</code>",
      "<code>SELECT * FROM customers WHERE city LIKE 'L_nd_';</code>",
      "<code>SELECT * FROM customers WHERE city LIKE 'L_nd__';</code>"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>SELECT * FROM customers<br>___ customer_name ___ ___;</code>",
    draganddropquestion: "Drag and drop the missing code to select all customers that contains the letter 'a'.",
    options: [
      "<code>'a%'</code>",
      "<code>'%a%'</code>",
      "<code>'_a'</code>",
      "<code>=</code>",
      "<code>SELECT</code>",
      "<code>WHERE</code>",
      "<code>LIKE</code>"
    ],
    correct: [5, 6, 1]
  },
  {
    fillintheblanks: "exercise_operators3.htm"
  }
]