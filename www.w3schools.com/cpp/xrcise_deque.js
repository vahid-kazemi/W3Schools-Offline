qobjects = [
  {
    question: "What is a major difference between a deque and a queue in C++?",
    options: [
      "A deque allows elements to be added or removed from both ends, while a queue only allows this from one end",
      "A deque can hold multiple data types, while a queue cannot",
      "A queue allows access by index, while a deque does not"
    ],
    correct: 0
  },
  {
    question: "Which header file is needed to use deques in C++?",
    options: [
      "&lt;vector&gt;",
      "&lt;stack&gt;",
      "&lt;deque&gt;",
      "&lt;queue&gt;"
    ],
    correct: 2
  },
  {
    question: "Which function adds an element to the beginning of a deque?",
    options: [
      "push_front()",
      "push_back()",
      "insert()",
      "add_front()"
    ],
    correct: 0
  },
  {
    question: "Consider the following code. What will it output?<br><code class='codeblock'>deque<string> cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};<br>cout &lt;&lt; cars.front();</code>",
    options: [
      "Volvo",
      "BMW",
      "Ford",
      "Mazda"
    ],
    correct: 0
  },
  {
    question: "Which function removes the last element from a deque?",
    options: [
      "remove()",
      "pop_back()",
      "delete()",
      "erase()"
    ],
    correct: 1
  },
  {
    question: "True or False:<br>You can access elements in a deque by index, like with vectors.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "What will the following code output after adding and removing elements?<br><code class='codeblock'>deque&lt;string&gt; cars;<br>cars.push_back(\"Volvo\");<br>cars.push_back(\"BMW\");<br>cars.push_back(\"Ford\");<br>cars.pop_front();<br>cout &lt;&lt; cars.front();</code>",
    options: [
      "Volvo",
      "BMW",
      "Ford",
      "Mazda"
    ],
    correct: 1
  }
]
