Timothy Ng
Explaining the back end logic:
I handled the back-end and quiz pages. The functionality is that you can run npm start, login, play the quiz game, see your score and start over again. Each time you will get a randomized set of questions than is different than the last.
The user data is posted in the userDB.JSON file. and the quiz method has the function that sorts the randomized set of questions. The ...quiz creates a shallow copy to create the randomized questions that can then be sorted according to the 
math.random - 0.5 function. Which is sorted based on whether the random number is positive or negative.
And then in the submit page the algorithm for doing the score count was to access the User's answers in req.body, and comparing it to the 10 questions that just passed in the array. thus why the - 1 and the .question is a necessary step, as the name of the key is questions.
Then, the User's answers get's compared to the 10 questions that were just passed into user.DB and they are compared using the same index / number value. Everything else is just resources to make this pop out on the screen.
