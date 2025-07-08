qobjects = [
  {
    question: "Consider the following code:</br><code class='codeblock'>let firstname = 'Jim', i = 0;<br>for (const x of firstname) {<br>&nbsp;&nbsp;i++;<br>}</code><br>What will be the value of <code class='w3-codespan'>i</code>?",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    correct: 3
  },
  {
    question: "Consider the following code:</br><code class='codeblock'>const fruits = ['Apple', 'Banana', 'Cherry'];<br>let txt = '';<br>for (const x of fruits) {<br>&nbsp;&nbsp;txt += x;<br>}</code><br>What will be the value of <code class='w3-codespan'>txt</code>?",
    options: [
      "Apple",
      "Banana",
      "Cherry",
      "AppleBananaCherry"
    ],
    correct: 3
  },
  {
    question: "Consider the following code:</br><code class='codeblock'>const fruits = ['Apple', 'Banana', 'Cherry'];<br>let txt = '';<br>for (const x in fruits) {<br>&nbsp;&nbsp;txt += x;<br>}</code><br>What will be the value of <code class='w3-codespan'>txt</code>?",
    options: [
      "012",
      "AppleBananaCherry"
    ],
    correct: 0
  }
]