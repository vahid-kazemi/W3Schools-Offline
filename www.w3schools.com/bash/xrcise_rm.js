qobjects = [
  {
    draganddroptext: '<code>___ document.txt</code>',
    draganddropquestion: "Provide the command to delete <code>document.txt</code>.",
    options: ["remove", "rm", "delete"],
    correct: [1]
  },
  {
    question: "What is the correct command to remove a directory named <code>old_folder</code> and all its contents.",
    options: [
      "<code>rm -r old_folder</code>",
      "<code>rm -n old_folder</code>",
      "<code>rm -l old_folder</code>",
      "<code>rm -h old_folder</code>"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_rm1.htm"
  }
]
