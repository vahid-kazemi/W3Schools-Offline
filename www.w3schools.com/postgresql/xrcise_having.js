qobjects = [
  {
    question: "What is the primary purpose of the <code class='w3-codespan'>HAVING</code> clause?",
    options: [
      "To filter rows based on a condition before grouping",
      "To filter groups based on an aggregate condition after grouping",
      "To order the result set in ascending or descending order",
      "To join multiple tables"
    ],
    correct: 1
  },
  {
    question: "Which SQL query correctly filters groups where the total number of orders is greater than 100?",
    options: [
      "SELECT COUNT(order_id), customer_id<br>FROM orders<br>WHERE COUNT(order_id) > 100<br>GROUP BY customer_id;",
      "SELECT customer_id, COUNT(order_id)<br>FROM orders<br>GROUP BY customer_id<br>WHERE COUNT(order_id) > 100;",
      "SELECT customer_id, COUNT(order_id)<br>FROM orders<br>GROUP BY customer_id<br>HAVING COUNT(order_id) > 100;",
      "SELECT COUNT(order_id), customer_id<br>FROM orders<br>HAVING COUNT(order_id) > 100<br>GROUP BY customer_id;"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>SELECT employees.lastname, COUNT(orders.order_id) AS number_of_orders<br>___ (orders INNER JOIN employees ON orders.employee_id = employees.employee_id)<br>GROUP BY lastname<br>___ COUNT(orders.order_id) > ___;</code>",
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
  }
]
