qobjects = [
  {
    question: "What does the <code class='w3-codespan'>free()</code> function do?",
    options: [
      "Allocates dynamic memory",
      "Releases allocated memory",
      "Reserves static memory",
      "Increases memory size"
    ],
    correct: 1
  },
  {
    question: "Why is it considered good practice to set a pointer to <code class='w3-codespan'>NULL</code> after freeing it?",
    options: [
      "To allocate more memory",
      "To prevent accidentally using freed memory",
      "To reallocate memory",
      "To reset the memory size"
    ],
    correct: 1
  },
  {
    question: "What is a memory leak?",
    options: [
      "When memory is deallocated before it is used",
      "When memory is allocated but never freed",
      "When memory is accessed after it is freed",
      "When memory is reallocated frequently"
    ],
    correct: 1
  },
  {
    question: "Which line of code is a risk for memory leaks?<br><code class='codeblock'>int *ptr;<br>ptr = malloc(4);<br>ptr = realloc(ptr, 8);</code>",
    options: [
      "<code>ptr = malloc(4);</code>",
      "<code>ptr = realloc(ptr, 8);</code>",
      "<code>int *ptr;</code>",
      "No line poses a risk"
    ],
    correct: 1
  },
  {
    question: "What is a cause of memory leaks?",
    options: [
      "Setting a pointer to NULL",
      "Reallocating memory without freeing it first",
      "Freeing memory when it is no longer needed",
      "Using dynamic memory with pointers"
    ],
    correct: 1
  }
]
