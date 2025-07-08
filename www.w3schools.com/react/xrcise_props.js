qobjects = [
  {
    question: "Which one is a correct way of sending the value 'John' via the 'firstname' property to the Person component?",
    options: [
      "<code>root.render(&lt;Person firstname='John' />);</code>",
      "<code>root.render(&lt;Person props(firstname='John') />);</code>",
      "<code>root.render(Person(firstname='John'));</code>"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_props1.htm"
  },
  {
    question: "Which is a correct way of receiving, and using a prop named firstname, in a function class?",
    options: [
      "<code class='codeblock'>function Person(firstname) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return &lt;h2>My name is { firstname }!&lt;/h2>;<br>}</code>",
      "<code class='codeblock'>function Person(props) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return &lt;h2>My name is { props.firstname }!&lt;/h2>;<br>}</code>",
      "Both of the above is correct"
    ],
    correct: 1
  }
]