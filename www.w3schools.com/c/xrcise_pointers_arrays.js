qobjects = [
  {
    question: "How would you access the third element in <code class='w3-codespan'>myNumbers</code> using pointers?<br><code class='codeblock'>int myNumbers[4] = {25, 50, 75, 100};</code>",
    options: [
      "<code class='w3-codespan'>myNumbers[3]</code>",
      "<code class='w3-codespan'>*myNumbers + 3</code>",
      "<code class='w3-codespan'>*(myNumbers + 2)</code>",
      "<code class='w3-codespan'>myNumbers[2]</code>"
    ],
    correct: 2
  },
  {
    question: "Which of the following will print the memory address of the first element in <code class='w3-codespan'>myNumbers</code>?<br><code class='codeblock'>int myNumbers[4] = {25, 50, 75, 100};</code>",
    options: [
      "<code class='w3-codespan'>printf(\"%p\", myNumbers);</code>",
      "<code class='w3-codespan'>printf(\"%d\", *myNumbers);</code>",
      "<code class='w3-codespan'>printf(\"%p\", myNumbers[1]);</code>",
      "<code class='w3-codespan'>printf(\"%d\", myNumbers);</code>"
    ],
    correct: 0
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>int myNumbers[4] = {25, 50, 75, 100};<br>int *ptr = myNumbers;<br>printf(\"%d\", *(ptr + 1));</code>",
    options: [
      "25",
      "50",
      "75",
      "100"
    ],
    correct: 1
  },
  {
    question: "How many bytes of memory does the array <code class='w3-codespan'>myNumbers</code> occupy, assuming each <code class='w3-codespan'>int</code> is 4 bytes?<br><code class='codeblock'>int myNumbers[4] = {25, 50, 75, 100};</code>",
    options: [
      "4",
      "8",
      "12",
      "16"
    ],
    correct: 3
  },
  {
    question: "What will the following code output after modifying the array with pointers?<br><code class='codeblock'>int myNumbers[4] = {25, 50, 75, 100};<br>*myNumbers = 13;<br>*(myNumbers + 1) = 17;<br>printf(\"%d, %d\", myNumbers[0], myNumbers[1]);</code>",
    options: [
      "25, 50",
      "13, 50",
      "13, 17",
      "50, 100"
    ],
    correct: 2
  }
]
