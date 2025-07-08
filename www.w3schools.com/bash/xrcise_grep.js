qobjects = [
  {
    question: "Write the command to search for the term <code>error</code> in the file <code>log.txt</code>.",
    options: [
      "grep 'error' log.txt",
      "searchtext 'error' log.txt",
      "phrase 'error' log.txt"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>___ 'warning' log.txt</code>",
    draganddropquestion: "Provide the command to search for the term <code>warning</code> in <code>log.txt</code>, ignoring case differences.",
    options: ["rename", "mv", "grep -i"],
    correct: [2]
  },
  {
   fillintheblanks: "exercise_grep1.htm"
  }
];
