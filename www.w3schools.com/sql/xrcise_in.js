qobjects = [
  {
    question: "What is the primary purpose of the SQL <code class='w3-codespan'>IN</code> operator?",
    options: [
      "To specify a range of values in a WHERE clause",
      "To select all columns from a table",
      "To perform a wildcard search"
    ],
    correct: 0
  },
  {
    question: "Which query returns all customers from 'Germany', 'France', or 'UK'?",
    options: [
      "SELECT * FROM Customers WHERE Country IN ('Germany', 'France', 'UK');",
      "SELECT * FROM Customers WHERE Country = 'Germany' OR 'France' OR 'UK';",
      "SELECT * FROM Customers WHERE Country LIKE 'Germany, France, UK';",
      "SELECT * FROM Customers WHERE Country = ('Germany', 'France', 'UK');"
    ],
    correct: 0
  },
  {
    question: "What will the following query return?<br><code class='codeblock'>SELECT * FROM Customers<br>WHERE Country NOT IN ('Mexico', 'Sweden');</code>",
    options: [
      "All customers from Mexico and Sweden",
      "All customers except those from Mexico and Sweden",
      "All customers with NULL values in the Country column",
      "An error due to syntax issues"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_in1.htm"
  },
  {
    fillintheblanks: "exercise_in2.htm"
  },
  {
    draganddroptext: "<code>SELECT * FROM Customers WHERE ___ ___ ('Norway', 'France', 'USA');</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to return customers from the countries 'Norway', 'France', or 'USA'.",
    options: [
      "<code>Country</code>",
      "<code>IN</code>",
      "<code>NOT</code>",
      "<code>WHERE</code>",
      "<code>SELECT</code>"
    ],
    correct: [0, 1]
  }
]
