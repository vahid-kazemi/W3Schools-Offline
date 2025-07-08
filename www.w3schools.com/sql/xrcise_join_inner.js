qobjects = [
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>INNER JOIN</code> keyword?",
    options: [
      "To return unmatched records from the left table",
      "To return unmatched records from the right table",
      "To select only the records that have matching values in both tables"
    ],
    correct: 2
  },
  {
    question: "Which SQL statement is correct for joining the Products and Categories tables on CategoryID?",
    options: [
      "SELECT * FROM Products<br>INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;",
      "SELECT * FROM Products<br>JOIN Categories;",
      "SELECT * FROM Products<br>INNER JOIN Categories;",
      "SELECT Products.ProductID, ProductName<br>FROM Categories;"
    ],
    correct: 0
  },
  {
    question: "What happens when there is no match between tables in an <code class='w3-codespan'>INNER JOIN</code>?",
    options: [
      "The unmatched rows from both tables are returned",
      "The unmatched rows from the left table are returned",
      "The unmatched rows from the right table are returned",
      "No rows are returned for the unmatched entries"
    ],
    correct: 3
  },
  {
    fillintheblanks: "exercise_join2.htm"
  },
  {
    draganddroptext: "<code>SELECT ___, Products.ProductName, Categories.CategoryName<br>FROM Products<br>___ Categories ON Products.CategoryID = Categories.CategoryID;</code>",
    draganddropquestion: "Drag and drop the correct syntax to create an INNER JOIN between Products and Categories.",
    options: [
      "<code>ProductID</code>",
      "<code>INNER JOIN</code>",
      "<code>LEFT JOIN</code>",
      "<code>FULL OUTER JOIN</code>",
      "<code>RIGHT JOIN</code>"
    ],
    correct: [0, 1]
  }
]
