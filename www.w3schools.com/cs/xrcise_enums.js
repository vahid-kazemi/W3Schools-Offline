qobjects = [
  {
    question: "What is an enum in C#?",
    options: [
      "A variable that can store multiple values.",
      "A special 'class' that represents a group of constants.",
      "A method that returns multiple values.",
      "A data type that allows runtime changes."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>enum Level<br>{<br>&nbsp;&nbsp;Low,<br>&nbsp;&nbsp;Medium,<br>&nbsp;&nbsp;___<br>}</code>",
    draganddropquestion: "Drag and drop the correct enum item to complete the list.",
    options: ["Back", "High", "None", "Lowest", "Mid"],
    correct: [1]
  },
  {
    question: "How do you access an enum value?",
    options: [
      "By using the <code>new</code> keyword.",
      "By calling a method inside the enum.",
      "By using dot syntax with the enum name.",
      "By declaring it as a private field."
    ],
    correct: 2
  },
  {
    question: "What is the default integer value of the first item in an enum?",
    options: [
      "0",
      "1",
      "It cannot be converted to an integer"
    ],
    correct: 0
  },
  {
    question: "True or False:<br>To get the integer value from an item, you must explicitly convert the item to an <code class='w3-codespan'>int</code>.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "How are enums commonly used in switch statements?",
    options: [
      "To define variable scopes.",
      "To replace methods inside a switch statement.",
      "As case labels for comparison.",
      "To create new object instances dynamically."
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>switch(myVar)<br>{<br>&nbsp;&nbsp;case Level.Low:<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(\"Low level\");<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>&nbsp;&nbsp;case ___:<br>&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(\"Medium level\");<br>&nbsp;&nbsp;&nbsp;&nbsp;break;<br>}</code>",
    draganddropquestion: "Drag and drop the correct enum item to complete the switch case.",
    options: ["Mid", "Level.Medium", "Medium", "midLevel", "Default"],
    correct: [1]
  },
  {
    question: "Why should you use enums?",
    options: [
      "To replace loops in a program.",
      "To create dynamic runtime objects.",
      "To store a set of predefined constant values.",
      "To store integer values only."
    ],
    correct: 2
  }
]
