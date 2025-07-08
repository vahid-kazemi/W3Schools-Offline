qobjects = [
  {
    question: "What would the following query do in SQL Server?<br><code class='w3-codespan'>SELECT TOP 5 * FROM Customers;</code>",
    options: [
      "Select the first 5 records from the Customers table",
      "Select the last 5 records from the Customers table",
      "Select 5 records sorted by CustomerName",
      "Select all records with CustomerID less than 5"
    ],
    correct: 0
  },
  {
    question: "Which SQL clause is used to limit the number of returned records in MySQL?",
    options: [
      "TOP",
      "ROWNUM",
      "LIMIT",
      "FETCH FIRST"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>SELECT ___ ___ Customers ORDER BY CustomerName DESC ___ 3;</code>",
    draganddropquestion: "Drag and drop the correct syntax to select the first 3 records in MySQL, sorted by CustomerName in descending order.",
    options: [
      "<code>*</code>",
      "<code>FROM</code>",
      "<code>LIMIT</code>",
      "<code>TOP</code>",
      "<code>SELECT</code>"
    ],
    correct: [0, 1, 2]
  }
]
