qobjects = [
  {
    question: "To access an inner class, you can:",
    options: [
      "Create an object of the outer class, and then create an object of the inner class", 
      "Create a class, and specify the inner keyword", 
      "Create a class, and specify the friend keyword",
    ],
    correct: 0
  },
  {
    question: "If you don't want outside objects to access the inner class, declare the class as:",
    options: [
      "public", 
      "protect", 
      "abstract", 
      "private", 
    ],
    correct: 3
  },
  {
    question: "True or False:<br>If you try to access a private inner class from an outside class, an error occurs.",
    options: [
      "True", 
      "False"
    ],
    correct: 0
  },
  {
    question: "What is the output of the following code?<br><code class='codeblock'>class OuterClass {<br>&nbsp;&nbsp;int x = 10;<br><br>&nbsp;&nbsp;class InnerClass {<br>&nbsp;&nbsp;&nbsp;&nbsp;int y = 5;<br>&nbsp;&nbsp;}<br>}<br><br>public class Main {<br>&nbsp;&nbsp;public static void main(String[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;OuterClass myOuter = new OuterClass();<br>&nbsp;&nbsp;&nbsp;&nbsp;OuterClass.InnerClass myInner = myOuter.new InnerClass();<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(myInner.y + myOuter.x);<br>&nbsp;&nbsp;}<br>}</code>",
    options: [
      "10", 
      "15", 
      "510", 
      "5"
    ],
    correct: 1
  }
]