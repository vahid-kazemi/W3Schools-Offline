qobjects = [
  {
    question: "What is multiple inheritance in C++?",
    options: [
      "A class that inherits from a single base class",
      "A class that inherits from more than one base class",
      "A method for accessing private data",
      "A way to encapsulate data in classes"
    ],
    correct: 1
  },
  {
    question: "How do you specify multiple inheritance in C++?",
    options: [
      "Using a comma-separated list of base classes",
      "Using the '&' symbol",
      "Using a semicolon-separated list of base classes",
      "By declaring each base class in a separate line"
    ],
    correct: 0
  },
  {
    question: "True or False:<br>In multiple inheritance, a derived class can inherit methods from more than one base class.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "In the following code, what will the line <code>myObj.myOtherFunction();</code> output?<br><code class='codeblock'>class MyOtherClass {<br>&nbsp;&nbsp;public:<br>&nbsp;&nbsp;&nbsp;&nbsp;void myOtherFunction() { cout &lt;&lt; \"Other content.\"; }<br>};<br><br>class MyChildClass : public MyOtherClass {};<br><br>int main() {<br>&nbsp;&nbsp;MyChildClass myObj;<br>&nbsp;&nbsp;myObj.myOtherFunction();<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "Other content.",
      "No output",
      "Error: myOtherFunction() not accessible",
      "Other function content"
    ],
    correct: 0
  }
]
