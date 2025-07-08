qobjects = [
  {
    question: "What is the role of access specifiers in C++?",
    options: [
      "To create instances of a class",
      "To initialize variables",
      "To define how class members can be accessed",
      "To define the main function"
    ],
    correct: 2
  },
  {
    question: "Which of the following is a public access specifier in C++?",
    options: [
      "external",
      "public",
      "global",
      "open"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_classes3.htm"
  },
  {
    question: "Consider the following code. Which line will cause an error?<br><code class='codeblock'>class MyClass {<br>&nbsp;&nbsp;public:<br>&nbsp;&nbsp;&nbsp;&nbsp;int x;<br>&nbsp;&nbsp;private:<br>&nbsp;&nbsp;&nbsp;&nbsp;int y;<br>};<br><br>int main() {<br>&nbsp;&nbsp;MyClass myObj;<br>&nbsp;&nbsp;myObj.x = 25;<br>&nbsp;&nbsp;myObj.y = 50;<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "myObj.x = 25;",
      "myObj.y = 50;",
      "int main() {",
      "No error"
    ],
    correct: 1
  },
  {
    question: "What does the 'private' access specifier do?",
    options: [
      "Allows members to be accessed only from outside the class",
      "Restricts members so they cannot be accessed from outside the class",
      "Allows members to be accessed only in inherited classes"
    ],
    correct: 1
  },
  {
    question: "True or False:<br>If no access specifier is provided, all members of a class are private by default.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "What will happen if you try to access a private member from outside the class?",
    options: [
      "It will print the value of the private member",
      "It will cause an error",
      "It will allow access in a read-only mode",
      "It will automatically change it to public"
    ],
    correct: 1
  },
  {
    question: "Which access specifier allows members to be accessible in inherited classes but not from outside the class?",
    options: [
      "public",
      "private",
      "protected",
      "internal"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_classes7.htm"
  }
]
