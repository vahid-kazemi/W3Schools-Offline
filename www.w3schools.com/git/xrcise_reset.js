qobjects = [
  {
    draganddroptext: "<code>git reset ___ abc1234</code>",
    draganddropquestion: "Drag and drop the correct option to reset to the commit with hash abc1234 and keep changes staged.",
    options: ["--hard", "--soft", "--mixed", "--abort"],
    correct: [1]
  },
  {
    fillintheblanks: "exercise_reset1.htm"
  },
  {
    question: "What does 'git reset --hard' do?",
    options: [
      "Moves HEAD to a commit and deletes all changes in the working directory and index.",
      "Moves HEAD to a commit but keeps all changes staged.",
      "Moves HEAD to a commit but keeps all changes in the working directory.",
      "Unstages a file from the index."
    ],
    correct: 0
  }
]
