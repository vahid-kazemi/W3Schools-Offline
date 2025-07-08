qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>import datetime<br>x = datetime.datetime</code><br>Which syntax will print the current date?",
    options: [
      "<code>print(x.datetime())</code>",
      "<code>print(x.date())</code>",
      "<code>print(x.now())</code>"
    ],
    correct: 2
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import datetime<br>x = datetime.datetime.now()</code><br>Which syntax will print the name of the weekday?",
    options: [
      "<code>print(x.strftime('%A'))</code>",
      "<code>print(x.ftime('%A'))</code>",
      "<code>print(x.fdate('%A'))</code>"
    ],
    correct: 0
  },
  {
    question: "When formatting date objects into readable strings, which syntax is used to return the month name, full version?",
    options: [
      "<code>print(x.strftime('%B'))</code>",
      "<code>print(x.strftime('%M'))</code>",
      "<code>print(x.strftime('%N'))</code>"
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import datetime<br>x = datetime.datetime(2024, 8, 20)<br>print(x.strftime('%d'))</code><br>What will be the printed result?",
    options: [
      "19",
      "20",
      "21"
    ],
    correct: 1
  }
]