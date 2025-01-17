const express = require('express');
const app = express();
const path = require('path');
const fs = require ("fs");
const PORT = 3000;
// Example quiz data
//const quizData = [];
  //  { "question": "What is 2 + 2?", "options": ["3", "4", "5", "6"], "answer": "4" },
  //  { "question": "What is the capital of France?", "options": ["Berlin", "Paris", "Rome", "Madrid"], "answer": "Paris" },
  //  { "question": "What is the largest planet?", "options": ["Mars", "Earth", "Jupiter", "Saturn"], "answer": "Jupiter" },
    // Add more questions here...
//fetch("./questions.json")

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/quiz', (req, res) => {
    const quizData =JSON.parse (fs.readFileSync(path.join(__dirname, 'quiz.json'), 'utf-8'));

    const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffledQuestions.slice(0, 10);
    res.render('quiz', { questions: selectedQuestions });
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});
