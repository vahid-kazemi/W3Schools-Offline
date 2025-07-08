qobjects = [
  {
    question: "CSV is short for:",
    options: [
      "Common System Values",
      "Character Specific Values",
      "Comma Separated Values"
    ],
    correct: 2
  },
  {
    question: "What is a correct syntax for loading a .csv file into a DataFrame?",
    options: [
      "<code>df = pd.read_csv('data.csv')</code>",      
      "<code>df = pd.csv('data.csv')</code>",      
      "<code>df = pd.load('data.csv')</code>"
    ],
    correct: 0
  },
  {
    question: "By default, if you print a large DataFrame with the <code class='w3-codespan'>print(df)</code> function, Pandas will only return a selection of the data. How many rows will be returned?",
    options: [
      "10, the headers and the first and last 5 rows",      
      "20, the headers and the first and last 10 rows",      
      "100, the headers and the first and last 50 rows",      
    ],
    correct: 0
  }  
]