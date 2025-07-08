qobjects = [
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
      "SELECT product_name<br>FROM products<br>WHERE product_id = ALL<br>(SELECT product_id FROM order_details);",
      "SELECT ALL product_name<br>FROM products<br>WHERE quantity > 10;",
      "SELECT *<br>FROM products<br>WHERE ALL<br>product_id IN (SELECT product_id FROM order_details);",
      "SELECT *<br>FROM products<br>WHERE product_id ALL<br>(SELECT product_id FROM orderDetails);"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>SELECT product_name<br>FROM products<br>WHERE product_id ___ ___ <br>(SELECT product_id<br>FROM order_details<br>WHERE quantity = 10);</code>",
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
