qobjects = [
  {
    draganddroptext: '<code>___ old_report.txt new_report.txt</code>',
    draganddropquestion: "Provide the command to rename <code>old_report.txt</code> to <code>new_report.txt</code>.",
    options: ["rename", "mv", "write"],
    correct: [1]
  },
  {
    question: "How can <code>mv</code> be used to move <code>file.txt</code> to <code>/archive</code> and ask before overwriting?",
    options: [
      "mv file.txt /archive",
      "mv -prompt file.txt /archive",
      "mv -ask file.txt /archive",
      "mv -i file.txt /archive"
    ],
    correct: 3
  },
  {
    fillintheblanks: "exercise_mv1.htm"
  }
]
