qobjects = [
  {
    draganddroptext: "<code>git remote ___ origin git@github.com:username/repo.git</code>",
    draganddropquestion: "Drag and drop the correct subcommand to add a new remote.",
    options: ["set-url", "add", "update", "push"],
    correct: [1]
  },
  {
    question: "How do you update the URL for an existing remote named 'origin'?",
    options: [
      "git remote set-url origin git@github.com:username/repo.git",
      "git remote update-url origin git@github.com:username/repo.git",
      "git remote edit origin git@github.com:username/repo.git",
      "git remote change-url origin git@github.com:username/repo.git"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_set_remote1.htm"
  }
]
