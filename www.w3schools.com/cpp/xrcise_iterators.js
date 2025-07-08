qobjects = [
  {
    question: "What will the following code output?<br><code class='codeblock'>vector&lt;string&gt; cars = {\"Volvo\", \"BMW\", \"Ford\"};<br>for (auto it = cars.begin(); it != cars.end(); ++it) {<br>&nbsp;&nbsp;cout &lt;&lt; *it &lt;&lt; &quot; &quot;;<br>}</code>",
    options: [
      "Volvo\nBMW\nFord",
      "BMW\nFord\nVolvo",
      "Ford\nBMW\nVolvo",
      "Random order"
    ],
    correct: 0
  },
  {
    question: "Which header file is commonly needed for iterator-related algorithms like sort()?",
    options: [
      "&lt;algorithm&gt;",
      "&lt;algo_lib&gt;",
      "&lt;iostreams&gt;",
      "&lt;algorith_stream&gt;",
      "&lt;vector&gt;"
    ],
    correct: 0
  },
  {
    question: "True or False:<br>You can use iterators to modify elements in a vector during iteration.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "Which keyword allows the compiler to automatically determine the data type of an iterator in C++11 and later versions?",
    options: [
      "var",
      "type",
      "auto",
      "it"
    ],
    correct: 2
  }
]
