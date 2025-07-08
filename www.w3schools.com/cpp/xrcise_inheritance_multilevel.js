qobjects = [
  {
    question: "What is multilevel inheritance in C++?",
    options: [
      "A class inheriting from multiple classes",
      "A class that is derived from another derived class",
      "A way to create private members",
      "A method of accessing private data"
    ],
    correct: 1
  },
  {
    question: "Consider the following code. What will be the output?<br><code class='codeblock'>class MyClass {<br>&nbsp;&nbsp;public:<br>&nbsp;&nbsp;&nbsp;&nbsp;void myFunction() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; \"Some content in parent class.\";<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>};<br><br>class MyChild : public MyClass {};<br><br>class MyGrandChild : public MyChild {};<br><br>int main() {<br>&nbsp;&nbsp;MyGrandChild myObj;<br>&nbsp;&nbsp;myObj.myFunction();<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "Some content in parent class.",
      "Error: myFunction() not accessible",
      "Some content in child class.",
      "No output"
    ],
    correct: 0
  },
  {
    question: "Which of the following is an example of multilevel inheritance?",
    options: [
      "A class inheriting directly from another base class",
      "A class inheriting from a class that is itself derived from another class",
      "A class containing multiple unrelated classes",
      "A class with both public and private members"
    ],
    correct: 1
  },
  {
    question: "What are the benefits of multilevel inheritance?",
    options: [
      "Code reusability and access to methods from multiple levels",
      "Faster code execution",
      "Automatic memory management",
      "Limited access to class members"
    ],
    correct: 0
  }
]
