qobjects = [
  {
    question: "What does the <code class='w3-codespan'>realloc</code> function do?",
    options: [
      "Allocates new memory without keeping existing data",
      "Increases the size of allocated memory while keeping data",
      "Clears all data in memory",
      "Returns the memory address of a variable"
    ],
    correct: 1
  },
  {
    question: "What will be the output of this code if the reallocation fails?<br><code class='codeblock'>int *ptr1, *ptr2;<br>ptr1 = malloc(4);<br>ptr2 = realloc(ptr1, 8);<br>if (ptr2 == NULL) {<br>&nbsp;&nbsp;printf(\"Failed. Unable to resize memory\");<br>} else {<br>&nbsp;&nbsp;printf(\"Success\");<br>}</code>",
    options: [
      "Success",
      "Failed. Unable to resize memory",
      "Segmentation fault",
      "Reallocation complete"
    ],
    correct: 1
  },
  {
    question: "Which function is used to release allocated memory once it is no longer needed?",
    options: [
      "realloc",
      "free",
      "malloc",
      "sizeof"
    ],
    correct: 1
  }
]
