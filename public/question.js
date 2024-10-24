const quizQuestions = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "What is 3 * 3?",
        choices: ["6", "9", "12", "15"],
        correct: "9"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
        correct: "Harper Lee"
    }
];

function shuffleQuestions() {
    return quizQuestions.sort(() => 0.5 - Math.random());
}
