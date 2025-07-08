qobjects = [
  {
    question: "What does the <code class='w3-codespan'>sizeof()</code> operator return when used on an array?",
    options: [
      "The number of elements in the array",
      "The size of the array in bytes",
      "The last element of the array",
      "The sum of all elements in the array"
    ],
    correct: 1
  },
  {
    question: "True or False:<br>To find the number of elements in an array, you can divide the array's size by the size of one element.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "What will be the result of this code?<br><code class='codeblock'>int numbers[4] = {1, 2, 3, 4};<br>cout &lt;&lt; sizeof(numbers);</code>",
    options: [
      "16 (if <code class='w3-codespan'>int</code> is 4 bytes)",
      "4",
      "1",
      "Error"
    ],
    correct: 0
  },
  {
    question: "Which approach is more flexible for looping through an array of any size?",
    options: [
      "Using <code class='w3-codespan'>sizeof(array) / sizeof(array[0])</code> in the loop condition",
      "Using a fixed number in the loop condition",
      "Looping backwards",
      "Guessing the size"
    ],
    correct: 0
  },
  {
    question: "Which approach is even more flexible and cleaner for looping through arrays?",
    options: [
      "Using a fixed number in the loop condition",
      "Looping backwards",
      "Using the 'for-each loop'",
      "Guessing the size"
    ],
    correct: 2
  }
]
