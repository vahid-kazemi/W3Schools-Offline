qobjects = [
  {
    question: "Which loop is used in C# to iterate through each element in an array without requiring a counter?",
    options: [
      "for loop",
      "while loop",
      "foreach loop",
      "do/while loop"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_arrays4.htm"
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>string[] cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};<br>for (int i = 0; i < cars.Length; i++)<br>{<br>&nbsp;&nbsp;Console.WriteLine(cars[i]);<br>}</code>",
    options: [
      "Volvo BMW Ford",
      "BMW Ford Mazda",
      "Volvo BMW Ford Mazda",
      "Mazda Ford BMW Volvo"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>string[] cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};<br>for (int i = 0; i < ___; i++)<br>{<br>&nbsp;&nbsp;Console.WriteLine(cars[i]);<br>}</code>",
    draganddropquestion: "Drag and drop the correct property to specify the loop's condition.",
    options: ["cars.Length", "cars.Count", "cars.Size", "cars.Elements"],
    correct: [0]
  },
  {
    draganddroptext: "<code>string[] cars = {\"Volvo\", \"BMW\", \"Ford\", \"Mazda\"};<br>___ (string car in cars)<br>{<br>&nbsp;&nbsp;Console.WriteLine(car);<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to complete the loop.",
    options: ["foreach", "for", "while", "do"],
    correct: [0]
  }
]
