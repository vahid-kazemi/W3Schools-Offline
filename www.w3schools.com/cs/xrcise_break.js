qobjects = [
  {
    draganddroptext: "<code>for (int i = 0; i < 10; i++)<br>{<br>&nbsp;&nbsp;if (i == 4)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;___;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;Console.WriteLine(i);<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to exit the loop when <code class='w3-codespan'>i == 4</code>.",
    options: ["break", "continue", "return", "stop"],
    correct: [0]
  },
  {
    fillintheblanks: "exercise_while_loop4.htm"
  },
  {
    fillintheblanks: "exercise_while_loop5.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>for (int i = 0; i < 10; i++)<br>{<br>&nbsp;&nbsp;if (i == 4)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;Console.WriteLine(i);<br>}</code>",
    options: [
      "0 1 2 3",
      "0 1 2 3 4",
      "0 1 2 3 5 6 7 8 9",
      "Nothing"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>for (int i = 0; i < 10; i++)<br>{<br>&nbsp;&nbsp;if (i == 4)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;___;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;Console.WriteLine(i);<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to skip the current iteration when <code class='w3-codespan'>i == 4</code>.",
    options: ["break", "return", "continue", "stop"],
    correct: [2]
  },
  {
    question: "What is the output of the following code?<br><code class='codeblock'>for (int i = 0; i < 10; i++)<br>{<br>&nbsp;&nbsp;if (i == 4)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;continue;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;Console.WriteLine(i);<br>}</code>",
    options: [
      "0 1 2 3 4 5 6 7 8 9",
      "0 1 2 3 5 6 7 8 9",
      "0 1 2 3",
      "Nothing"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of the <code class='w3-codespan'>break</code> statement in C#?",
    options: [
      "To skip the current iteration and move to the next.",
      "To stop the execution of a loop or switch statement.",
      "To pause the execution of a loop temporarily.",
      "To restart the execution of a loop."
    ],
    correct: 1
  },
  {
    question: "What happens when the <code class='w3-codespan'>continue</code> statement is executed in a loop?",
    options: [
      "It terminates the loop immediately.",
      "It pauses the loop temporarily.",
      "It skips the current iteration and continues with the next iteration.",
      "It restarts the loop from the beginning."
    ],
    correct: 2
  }
]
