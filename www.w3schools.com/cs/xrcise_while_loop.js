qobjects = [
  {
    draganddroptext: "<code>int i = 0;<br>___ (i < 3)<br>{<br>&nbsp;&nbsp;Console.WriteLine(i);<br>&nbsp;&nbsp;i++;<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to complete the loop.",
    options: ["loop", "do", "for", "while", "if"],
    correct: [3]
  },
  {
    fillintheblanks: "exercise_while_loop1.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>int i = 0;<br>while (i < 3)<br>{<br>&nbsp;&nbsp;Console.WriteLine(i);<br>&nbsp;&nbsp;i++;<br>}</code>",
    options: [
      "0 1 2",
      "0 1 2 3",
      "1 2 3",
      "Nothing"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>int i = 0;<br>___<br>{<br>&nbsp;&nbsp;Console.WriteLine(i);<br>&nbsp;&nbsp;i++;<br>}<br>___ (i < 5);</code>",
    draganddropquestion: "Drag and drop the correct keywords to complete the <code class='w3-codespan'>do/while</code> loop.",
    options: ["do", "while", "for", "if"],
    correct: [0, 1]
  },
  {
    question: "What is the main difference between a <code class='w3-codespan'>while</code> loop and a <code class='w3-codespan'>do/while</code> loop in C#?",
    options: [
      "The while loop always executes at least once, while the do/while loop might not execute at all.",
      "The do/while loop always executes at least once, while the while loop might not execute at all.",
      "There is no difference; they are the same.",
      "The do/while loop executes faster than the while loop."
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_while_loop2.htm"
  },
  {
    question: "What happens if you forget to increase the variable used in the condition of a <code class='w3-codespan'>while</code> or <code class='w3-codespan'>do/while</code> loop?",
    options: [
      "The loop will execute only once.",
      "The loop will terminate immediately.",
      "The loop will become an infinite loop.",
      "The program will throw a syntax error."
    ],
    correct: 2
  }
]
