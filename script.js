const questions = [
    {
        question: "Which is the largest animal in the world",
        answer: [
            { tex: "Shark", correct: false },
            { tex: "Blue Whale", correct: true },
            { tex: "Elephant", correct: false },
            { tex: "Girraffe", correct: false },
        ]
    },
    {
        question: "Which is the smallest continet in the world",
        answer: [
            { tex: "Asia", correct: false },
            { tex: "Australia", correct: true },
            { tex: "Arctic", correct: false },
            { tex: "Africa", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world",
        answer: [
            { tex: "Kalahhari", correct: false },
            { tex: "Gobi", correct: false },
            { tex: "Sahara", correct: false },
            { tex: "Antartica", correct: true },
        ]
    },
    {
        question: "Which is the smallest country in the world",
        answer: [
            { tex: "Monaco", correct: false },
            { tex: "Maldives", correct: false },
            { tex: "Vatican City", correct: true },
            { tex: "Tonga", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");