qobjects = [
  {
    question: "What is the primary purpose of the SQL <code class='w3-codespan'>CHECK</code> constraint?",
    options: [
      "To ensure that a column cannot have NULL values",
      "To enforce unique values in a column",
      "To limit the value range that can be placed in a column",
      "To link a column to a primary key in another table"
    ],
    correct: 2
  },
  {
    question: "Which SQL statement correctly creates a <code class='w3-codespan'>CHECK</code> constraint on the 'Age' column to ensure it is greater than or equal to 18?",
    options: [
      "<code>ALTER TABLE Persons ADD CHECK (Age > 18);</code>",
      "<code>ALTER TABLE Persons ADD CHECK (Age >= 18);</code>",
      "<code>ALTER TABLE Persons ADD CONSTRAINT CHECK (Age = 18);</code>",
      "<code>ALTER TABLE Persons ADD CHECK Age >= 18;</code>"
    ],
    correct: 1
  },
  {
    question: "Can a <code class='w3-codespan'>CHECK</code> constraint refer to multiple columns in a table?",
    options: [
      "No, CHECK constraints can only apply to a single column",
      "Yes, but only if the table is newly created",
      "Yes, a CHECK constraint can validate conditions across multiple columns",
      "No, for multiple columns, use a UNIQUE constraint instead"
    ],
    correct: 2
  },
  {
    question: "Which SQL statement removes a named <code class='w3-codespan'>CHECK</code> constraint in MySQL?",
    options: [
      "<code>ALTER TABLE Persons DROP CHECK CHK_Age;</code>",
      "<code>ALTER TABLE Persons REMOVE CONSTRAINT CHK_Age;</code>",
      "<code>ALTER TABLE Persons DELETE CHECK CHK_Age;</code>",
      "<code>ALTER TABLE Persons DROP CONSTRAINT CHK_Age;</code>"
    ],
    correct: 0
  }
]
