qobjects = [
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>WHERE</code> clause?",
    options: [
      "To specify the table from which to select data",
      "To filter records that meet a specified condition",
      "To join multiple tables together",
      "To sort records in ascending order"
    ],
    correct: 1
  },

  {
    question: "Which of the following SQL statements would return all customers from 'Mexico'?",
    options: [
      "SELECT * FROM Customers WHERE City='Mexico';",
      "SELECT * FROM Customers WHERE Country='Mexico';",
      "SELECT * FROM Customers AND Country='Mexico';",
      "SELECT * WHERE Country='Mexico';"
    ],
    correct: 1
  },

  {
    fillintheblanks: "exercise_where1.htm"
  },


  {
    fillintheblanks: "exercise_where2.htm"
  },


  {
    question: "How should text values be enclosed in the SQL <code class='w3-codespan'>WHERE</code> clause?",
    options: [
      "With double quotes",
      "With single quotes",
      "With no quotes",
      "With backticks"
    ],
    correct: 1
  },

  {
    draganddroptext: "<code>SELECT * FROM Customers<br>___ CustomerID ___ 50;</code>",
    draganddropquestion: "Drag and drop to select all customers with a CustomerID greater than 50.",
    options: [
      "<code>LIKE</code>",
      "<code>SELECT</code>",
      "<code>WHERE</code>",
      "<code><</code>",
      "<code>></code>",
      "<code>FROM</code>"
    ],
    correct: [2, 4]
  }
]
