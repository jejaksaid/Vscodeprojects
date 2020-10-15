const quizData = [
    {
        question: 'Where is Indonesia?',
        a:  'Asia',
        b:  'Europe',
        c:  'America',
        d:  'Africa',
        correct: 'a'
    }, {
        question: 'What is Pancasila?',
        a:  'Dasar negara',
        b:  'Lambang negara',
        c:  'Burung garuda',
        d:  'Semua benar',
        correct: 'a'
    }, {
        question: 'How old said?',
        a:  '22',
        b:  '23',
        c:  '14',
        d:  '19',
        correct: 'b'
    }, {
        question: 'What is best programming language',
        a:  'Java',
        b:  'Python',
        c:  'C#',
        d:  'Javascript',
        correct: 'a'
    }, {
        question: 'Whos is invent linux?',
        a:  'Linux torvalds',
        b:  'Steve jobs',
        c:  'Bill gates',
        d:  'Donald trump',
        correct: 'a'
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}