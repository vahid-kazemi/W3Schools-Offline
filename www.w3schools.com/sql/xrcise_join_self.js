qobjects = [
  {
    question: "What is the purpose of a self join in SQL?",
    options: [
      "To join a table with another table",
      "To join a table with itself",
      "To create a new table by combining columns",
      "To perform a full outer join"
    ],
    correct: 1
  },
  {
    question: "Which of the following SQL statements correctly implements a self join?",
    options: [
      "SELECT * FROM Customers;",
      "SELECT A.CustomerName, B.CustomerName<br>FROM Customers A<br>JOIN SELF Customers B;",
      "SELECT A.CustomerName, B.CustomerName<br>FROM Customers A, Customers B<br>WHERE A.City = B.City;",
      "SELECT A.CustomerName, B.CustomerName<br>FROM Customers<br>SELF JOIN Customers;"
    ],
    correct: 2
  },
  {
    question: "In a self join, what is the purpose of using table aliases like A and B?",
    options: [
      "To join different tables",
      "To reference the same table with different roles",
      "To eliminate duplicate records",
      "To use aggregate functions more efficiently"
    ],
    correct: 1
  }
]
