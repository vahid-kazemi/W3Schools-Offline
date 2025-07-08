const qobjects = [
  {
    draganddroptext: "<code>ALTER TABLE Persons<br>___ CONSTRAINT UC_Person ___ (ID, LastName);</code>",
    draganddropquestion: "Drag and drop the correct keywords to add a named UNIQUE constraint on the 'ID' and 'LastName' columns.",
    options: [
      "<code>ADD</code>",
      "<code>DROP</code>",
      "<code>INDEX</code>",
      "<code>UNIQUE</code>"
    ],
    correct: [0, 3]
  },
  {
    question: "What does the SQL <code class='w3-codespan'>UNIQUE</code> constraint ensure?",
    options: [
      "That a column cannot contain NULL values",
      "That all values in a column are different",
      "That a column must always contain a value",
      "That a column is a foreign key"
    ],
    correct: 1
  },
  {
    question: "How many <code class='w3-codespan'>UNIQUE</code> constraints can a single table have?",
    options: [
      "Only one",
      "Multiple",
      "One for each numeric column",
      "Only for columns with a NOT NULL constraint"
    ],
    correct: 1
  },
  {
    question: "How do you create a <code class='w3-codespan'>UNIQUE</code> constraint on the 'ID' column in an existing table?",
    options: [
      "<code>ALTER TABLE Persons ADD UNIQUE ID;</code>",
      "<code>ALTER TABLE Persons ADD CONSTRAINT UNIQUE (ID);</code>",
      "<code>ALTER TABLE Persons ADD UNIQUE (ID);</code>",
      "<code>ALTER TABLE Persons MODIFY COLUMN ID UNIQUE;</code>"
    ],
    correct: 2
  },
]
