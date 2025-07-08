qobjects = [
  {
    question: "What is the output of the following code?<br><code class='codeblock'>for (int i = 1; i <= 2; i++) {<br>&nbsp;&nbsp;for (int j = 1; j <= 3; j++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.print(i + &quot;,&quot; + j + &quot; &quot;);<br>&nbsp;&nbsp;}<br>}</code>",
    options: [
      "1,2 2,1 1,2 2,1 2,1 1,2",
      "1,1 1,2 1,3 2,1 2,2 2,3",
      "1,1 2,2 3,3 2,2 1,1",
      "Error"
    ],
    correct: 1
  },
  {
    question: "What does a &quot;Nested Loop&quot; mean?",
    options: [
      "It occurs when passing a smaller size type to a larger size type", 
      "A loop that does not allow if else statements",
      "A loop placed inside another loop",
      "It is a built-in Java class that contains useful members" 
    ],
    correct: 2
  },
  {
    question: "True or False:<br>Regarding nested loops, the &quot;inner loop&quot; will be executed one time for each iteration of the &quot;outer loop&quot;.",
    options: [
      "True", 
      "False",
    ],
    correct: 0
  }
]