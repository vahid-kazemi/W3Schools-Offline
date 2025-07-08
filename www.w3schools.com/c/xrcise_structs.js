qobjects = [
  {
    question: "What is a structure (struct) in C?",
    options: [
      "A way to store multiple values of the same data type",
      "A way to store multiple values of different data types",
      "A way to store a sequence of characters",
      "A way to store memory addresses of variables"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_structs1.htm"
  },
  {
    question: "How do you access a member of a structure in C?",
    options: [
      "Using the + operator",
      "Using the dot (.) operator",
      "Using square brackets []",
      "Using parentheses ()"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_structs2.htm"
  },
  {
    fillintheblanks: "exercise_structs3.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>struct myStructure { <br>&nbsp;&nbsp;int myNum;<br>&nbsp;&nbsp;char myLetter;<br>};<br><br>int main() {<br>&nbsp;&nbsp;struct myStructure s1 = {13, 'A'};<br>&nbsp;&nbsp;printf(\"%d %c\", s1.myNum, s1.myLetter);<br>&nbsp;&nbsp;return 0;<br>}</code>",    options: [
      "13 A",
      "13 65",
      "A 13",
      "Error"
    ],
    correct: 0
  },
  {
    question: "Which function should you use to assign a string to a char array in a structure?",
    options: [
      "<code class='w3-codespan'>strcat()</code>",
      "<code class='w3-codespan'>strcpy()</code>",
      "<code class='w3-codespan'>sprintf()</code>",
      "<code class='w3-codespan'>strstr()</code>"
    ],
    correct: 1
  },
  {
    question: "What will be the output of this code?<br><code class='codeblock'>struct Car { <br>&nbsp;&nbsp;char brand[10];<br>&nbsp;&nbsp;int year;<br>};<br><br>int main() {<br>&nbsp;&nbsp;struct Car c1 = {\"Toyota\", 2020};<br>&nbsp;&nbsp;struct Car c2;<br>&nbsp;&nbsp;c2 = c1;<br>&nbsp;&nbsp;c2.year = 2021;<br>&nbsp;&nbsp;printf(\"%s %d\", c1.brand, c1.year);<br>}</code>",    options: [
      "Toyota 2021",
      "Toyota 2020",
      "Toyota",
      "Error"
    ],
    correct: 1
  }
]
