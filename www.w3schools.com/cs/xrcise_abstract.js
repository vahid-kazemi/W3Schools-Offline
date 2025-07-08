qobjects = [
  {
    question: "What is the purpose of abstraction in C#?",
    options: [
      "To allow direct access to all class members.",
      "To hide certain details and show only the essential information.",
      "To prevent inheritance in a class.",
      "To make all methods static."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>abstract class Animal<br>{<br>&nbsp;&nbsp;public ___ void animalSound();<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to declare an abstract method.",
    options: ["abstract", "virtual", "override", "static"],
    correct: [0]
  },
  {
    question: "What happens if you try to create an object of an abstract class?",
    options: [
      "It compiles successfully.",
      "An error occurs: 'Cannot create an instance of the abstract class or interface'.",
      "It runs, but the object will be null.",
      "It will call the base class constructor only."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>class Pig : Animal<br>{<br>&nbsp;&nbsp;public ___ void animalSound()<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(\"The pig says: wee wee\");<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to properly override an abstract method.",
    options: ["override", "abstract", "virtual", "sealed"],
    correct: [0]
  },
  {
    question: "Which of the following is true about an abstract method?",
    options: [
      "It must have a method body.",
      "It can be declared outside an abstract class.",
      "It must be overridden in a derived class.",
      "It cannot be overridden in a derived class."
    ],
    correct: 2
  },
  {
    question: "Which statement is true about abstract classes?",
    options: [
      "They cannot contain regular methods.",
      "They can only be inherited, not instantiated.",
      "They must contain at least one abstract method.",
      "They are the same as interfaces."
    ],
    correct: 1
  }
]
