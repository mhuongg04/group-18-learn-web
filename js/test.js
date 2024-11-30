let questionCount = 1;

function addQuestion() {
    questionCount++;
    const question = document.createElement('div');
    question.className = 'question';
    question.innerHTML = `
            <label>Câu hỏi:</label>
            <input class = "question1" type="text" placeholder="Nhập câu hỏi">

            <div class="answer">
                <input type="text" placeholder="Đáp án 1">
                <input type="radio" name="answer${questionCount}">
            </div>

            <div class="answer">
                <input type="text" placeholder="Đáp án 2">
                <input type="radio" name="answer${questionCount}">
            </div>

            <div class="answer">
             <input type="text" placeholder="Đáp án 3">
                <input type="radio" name="answer${questionCount}">
            </div>

            <div class="answer">
                <input type="text" placeholder="Đáp án 4">
                <input type="radio" name="answer${questionCount}">
            </div>
        `;
    document.getElementById('quizForm').insertBefore(question, document.getElementById('quizForm').lastElementChild.previousElementSibling);
    updateTotalQuestions();
}

function updateTotalQuestions() {
    document.getElementById('totalQuestions').value = questionCount;
}

function saveQuiz() {
    const quizName = document.getElementById('quizName').value;
    const quizCode = document.getElementById('quizCode').value;
    const totalQuestions = questionCount;
    const questions = document.querySelectorAll('.question');

    const quizData = {
        name: quizName,
        code: quizCode,
        totalQuestions: totalQuestions,
        questions: []
    };

    questions.forEach((question, index) => {
        const questionText = question.querySelector('input[type="text"]').value;
        const answers = question.querySelectorAll('.answer input[type="text"]');
        const selectedAnswer = question.querySelector('.answer input[type="radio"]:checked');
        quizData.questions.push({
            question: questionText,
            answers: Array.from(answers).map(a => a.value),
            correctAnswer: selectedAnswer ? Array.from(answers).indexOf(selectedAnswer.closest('.answer').querySelector('input[type="text"]')) : null
        });
    });

    console.log('Quiz saved:', quizData);
    alert('Đề thi đã được lưu thành công!');
}