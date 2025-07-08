qobjects = [
  {
    question: "Which SQL statement uses the <code class='w3-codespan'>ANY</code> operator correctly?",
    options: [
      "SELECT *<br>FROM products<br>WHERE product_id ANY <br>(SELECT product_id FROM order_details);",
      "SELECT *<br>FROM products<br>WHERE product_id = ANY <br>(SELECT product_id FROM order_details);",
      "SELECT product_name ANY <br>(SELECT product_id FROM order_details WHERE quantity > 10);",
      "SELECT *<br>FROM products<br>WHERE ANY <br>product_id IN (SELECT product_id FROM order_details);"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>SELECT produc_name<br>FROM products<br>WHERE product_id ___ ___ <br>(SELECT product_id<br>FROM order_details<br>WHERE quantity > 10);</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to complete the query using the ANY operator.",
    options: [
      "<code>=</code>",
      "<code>ANY</code>",
      "<code>ALL</code>",
      "<code>NOT</code>"
    ],
    correct: [0, 1]
  },
  {
    question: "True or False.<br>The ANY operator always returns True, even if no result matches the condition.",
    options: [
      "True",
      "False"
    ],
    correct: 1
  },


]
