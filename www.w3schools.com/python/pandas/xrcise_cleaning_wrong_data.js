qobjects = [
  {
    question: "What is a correct syntax for changing the 'Firstname' column in the first row to 'John'?",
    options: [
      "<code>df.loc[0, 'Firstname'] = 'John'</code>",      
      "<code>df.loc[0]['Firstname'] = 'John'</code>",      
      "<code>df.loc[0, 'Firstname', 'John']</code>"
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>for x in df.index:<br>&nbsp;&nbsp;if df.loc[x, 'Duration'] > 120:<br>&nbsp;&nbsp;&nbsp;&nbsp;df.drop(x, inplace = True)</code><br>What will happen in the result when the value for 'Duration' is higher than 120?",
    options: [
      "The Duration value will be set to 120",      
      "The Duration column will be deleted",            
      "The entire row will be deleted"
    ],
    correct: 2
  }
]