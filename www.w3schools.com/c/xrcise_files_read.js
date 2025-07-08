qobjects = [
  {
    question: "Which mode should you use to open a file for reading in C?",
    options: [
      "<code class='w3-codespan'>'r'</code>",
      "<code class='w3-codespan'>'w'</code>",
      "<code class='w3-codespan'>'a'</code>",
      "<code class='w3-codespan'>'rw'</code>"
    ],
    correct: 0
  },
  {
    question: "Which function is used to read a line from a file in C?",
    options: [
      "<code class='w3-codespan'>fgets()</code>",
      "<code class='w3-codespan'>fscanf()</code>",
      "<code class='w3-codespan'>fread()</code>",
      "<code class='w3-codespan'>fopen()</code>"
    ],
    correct: 0
  },
  {
    question: "What does <code class='w3-codespan'>fgets()</code> return when it reaches the end of a file?",
    options: [
      "It returns an empty string",
      "It returns <code class='w3-codespan'>NULL</code>",
      "It returns the last character in the file",
      "It causes an error"
    ],
    correct: 1
  },
  {
    question: "What will happen if you try to open a non-existent file in read mode?",
    options: [
      "The program will crash",
      "The <code class='w3-codespan'>fopen()</code> function will return <code class='w3-codespan'>NULL</code>",
      "The program will create a new file",
      "The program will display an error message automatically"
    ],
    correct: 1
  },
  {
    question: "What is the correct way to check if a file exists before reading it?",
    options: [
      "<code class='w3-codespan'>if (fptr == NULL)</code>",
      "<code class='w3-codespan'>if (fptr == 0)</code>",
      "<code class='w3-codespan'>if (fptr == false)</code>",
      "<code class='w3-codespan'>if (fptr != 1)</code>"
    ],
    correct: 0
  }
]
