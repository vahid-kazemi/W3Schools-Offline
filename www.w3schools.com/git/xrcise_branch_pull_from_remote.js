qobjects = [
  {
    question: "Which command lists all local and remote branches?",
    options: [
      "git branch -r",
      "git branch -a",
      "git branch",
      "git show-branch"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>git ___ branch-name</code>",
    draganddropquestion: "Drag and drop the correct command to switch to a remote branch after fetching or pulling.",
    options: ["checkout", "merge", "clone", "pull"],
    correct: [0]
  },
  {
    question: "After switching to a new remote branch, which command updates it with the latest changes?",
    options: [
      "git branch",
      "git status",
      "git pull",
      "git fetch"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_branch_pull_from_remote1.htm"
  }
]
