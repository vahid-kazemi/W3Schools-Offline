qobjects = [
  {
    question: "Which command will push your current branch to the remote named 'origin'?",
    options: [
      "git push origin",
      "git push --tags",
      "git push origin --delete branch-name",
      "git branch -d branch-name"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_branch_push_to_remote1.htm"
  },
  {
    draganddroptext: "<code>git push ___ origin</code>",
    draganddropquestion: "Drag and drop the correct option to push all local branches to the remote 'origin'.",
    options: ["--branches", "--feature", "--all", "--push"],
    correct: [2]
  }
]
