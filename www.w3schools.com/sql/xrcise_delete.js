qobjects = [
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>DELETE</code> statement?",
    options: [
      "To add new records to a table",
      "To modify existing records in a table",
      "To delete existing records from a table",
      "To retrieve records from a table"
    ],
    correct: 2
  },

  {
    fillintheblanks: "exercise_delete1.htm"
  },

  {
    fillintheblanks: "exercise_delete2.htm"
  },

  {
    question: "What will happen if you omit the <code class='w3-codespan'>WHERE</code> clause in a <code class='w3-codespan'>DELETE</code> statement?",
    options: [
      "No records will be deleted",
      "Only the first record will be deleted",
      "All records in the table will be deleted",
      "An error will occur"
    ],
    correct: 2
  },

  {
    question: "How would you delete all records from a table named 'Customers' without deleting the table itself?",
    options: [
      "DELETE FROM Customers WHERE CustomerID > 0;",
      "DELETE FROM Customers;",
      "DROP TABLE Customers;",
      "DELETE Customers;"
    ],
    correct: 1
  },

  {
    draganddroptext: "<code>___ FROM Customers ___ CustomerName = 'Alfreds Futterkiste';</code>",
    draganddropquestion: "Drag and drop the correct syntax to delete a record where 'CustomerName' is 'Alfreds Futterkiste'.",
    options: [
      "<code>DELETE</code>",
      "<code>FROM</code>",
      "<code>UPDATE</code>",
      "<code>DROP</code>",
      "<code>WHERE</code>"
    ],
    correct: [0, 4]
  }
]
