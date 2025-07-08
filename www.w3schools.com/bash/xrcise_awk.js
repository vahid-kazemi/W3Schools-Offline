qobjects = [
  {
    question: "What is the correct command to print the second column of the file <code>data.txt</code>.",
    options: [
      "<code>awk '{print $2}' data.txt</code>",
      "<code>awk '{print $1}' data.txt</code>",
      "<code>awk '{print $3}' data.txt</code>",
      "<code>awk '{print $4}' data.txt</code>"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_awk1.htm"
  },
  {
    draganddroptext: "<code>awk ___ '{print $1}' /etc/passwd</code>",
    draganddropquestion: "Provide the command to print the first field of <code>passwd</code> file using <code>:</code> as the field separator.",
    options: ["F:::", "field1", "-F':'"],
    correct: [2]
  }
]
