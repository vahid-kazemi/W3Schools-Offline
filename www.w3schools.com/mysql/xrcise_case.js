qobjects = [
  {
    draganddroptext: "<code>___ <br>&nbsp;&nbsp;WHEN Quantity > 50 THEN 'High'<br>&nbsp;&nbsp;WHEN Quantity <= 50 THEN 'Low'<br>&nbsp;&nbsp;___ 'Unknown'<br>___ AS QuantityCategory</code>",
    draganddropquestion: "Drag and drop the correct keywords to complete the SQL CASE expression.",
    options: [
      "<code>WHEN</code>",
      "<code>ELSE</code>",
      "<code>CASE</code>",
      "<code>AS</code>",
      "<code>SELECT</code>",
      "<code>END</code>"
    ],
    correct: [2,1,5]
  },
  {
    question: "What does the SQL <code class='w3-codespan'>CASE</code> expression do?",
    options: [
      "It iterates over table rows and returns a value for each column.",
      "It evaluates conditions and returns a value based on the first true condition.",
      "It specifies an alias for a column or table.",
      "It combines rows from two tables based on a condition."
    ],
    correct: 1
  },

  {
    question: "What happens if no condition is true in a <code class='w3-codespan'>CASE</code> expression and there is no <code class='w3-codespan'>ELSE</code> clause?",
    options: [
      "It returns NULL.",
      "It throws an error.",
      "It stops execution of the query.",
      "It defaults to the first condition."
    ],
    correct: 0
  },

]
