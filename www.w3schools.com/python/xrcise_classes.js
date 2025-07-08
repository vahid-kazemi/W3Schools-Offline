qobjects = [
  {
    question: "When the class object is represented as a string, there is a function that controls what should be returned, which one?",
    options: [
      "<code>__init__()</code>",
      "<code>__str__()</code>",      
      "<code>__return__()</code>"
    ],
    correct: 1
  },
  {
    question: "What is a correct syntax for deleting an object named <code class='w3-codespan'>person</code> in Python?",
    options: [
      "<code>person.delete()</code>",
      "<code>delete person</code>",
      "<code>del person</code>"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_classes1.htm"
  },
  {
    fillintheblanks: "exercise_classes2.htm"
  },
  {
    fillintheblanks: "exercise_classes3.htm"
  },
  {
    fillintheblanks: "exercise_classes4.htm"
  },
  {
    draganddroptext: "<code>___ Person:</code><br><code>&nbsp;&nbsp;___ ___(self, name, age):</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;self.name = name</code><br><code>&nbsp;&nbsp;&nbsp;&nbsp;self.age = age</code><br>&nbsp;&nbsp;def ___(self):</code><br>&nbsp;&nbsp;&nbsp;&nbsp;return f'{___.___}({self.___})</code><br><code>p1 = Person('John', 36)</code><br><code>print(p1)</code>",
    draganddropquestion: "Insert the missing parts to make the code return: John(36):",
    options: [
      "<code>__init__</code>",
      "<code>__str__</code>",
      "<code>name</code>",
      "<code>self</code>",
      "<code>age</code>",
      "<code>def</code>",
      "<code>class</code>",
      "<code>post</code>"
    ],
    correct: [6, 5, 0, 1, 3, 2, 4]
  }  
]