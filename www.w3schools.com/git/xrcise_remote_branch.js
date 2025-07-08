qobjects = [
  {
    draganddroptext: "<code>git ___ branch-name</code>",
    draganddropquestion: "Drag and drop the correct command to switch to a branch called 'branch-name'.",
    options: ["switch", "checkout", "merge", "pull"],
    correct: [0]
  },
  {
    fillintheblanks: "exercise_remote_branch1.htm"
  },
  {
    question: "Which command creates a new branch and switches to it?",
    options: [
      "git branch branch-name",
      "git switch -c branch-name",
      "git merge branch-name",
      "git tag branch-name"
    ],
    correct: 1
  },
  {
    question: "How do you delete a branch named 'feature' locally?",
    options: [
      "git branch -d feature",
      "git delete feature",
      "git remove branch feature",
      "git branch --remove feature"
    ],
    correct: 0
  }
]
