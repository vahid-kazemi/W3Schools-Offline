qobjects = [
  {
    question: "Which method can be used in C# to get user input from the console?",
    options: [
      "Console.WriteLine()",
      "Console.ReadLine()",
      "Console.Input()",
      "Console.GetInput()"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>string userName = ___;</code>",
    draganddropquestion: "Drag and drop the correct method to assign user input to the variable <code class='w3-codespan'>userName</code>.",
    options: ["Console.ReadLine()", "Console.WriteLine()", "Convert.ToString()", "userInput"],
    correct: [0]
  },
  {
    fillintheblanks: "exercise_user_input1.htm"
  },
  {
    fillintheblanks: "exercise_user_input2.htm"
  },
  {
    question: "What happens if you try to assign the result of <code class='w3-codespan'>Console.ReadLine()</code> directly to an <code class='w3-codespan'>int</code> variable?",
    options: [
      "It will work correctly.",
      "You will get a compilation error.",
      "The input will be automatically converted to an integer."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>int age = Convert.___(Console.ReadLine());</code>",
    draganddropquestion: "Drag and drop the correct method to convert user input to an integer.",
    options: ["ToInt32", "ToString", "ToDouble", "ToChar"],
    correct: [0]
  },
  {
    question: "What kind of exception might you encounter if the user inputs text when an integer is expected?",
    options: [
      "System.NullReferenceException",
      "System.InvalidCastException",
      "System.FormatException",
      "System.ArgumentOutOfRangeException"
    ],
    correct: 2
  }
]
