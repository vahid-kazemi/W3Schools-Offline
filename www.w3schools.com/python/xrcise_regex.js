qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>import re<br>txt = 'The rain in Spain'<br>x = re.findall('[a-c]', txt)<br>print(x)</code><br>What will be the printed result?",
    options: [
      "<code>['a', 'a']</code>",
      "'The rin in Spin'",
      "<code>2</code>"
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import re<br>txt = 'The rain in Spain'<br>x = re.search('a', txt)<br>print(x.start())</code><br>What will be the printed result?",
    options: [
      "3",
      "4",
      "5"
    ],
    correct: 2
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import re<br>txt = 'The rain in Spain'<br>x = re.search('\\s', txt)<br>print(x.start())</code><br>What will be the printed result?",
    options: [
      "3",
      "4",
      "5"
    ],
    correct: 0
  },
  {
    question: "When using the <code class='w3-codespan'>re</code> module to find a match, a match will return a Match object, but what is the return value when there is no match?",
    options: [
      "<code>-1</code>",
      "<code>None</code>",
      "<code>0</code>",
      "<code>Null</code>"
    ],
    correct: 1
  }

]