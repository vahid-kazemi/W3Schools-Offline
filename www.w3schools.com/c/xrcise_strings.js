qobjects = [
  {
    question: "What is the correct way to declare a string in C with the text 'Hello World'?",
    options: [
      "<code class='w3-codespan'>char greetings = \"Hello World\";</code>",
      "<code class='w3-codespan'>string greetings = \"Hello World\";</code>",
      "<code class='w3-codespan'>char greetings[] = \"Hello World\";</code>",
      "<code class='w3-codespan'>string greetings[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'};</code>"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_strings1.htm"
  },
  {
    fillintheblanks: "exercise_strings2.htm"
  },
  {
    fillintheblanks: "exercise_strings3.htm"
  },
  {
    question: "Given the following code, what will it print?<br><code class='codeblock'>char greetings[] = \"Hello\";<br>printf(\"%c\", greetings[0]);</code>",
    options: [
      "H",
      "e",
      "Hello",
      "h"
    ],
    correct: 0
  },
  {
    question: "What is the purpose of the <code class='w3-codespan'>\\0</code> character in C strings?",
    options: [
      "To mark the beginning of the string",
      "To separate each character in a string",
      "To indicate the end of the string",
      "To increase the length of the string by one"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_strings4.htm"
  },
  {
    question: "What will this code output?<br><code class='codeblock'>char greetings[] = {'H', 'e', 'l', 'l', 'o', '\\0'};<br>printf(\"%s\", greetings);</code>",
    options: [
      "H",
      "Hello",
      "Hello World",
      "H e l l o"
    ],
    correct: 1
  }
]
