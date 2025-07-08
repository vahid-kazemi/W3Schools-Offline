qobjects = [
  {
    draganddroptext: "<code>___ django.db import ___<br><br>class ___(___.Model):<br>&nbsp;&nbsp;firstname = models.CharField(max_length=255)<br>&nbsp;&nbsp;lastname = models.CharField(max_length=255)</code>",
    draganddropquestion: "Drag and drop the missing code to create a model named Member.",
    options: [
      "<code>models</code>",
      "<code>django</code>",
      "<code>from</code>",
      "<code>class</code>",
      "<code>models</code>",
      "<code>views</code>",
      "<code>py</code>",
      "<code>Member</code>"],
    correct: [2, [0, 4], 7, [0, 4]]
  },
  {
    question: "Django models are actually:",
    options: [
      "Python functions",
      "Tables in a database",
      "JSON objects"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_models1.htm"
  },
  {
    fillintheblanks: "exercise_models2.htm"
  }
]