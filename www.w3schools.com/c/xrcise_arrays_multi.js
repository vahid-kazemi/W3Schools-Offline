qobjects = [
  {
    question: "What does the following declaration represent?<br><code class='codeblock'>int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };</code>",
    options: [
      "A 1-dimensional array of 5 elements",
      "A 2-dimensional array with 2 rows and 3 columns",
      "A 3-dimensional array with 2 rows and 3 columns",
      "A 1-dimensional array with 6 elements"
    ],
    correct: 1
  },
  {
    question: "How would you access the element in the second row and first column of this array?<br><code class='codeblock'>int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };</code>",
    options: [
      "<code class='w3-codespan'>matrix[1][0]</code>",
      "<code class='w3-codespan'>matrix[2][0]</code>",
      "<code class='w3-codespan'>matrix[0][1]</code>",
      "<code class='w3-codespan'>matrix[1][1]</code>"
    ],
    correct: 0
  },
  {
    question: "What would the following code output?<br><code class='codeblock'>int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };<br>printf(\"%d\", matrix[0][2]);</code>",
    options: [
      "4",
      "6",
      "2",
      "3"
    ],
    correct: 2
  },
  {
    question: "Which of the following statements will change the first element in the second row of <code class='w3-codespan'>matrix</code> to 7?<br><code class='codeblock'>int matrix[2][3] = { {1, 4, 2}, {3, 6, 8} };</code>",
    options: [
      "<code class='w3-codespan'>matrix[0][1] = 7;</code>",
      "<code class='w3-codespan'>matrix[1][0] = 7;</code>",
      "<code class='w3-codespan'>matrix[2][0] = 7;</code>",
      "<code class='w3-codespan'>matrix[1][1] = 7;</code>"
    ],
    correct: 1
  },
  {
    question: "To print all elements in a 2D array, what is required?",
    options: [
      "Only one for loop",
      "A nested loop with one for loop for each dimension",
      "Two separate for loops for each dimension",
      "A single printf statement"
    ],
    correct: 1
  }
]
