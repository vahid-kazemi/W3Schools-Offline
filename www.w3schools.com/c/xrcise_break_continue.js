qobjects = [
  {
    question: "What does the <code class='w3-codespan'>break</code> statement do in a loop?",
    options: [
      "Skips the current iteration and continues with the next",
      "Ends the entire loop",
      "Pauses the loop temporarily",
      "Restarts the loop from the beginning"
    ],
    correct: 1
  },
  {
    question: "What will be the output of this code?<br><code class='codeblock'>int i;<br>for (i = 0; i < 10; i++) {<br>&nbsp;&nbsp;if (i == 4) {<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;printf(\"%d \", i);<br>}</code>",
    options: [
      "0\n1\n2\n3\n4",
      "4",
      "0\n1\n2\n3",
      "0\n1\n2\n3\n5\n6\n7\n8\n9"
    ],
    correct: 2
  },
  {
    question: "What does the <code class='w3-codespan'>continue</code> statement do in a loop?",
    options: [
      "Ends the entire loop",
      "Skips the current iteration and continues with the next",
      "Pauses the loop temporarily",
      "Ends the current iteration and jumps out of the loop"
    ],
    correct: 1
  },
  {
    question: "What will be the output of this code?<br><code class='codeblock'>int i;<br>for (i = 0; i < 10; i++) {<br>&nbsp;&nbsp;if (i == 4) {<br>&nbsp;&nbsp;&nbsp;&nbsp;continue;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;printf(\"%d \", i);<br>}</code>",
    options: [
      "0\n1\n2\n3\n5\n6\n7\n8\n9",
      "0\n1\n2\n3\n4",
      "4\n5\n6\n7\n8\n9",
      "1\n2\n3\n4\n5"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_while_loop5.htm"
  }
]
