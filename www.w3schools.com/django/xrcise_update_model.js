qobjects = [
  {
    question: "What is a correct syntax for adding a field that allows NULL values?",
    options: [
      "<code>phone = models.IntegerField(True)</code>",
      "<code>phone = models.IntegerField(null=True)</code>",
      "<code>phone = models.IntegerField(null=False)</code>"
    ],
    correct: 1
  },
  {
    question: "True or False. When making changes in the Model's structure, we have to make a migration to tell Django that it has to update the database.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "What is a correct syntax for make the migration?",
    options: [
      "<code>python manage.py makemigrations members</code>",
      "<code>python manage.py migrations members</code>",
      "<code>python manage.py migrate members</code>"
    ],
    correct: 0
  }
]