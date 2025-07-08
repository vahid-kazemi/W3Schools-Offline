qobjects = [
  {
    draganddroptext: "<code>class Animal<br>{<br>&nbsp;&nbsp;public ___ void animalSound()<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(\"The animal makes a sound\");<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to allow derived classes to override this method.",
    options: ["extends", "virtual", "override", "static", "sealed"],
    correct: [1]
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>class Animal<br>{<br>&nbsp;&nbsp;public virtual void animalSound()<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(\"The animal makes a sound\");<br>&nbsp;&nbsp;}<br>}<br><br>class Pig : Animal<br>{<br>&nbsp;&nbsp;public override void animalSound()<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(\"The pig says: wee wee\");<br>&nbsp;&nbsp;}<br>}<br><br>class Program<br>{<br>&nbsp;&nbsp;static void Main(string[] args)<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Animal myPig = new Pig();<br>&nbsp;&nbsp;&nbsp;&nbsp;myPig.animalSound();<br>&nbsp;&nbsp;}<br>}</code>",
    options: [
      "The animal makes a sound",
      "The pig says: wee wee",
      "Error: Method cannot be overridden",
      "Null"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>class Pig : Animal<br>{<br>&nbsp;&nbsp;public ___ void animalSound()<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(\"The pig says: wee wee\");<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to properly override the base class method.",
    options: ["extends", "inherit", "override", "virtual", "sealed", "static"],
    correct: [2]
  },
  {
    question: "What is required in a base class method to allow derived classes to override it?",
    options: [
      "It must be marked with <code>static</code>.",
      "It must be marked with <code>virtual</code>.",
      "It must be marked with <code>sealed</code>.",
      "It must have the same name as the class."
    ],
    correct: 1
  },
  {
    question: "Which keyword is required in the derived class method when overriding a base class method?",
    options: [
      "virtual",
      "sealed",
      "private",
      "override"
    ],
    correct: 3
  }
]
