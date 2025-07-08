qobjects = [
  {
    question: "What is a correct syntax for returning the result as dictionary, with the names and values as key/value pairs?",
    options: [
      "<code>Member.objects.all().dict()</code>",
      "<code>Member.objects.all().values()</code>",
      "<code>Member.objects.all().records()</code>"
    ],
    correct: 1
  },
  {
    question: "What is a correct syntax for returning only the specified columns?",
    options: [
      "<code>Member.objects.values_list('firstname')</code>",
      "<code>Member.objects.value('firstname')</code>",
      "<code>Member.objects.value_list('firstname')/code>"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_queryset1.htm"
  }
]