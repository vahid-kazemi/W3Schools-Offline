qobjects = [
  {
    question: "Which function can be used to write content to a file in C?",
    options: [
      "<code class='w3-codespan'>fprintf()</code>",
      "<code class='w3-codespan'>fscanf()</code>",
      "<code class='w3-codespan'>fwrite()</code>"
    ],
    correct: 0
  },
  {
    question: "What happens to existing content when a file is opened in <code class='w3-codespan'>'w'</code> mode?",
    options: [
      "Existing content is preserved and new content is added at the beginning",
      "Existing content is deleted and replaced with new content",
      "An error occurs if the file has content",
      "Existing content is preserved, and new content is added at the end"
    ],
    correct: 1
  },
  {
    question: "Which mode should you use to add content to the end of a file without deleting existing content?",
    options: [
      "<code class='w3-codespan'>'w'</code>",
      "<code class='w3-codespan'>'a'</code>",
      "<code class='w3-codespan'>'r'</code>",
      "<code class='w3-codespan'>'x'</code>"
    ],
    correct: 1
  },
  {
    question: "If a file does not exist, what happens when opening it in <code class='w3-codespan'>'a'</code> mode?",
    options: [
      "The program returns an error",
      "The file is created and new content is added",
      "The file remains closed",
      "The program skips writing to the file"
    ],
    correct: 1
  },
  {
    question: "What is the correct way to open a file in append mode?",
    options: [
      "<code class='w3-codespan'>fopen(\"filename.txt\", \"a\")</code>",
      "<code class='w3-codespan'>fopen(\"filename.txt\", \"w+\")</code>",
      "<code class='w3-codespan'>fopen(\"filename.txt\", \"r+\")</code>",
      "<code class='w3-codespan'>fopen(\"filename.txt\", \"aw\")</code>"
    ],
    correct: 0
  },
  {
    question: "What would the following code output if <code class='w3-codespan'>filename.txt</code> initially contains 'Hello' and <code class='w3-codespan'>a</code> mode is used?<br><code class='codeblock'>FILE *fptr;<br>fptr = fopen(\"filename.txt\", \"a\");<br>fprintf(fptr, \" World!\");<br>fclose(fptr);</code>",
    options: [
      "Hello World!",
      "World! Hello",
      "World!",
      "Hello"
    ],
    correct: 0
  }
]
