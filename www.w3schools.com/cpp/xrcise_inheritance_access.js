qobjects = [
  {
    question: "What is the purpose of the protected access specifier in C++?",
    options: [
      "To allow access from outside the class",
      "To allow access only within the class",
      "To allow access within the class and in derived classes",
      "To create a private copy of class attributes"
    ],
    correct: 2
  },
  {
    question: "True or False:<br>Protected members of a class can be accessed directly from outside the class.",
    options: [
      "True",
      "False"
    ],
    correct: 1
  },
  {
    question: "In the following code, which class is allowed to access the 'salary' attribute?<br><code class='codeblock'>class Employee {<br>&nbsp;&nbsp;protected:<br>&nbsp;&nbsp;&nbsp;&nbsp;int salary;<br>};<br><br>class Manager : public Employee {<br>&nbsp;&nbsp;public:<br>&nbsp;&nbsp;&nbsp;&nbsp;void setSalary(int s) { salary = s; }<br>};</code>",
    options: [
      "Only the Employee class",
      "Only the Manager class",
      "Both Employee and Manager classes",
      "Neither class"
    ],
    correct: 2
  }
]
