qobjects = [
  {
    question: "What is the command to create an empty file named <code>example.txt</code>.",
    options: [
      "<code>create example.txt</code>",
      "<code>touch example.txt</code>",
      "<code>make example.txt</code>",
      "<code>new example.txt</code>"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_touch1.htm"
  },
  {
    draganddroptext: "<code>touch ___ data.txt</code>",
    draganddropquestion: "Provide the command to update only the access time of <code>data.txt</code>.",
    options: ["-a", "-u", "-c"],
    correct: [0]
  }
]
