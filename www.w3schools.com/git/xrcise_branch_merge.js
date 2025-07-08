qobjects = [
  {
    draganddroptext: "<code>git ___ hello-you</code>",
    draganddropquestion: "Drag and drop the correct command to merge the hello-you branch into the current branch.",
    options: ["branch", "checkout", "merge", "commit"],
    correct: [2]
  },
  {
    fillintheblanks: "exercise_branch_merge1.htm"
  },
  {
    question: "Which command aborts a merge in progress?",
    options: [
      "git merge --no-ff",
      "git merge --abort",
      "git merge --squash",
      "git abort merge"
    ],
    correct: 1
  },
  {
    question: "What does a merge conflict mean?",
    options: [
      "There are incompatible changes in both branches that must be resolved manually.",
      "The merge was successful and no further action is needed.",
      "A branch was deleted during the merge.",
      "The repository is corrupted."
    ],
    correct: 0
  }
]
