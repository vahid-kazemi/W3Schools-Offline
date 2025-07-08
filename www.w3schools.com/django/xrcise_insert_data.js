qobjects = [
  {
    question: "What is a correct syntax for inserting data in the Member table?",
    options: [
      "<code>x = Member(firstname='John', lastname='Doe')</code>",
      "<code>x = Add('Member', firstname='John', lastname='Doe')</code>",
      "<code>x = Insert(t='Member', firstname='John', lastname='Doe')</code>"
    ],
    correct: 0
  },
  {
    question: "What best describes a QuerySet?",
    options: [
      "A QuerySet is a collection of data from a database",
      "A QuerySet is a Python object for defining the sort order",
      "A QuerySet is a Python object for specifying which fields you are allowed to query",
    ],
    correct: 0
  },
  {
    question: "When inserting data to a QuerySet, it is important to run a command to save it to the database, which command?",
    options: [
      "<code>x.add()</code>",
      "<code>x.update()</code>",
      "<code>x.save()</code>",
    ],
    correct: 2
  }
]