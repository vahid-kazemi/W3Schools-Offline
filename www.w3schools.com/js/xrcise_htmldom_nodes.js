qobjects = [
  {
    question: "What is a correct syntax for creating a new &lt;h1&gt; element?",
    options: [
      "<code>document.appendChild('h1');</code>",
      "<code>document.newElement('h1');</code>",
      "<code>document.createElement('h1');</code>"
    ],
    correct: 2
  },
  {
    question: "What is a correct method for inserting elements?",
    options: [
      "<code>insertBefore();</code>",
      "<code>appendToParent();</code>",
      "<code>insertToParent();</code>"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code class='codeblock'>let a = document.___('p');<br>let b = document.___('___');<br>a.___(b);document.body.appendChild(___);</code>",
    draganddropquestion: "Insert the missing syntax to:<br>1. Create a paragraph</br>2. Create a Text Node<br>3. Append the Text Node to the paragraph<br>4. Append the paragraph to the body element",
    options: [
      "<code>appendChild</code>",
      "<code>createElement</code>",
      "<code>a</code>",
      "<code>my text node.</code>",
      "<code>createTextNode</code>",
      
    ],
    correct: [1, 4, 3, 0, 2]
  }
]