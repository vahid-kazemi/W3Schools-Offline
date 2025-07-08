qobjects = [
  {
    question: "What does method overloading mean?",
    options: [
      "That multiple classes can have the same class name with different constructors", 
      "That multiple methods can have the same name with different parameters", 
      "That methods can use switch statements to overload conditions"
    ],
    correct: 1
  },
  {
    question: "True or False:<br>Multiple methods can have the same name as long as the number and type of parameters are different.",
    options: [
      "True",      
      "False"
    ],
    correct: 0
  },
  {
    question: "Is this an example of method overloading?<br><code class='codeblock'>static int plusMethod(int x, int y) {<br>&nbsp;&nbsp;return x + y;<br>}<br><br>static double plusMethod(double x, double y) {<br>&nbsp;&nbsp;return x + y;<br>}<br><br>public static void main(String[] args) {<br>&nbsp;&nbsp;int myNum1 = plusMethod(8, 5);<br>&nbsp;&nbsp;double myNum2 = plusMethod(4.3, 6.26);<br>&nbsp;&nbsp;System.out.println(&quot;int: &quot; + myNum1);<br>&nbsp;&nbsp;System.out.println(&quot;double: &quot; + myNum2);<br>}</code>",
    options: [
      "Yes", 
      "No"
    ],
    correct: 0
  }
]