qobjects = [
  {
    question: "True or False:<br>Primary keys must contain UNIQUE values, and cannot contain NULL values.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "How many <code class='w3-codespan'>PRIMARY KEY</code> constraints can a table have?",
    options: [
      "Only one per table",
      "One per column",
      "Multiple, as long as they are on different columns",
      "None, unless combined with UNIQUE"
    ],
    correct: 0
  },
  {
    question: "How do you add a <code class='w3-codespan'>PRIMARY KEY</code> to the 'ID' column in an existing table?",
    options: [
      "<code>ALTER TABLE Persons ADD PRIMARY KEY (ID);</code>",
      "<code>ALTER TABLE Persons SET PRIMARY KEY (ID);</code>",
      "<code>ALTER TABLE Persons MODIFY PRIMARY KEY (ID);</code>",
      "<code>ALTER TABLE Persons ADD CONSTRAINT PRIMARY KEY ID;</code>"
    ],
    correct: 0
  },
  {
    question: "What happens if you try to add a <code class='w3-codespan'>PRIMARY KEY</code> to a column that contains NULL values?",
    options: [
      "The operation will succeed, but all NULL values will be replaced with 0",
      "The operation will fail with an error",
      "The operation will succeed, and NULL values will remain",
      "The operation will succeed, but duplicates will be ignored"
    ],
    correct: 1
  }
]
