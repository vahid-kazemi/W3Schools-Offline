qobjects = [
  {
    question: "How can <code>cp</code> be used to copy all <code>.jpg</code> files to the <code>images</code> directory?",
    options: [
      "<code>cp *.jpg images/</code>",
      "<code>cp -r images/</code>",
      "<code>cp -i images/</code>",
      "<code>cp -u images/</code>"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_cp1.htm"
  },
  {
    draganddroptext: "<code>___ folder1 folder2</code>",
    draganddropquestion: "Provide the command to copy a directory <code>folder1</code> to <code>folder2</code> including all its contents",
    options: ["cp -all", "copy -r", "cp -r"],
    correct: [2]
  }
]
