qobjects = [
  {
    question: "What does the sort() function do?",
    options: [
      "Sorts elements in ascending order by default",
      "Sorts elements in descending order by default",
      "Searches for a specific element",
      "Reverses the order of elements"
    ],
    correct: 0
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>vector&lt;int&gt; numbers = {1, 7, 3, 5, 9, 2};<br>sort(numbers.begin(), numbers.end());<br>for (int num : numbers) { cout &lt;&lt; num &lt;&lt; &quot; &quot;; }</code>",
    options: [
      "1\n3\n5\n7\n9\n2",
      "9\n7\n5\n3\n2\n1",
      "1\n2\n3\n5\n7\n9",
      "Random order"
    ],
    correct: 2
  },
  {
    question: "Which function would you use to sort elements in reverse order?",
    options: [
      "sort() with rbegin() and rend()",
      "reverse_sort()",
      "find()",
      "max_element()"
    ],
    correct: 0
  },
  {
    question: "Which function is used to search for a specific element in a data structure?",
    options: [
      "sort()",
      "min_element()",
      "find()",
      "fill()"
    ],
    correct: 2
  },
  {
    question: "Which function would you use to find the smallest element in a vector?",
    options: [
      "sort()",
      "min_element()",
      "max_element()",
      "fill()"
    ],
    correct: 1
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>vector&lt;int&gt; numbers = {1, 7, 3, 5, 9, 2};<br>auto it = max_element(numbers.begin(), numbers.end());<br>cout &lt;&lt; *it;</code>",
    options: [
      "1",
      "7",
      "9",
      "2"
    ],
    correct: 2
  },
  {
    question: "Which function is used to fill all elements in a vector with a specific value?",
    options: [
      "copy()",
      "find()",
      "fill()",
      "upper_bound()"
    ],
    correct: 2
  }
]
