qobjects = [
  {
    question: "How can methods be defined in a C++ class?",
    options: [
      "Only inside the class definition",
      "Only outside the class definition",
      "Inside or outside the class definition",
      "Only in the main function"
    ],
    correct: 2
  },
  {
    question: "Consider the following code. What will be the output?<br><code class='codeblock'>class MyClass {<br>&nbsp;&nbsp;public:<br>&nbsp;&nbsp;&nbsp;&nbsp;void myMethod() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; \"Hello World!\";<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>};<br><br>int main() {<br>&nbsp;&nbsp;MyClass myObj;<br>&nbsp;&nbsp;myObj.myMethod();<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "Hello World!",
      "Error: myMethod() not defined",
      "No output",
      "Hello"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_classes5.htm"
  },
  {
    question: "How is a method defined outside a class in C++?",
    options: [
      "Using the :: operator with the class name",
      "Directly by declaring inside the class",
      "With the '.' operator and method name",
      "By writing the method definition in main()"
    ],
    correct: 0
  },
  {
    question: "How would you call a method with parameters? Consider the following code:<br><code class='codeblock'>class Car {<br>&nbsp;&nbsp;public:<br>&nbsp;&nbsp;&nbsp;&nbsp;int speed(int maxSpeed);<br>};<br><br>int Car::speed(int maxSpeed) {<br>&nbsp;&nbsp;return maxSpeed;<br>}<br><br>int main() {<br>&nbsp;&nbsp;Car myObj;<br>&nbsp;&nbsp;cout &lt;&lt; // insert code here <br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "myObj.speed();",
      "myObj.speed(200);",
      "Car::speed(200);",
      "speed(200);"
    ],
    correct: 1
  }
]