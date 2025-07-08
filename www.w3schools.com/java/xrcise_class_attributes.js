qobjects = [
  {
    question: "What is the output of the following code?<br><code class='codeblock'>int x = 15;<br><br>public static void main(String[] args) {<br>&nbsp;&nbsp;Main myObj = new Main();<br>&nbsp;&nbsp;System.out.println(myObj.x);<br>}</code>",
    options: [
      "Error", 
      "15",
      "5",
      "myObj",
      "x"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_classes3.htm"
  },
  {
    question: "What is the output of the following code?<br><code class='codeblock'>int x;<br><br>public static void main(String[] args) {<br>&nbsp;&nbsp;Main myObj = new Main();<br>&nbsp;&nbsp;myObj.x = 40;<br>&nbsp;&nbsp;System.out.println(myObj.x);<br>}</code>",
    options: [
      "Error", 
      "40",
      "myObj",
      "x"
    ],
    correct: 1
  },
  {
    question: "What is the output of the following code?<br><code class='codeblock'>final int x = 10;<br><br>public static void main(String[] args) {<br>&nbsp;&nbsp;Main myObj = new Main();<br>&nbsp;&nbsp;myObj.x = 25;<br>&nbsp;&nbsp;System.out.println(myObj.x);<br>}</code>",
    options: [
      "Error", 
      "10",
      "25",
      "35",
      "x"
    ],
    correct: 0
  }
]