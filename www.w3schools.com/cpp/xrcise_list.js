qobjects = [
  {
    question: "What is a major difference between a list and a vector in C++?",
    options: [
      "A list allows random access while a vector does not",
      "A list cannot change in size, while a vector can",
      "Elements can be added or removed from both ends of a list, but a vector is optimized for adding/removing at the end",
      "A list can store multiple data types, while a vector cannot"
    ],
    correct: 2
  },
  {
    question: "How would you create a list called <code class='w3-coedspan'>cars</code> to store strings?",
    options: [
      "list cars&lt;string&gt;;",
      "string list cars;",
      "list&lt;string&gt; cars;",
      "cars&lt;list&gt; string;"
    ],
    correct: 2
  },
  {
    question: "Which function retrieves the first element of a list?",
    options: [
      "front()",
      "back()",
      "at(0)",
      "begin()"
    ],
    correct: 0
  },
  {
    question: "Consider the following code. What does it do?<br><code class='codeblock'>cars.push_back(\"Tesla\");</code>",
    options: [
      "Adds an element to the beginning of the list",
      "Removes the last element of the list",
      "Adds an element to the end of the list",
      "Clears all elements from the list"
    ],
    correct: 2
  },
  {
    question: "Which function would you use to remove the first element of a list?",
    options: [
      "pop_front()",
      "pop_back()",
      "remove()",
      "erase()"
    ],
    correct: 0
  },
  {
    question: "True or False:<br>You can access elements in a list by index, just like in a vector.",
    options: [
      "True",
      "False"
    ],
    correct: 1
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>list<string> cars = {\"Volvo\", \"BMW\", \"Ford\"};<br>cars.push_front(\"Tesla\");<br>cout &lt;&lt; cars.front();</code>",
    options: [
      "Volvo",
      "BMW",
      "Ford",
      "Tesla"
    ],
    correct: 3
  }
]
