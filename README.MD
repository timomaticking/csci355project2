Timothy Ng
Explaining the back end logic:
I handled the back-end and quiz pages. The functionality is that you can run npm start, login, play the quiz game, see your score and start over again. Each time you will get a randomized set of questions than is different than the last.
The user data is posted in the userDB.JSON file. and the quiz method has the function that sorts the randomized set of questions. The ...quiz creates a shallow copy to create the randomized questions that can then be sorted according to the 
math.random - 0.5 function. Which is sorted based on whether the random number is positive or negative.
And then in the submit page the algorithm for doing the score count was to access the User's answers in req.body, and comparing it to the 10 questions that just passed in the array. thus why the - 1 and the .question is a necessary step, as the name of the key is questions.
Then, the User's answers get's compared to the 10 questions that were just passed into user.DB and they are compared using the same index / number value. Everything else is just resources to make this pop out on the screen.

Arun Dahal:
I worked on the front-end portion of the Quiz Zone project. My focus was on creating the homepage, where users log in to access the quiz directly. I designed the page to be simple and intuitive, with a login form that leads users straight to the quiz after authentication. I also included links for signing up and resetting passwords to ensure a smooth and seamless user experience. To make the homepage engaging, I added sections for quiz categories like Science, Education, and Technology. Each category features icons and hover effects to make the design interactive and visually appealing. I focused on responsive design, ensuring the layout works well on both desktop and mobile devices. The color scheme uses vibrant purple accents (#46178F), giving the page a clean and professional look. My goal was to create a user-friendly front-end that guides users effortlessly into the quiz while maintaining a consistent and appealing design throughout.

Aditya Dwivedi:
Project 2 
I worked on the front end portion along with Arun to make the Quiz Zone Porject. I made the result page, where once you complete your quiz you are given your results to see how you did. The design of the page rather simple, I structured the page layout with HTML, styled it to ensure an engaging and user-friendly design with CSS, and added interactivity using JavaScript. I added the that the quiz will give you different comments depending on how well you solved the 10 random questions and also the option to go back and restart the quiz and or go back to the starting home page. The design itself of the result page is rather simple with the results and button options in the middle with a simple picture in the background. 


YOUTUBE LINK
https://youtu.be/49cLT6XWpH8
Run by typing npm start in terminal
and then go to localhost 2000
