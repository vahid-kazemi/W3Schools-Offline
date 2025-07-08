qobjects = [
  {
    draganddroptext: "<code>git rebase ___</code>",
    draganddropquestion: "Drag and drop the correct option to continue a rebase after resolving conflicts.",
    options: ["--abort", "--continue", "--skip", "--interactive"],
    correct: [1]
  },
  {
    fillintheblanks: "exercise_rebase1.htm"
  },
  {
    question: "What does 'git rebase -i' do?",
    options: [
      "Starts an interactive rebase to edit, reorder, squash, or fix up commits.",
      "Aborts the current rebase.",
      "Skips the current commit during a rebase.",
      "Pushes all rebased commits to the remote repository."
    ],
    correct: 0
  }
]
