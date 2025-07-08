qobjects = [
  {
    question: "What is the primary characteristic of a map in C++?",
    options: [
      "Stores elements in key/value pairs with unique keys",
      "Stores elements in a random order",
      "Allows duplicate keys",
      "Accesses elements by index"
    ],
    correct: 0
  },
  {
    question: "How would you create a map called 'people' to store string keys and integer values?",
    options: [
      "map people&lt;string, int&gt;;",
      "string map people;",
      "map&lt;string, int&gt; people;",
      "people&lt;map&gt; string;"
    ],
    correct: 2
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>map&lt;string, int&gt; people = { {\"John\", 32}, {\"Adele\", 45}, {\"Bo\", 29} };<br>cout &lt;&lt; people[\"John\"];</code>",
    options: [
      "32",
      "45",
      "29",
      "Error: cannot access elements by key"
    ],
    correct: 0
  },
  {
    question: "True or False:<br>A map can store multiple elements with the same key.",
    options: [
      "True",
      "False"
    ],
    correct: 1
  },
  {
    question: "Which function is used to add a new element to a map?",
    options: [
      "add()",
      "insert()",
      "append()",
      "push()"
    ],
    correct: 1
  },
  {
    question: "How can you remove an element from a map by its key?",
    options: [
      "pop()",
      "remove()",
      "erase()",
      "delete()"
    ],
    correct: 2
  },
  {
    question: "What will happen if you try to insert two elements with the same key into a map?",
    options: [
      "Both elements will be added",
      "Only the first element will be kept",
      "Only the second element will be kept",
      "An error will be thrown"
    ],
    correct: 1
  }
]
