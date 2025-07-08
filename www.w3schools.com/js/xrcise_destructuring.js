qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>const fruits = ['Apple', 'Banana', 'Cherry'];<br>let [x, y] = fruits;</code><br>What will be the value of <code class='w3-codespan'>x</code>?",
    options: [
      "<code>['Apple', 'Banana', 'Cherry']</code>",
      "<code>['Apple']</code>",
      "<code>Apple</code>"
    ],
    correct: 2
  },{
    draganddroptext: "<code class='codeblock'>const numbers = [10, 20, 30, 40, 50, 60, 70];<br>const [a,b, ___leftover] = numbers;</code><br>",
    draganddropquestion: "Insert the missing syntax to make the <code class='w3-codespan'>leftover</code> variable contain the rest of the Array.",
    options: [
      "<code>:</code>",
      "<code>=</code>",
      "<code>...</code>",
      "<code>===</code>",
      "<code>,,,</code>"
    ],
    correct: [2]
  },
  {
    draganddroptext: "<code class='codeblock'>let fName = 'John';<br>let lName = 'Doe';<br>[fName, lName] = ___ ___ , ___ ___;</code><br>",
    draganddropquestion: "Use destructuring to swap fName and lName. Meaning, fName should get the value 'Doe' and lName 'John'.",
    options: [
      "<code>this</code>",
      "<code>=</code>",
      "<code>{</code>",
      "<code>lName</code>",
      "<code>[</code>",
      "<code>]</code>",
      "<code>:</code>",
      "<code>new</code>",
      "<code>fName</code>",
      "<code>(</code>",
      "<code>)</code>",
    ],
    correct: [4, 3, 8, 5]
  },
]