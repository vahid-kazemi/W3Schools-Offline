qobjects = [
  {
    question: "The <code class='w3-codespan'>FOREIGN KEY</code> constraint is used to:",
    options: [
      "Perform a comparison between a single column value and a range of other values",
      "Prevent actions that would destroy links between tables",
      "Ensure that a column cannot contain NULL values",
      "Automatically generate values for columns"
    ],
    correct: 1
  },
  {
    question: "In a database relationship, what is the table containing the <code class='w3-codespan'>FOREIGN KEY</code> called?",
    options: [
      "Parent table",
      "Child table",
      "Primary table",
      "Master table"
    ],
    correct: 1
  },
  {
    question: "How do you drop a <code class='w3-codespan'>FOREIGN KEY</code> constraint named 'FK_PersonOrder' in SQL Server?",
    options: [
      "<code class='codeblock'>ALTER TABLE Orders<br>DROP FOREIGN KEY FK_PersonOrder;</code>",
      "<code class='codeblock'>DROP FOREIGN KEY Orders.FK_PersonOrder;</code>",
      "<code class='codeblock'>ALTER TABLE Orders<br>DROP CONSTRAINT FK_PersonOrder;</code>",
      "<code class='codeblock'>ALTER TABLE Orders<br>DELETE FOREIGN KEY FK_PersonOrder;</code>"
    ],
    correct: 2
  },
  {
    question: "Can a <code class='w3-codespan'>FOREIGN KEY</code> reference a composite PRIMARY KEY in another table?",
    options: [
      "Yes, but only in MySQL",
      "No, a FOREIGN KEY can only reference single-column PRIMARY KEYs",
      "Yes, a FOREIGN KEY can reference composite PRIMARY KEYs",
      "No, FOREIGN KEYs and composite PRIMARY KEYs are incompatible"
    ],
    correct: 2
  },
  {
    question: "What is a key difference between <code class='w3-codespan'>PRIMARY KEY</code> and <code class='w3-codespan'>FOREIGN KEY</code>?",
    options: [
      "A PRIMARY KEY can reference another table, while a FOREIGN KEY cannot",
      "A PRIMARY KEY ensures uniqueness within its table, while a FOREIGN KEY links tables",
      "A FOREIGN KEY is always unique, while a PRIMARY KEY can have duplicates",
      "A PRIMARY KEY can be NULL, while a FOREIGN KEY cannot"
    ],
    correct: 1
  }
]
