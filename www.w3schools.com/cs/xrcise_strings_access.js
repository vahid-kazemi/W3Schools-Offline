qobjects = [
  {
    question: "What will the following code output?<br><code class='w3-codespan'>string myString = \"W3Schools\";<br>Console.WriteLine(myString[0]);</code>",
    options: [
      "3",
      "W",
      "S",
      "s",
      "Error"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_strings4.htm"
  },
  {
    draganddroptext: "<code>string myString = \"Hello\";<br>Console.WriteLine(myString[___]);</code>",
    draganddropquestion: "Drag and drop the correct index to access the second character in the string.",
    options: ["1", "0", "2", "3"],
    correct: [0]
  },
  {
    question: "Which method is used to find the index of a specific character in a string?",
    options: [
      "Substring()",
      "IndexOf()",
      "CharAt()",
      "FindIndex()"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>int charPos = name.___(\"D\");</code>",
    draganddropquestion: "Drag and drop the correct method to find the position of the character <code class='w3-codespan'>D</code> in the string <code class='w3-codespan'>name</code>.",
    options: ["IndexOf", "Substring", "ToLower", "Length"],
    correct: [0]
  },
  {
    question: "What will the following code output?<br><code class='w3-codespan'>string name = \"John Doe\";<br>int charPos = name.IndexOf(\"D\");<br>string lastName = name.Substring(charPos);<br>Console.WriteLine(lastName);</code>",
    options: [
      "Doe",
      "John",
      "John Doe",
      "D"
    ],
    correct: 0
  }
]
