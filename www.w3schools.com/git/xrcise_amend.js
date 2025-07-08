qobjects = [
  {
    draganddroptext: "<code>git commit ___ -m \"Updated index\"</code>",
    draganddropquestion: "Drag and drop the correct option to amend the previous commit with a new message.",
    options: ["--fixup", "--amend", "--soft", "--reset"],
    correct: [1]
  },
  {
    question: "What does 'git commit --amend' do?",
    options: [
      "Creates a new commit that undoes the previous one.",
      "Modifies the most recent commit, combining staged changes and/or changing the message.",
      "Deletes the last commit permanently.",
      "Pushes changes to the remote repository."
    ],
    correct: 1
  }
]
