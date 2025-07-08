qobjects = [
  {
    question: "What does the single comma (<code class='w3-codespan'>[,]</code>) in the array declaration specify in C#?",
    options: [
      "That the array is one-dimensional.",
      "That the array is two-dimensional.",
      "That the array is three-dimensional.",
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>int[,] numbers = { {1, 4, 2}, {3, 6, 8} };<br>Console.WriteLine(numbers[___, ___]);</code>",
    draganddropquestion: "Drag and drop the correct index to access the third element in the first row of the array.",
    options: ["0", "1", "2", "3", "4"],
    correct: [0, 2]
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>int[,] numbers = { {1, 4, 2}, {3, 6, 8} };<br>Console.WriteLine(numbers[1, 2]);</code>",
    options: [
      "8",
      "6",
      "2",
      "3"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>int[,] numbers = { {1, 4, 2}, {3, 6, 8} };<br>numbers[0, ___] = 4;<br>Console.WriteLine(numbers[0, 0]);</code>",
    draganddropquestion: "Drag and drop the correct values to change the value of the element in the first row and first column.",
    options: ["0", "1", "2", "3"],
    correct: [0]
  },
  {
    question: "What method is used to get the number of elements in a specific dimension of a multidimensional array?",
    options: [
      "Length()",
      "DimensionLength()",
      "Size()",
      "GetLength()"
    ],
    correct: 3
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>int[,] numbers = { {1, 4, 2}, {3, 6, 8} };<br>foreach (int i in numbers)<br>{<br>&nbsp;&nbsp;Console.WriteLine(i);<br>}</code>",
    options: [
      "1 2 3 4 6 8",
      "1 3 4 6 2 8",
      "1 3 2 4 8 6",
      "1 4 2 3 6 8"
    ],
    correct: 3
  }
]
