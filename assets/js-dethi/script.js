

document.getElementById('addAnswerBtn').addEventListener('click', addAnswer);
document.getElementById('addQuestionBtn').addEventListener('click', addQuestion);

function addAnswer() {
  const answersContainer = document.getElementById('answersContainer');

  // Tạo phần tử đáp án mới
  const answerItem = document.createElement('div');
  answerItem.classList.add('answer-item');

  // Tạo ô input cho đáp án
  const answerInput = document.createElement('input');
  answerInput.type = 'text';
  answerInput.classList.add('answer');
  answerInput.placeholder = 'Nhập đáp án...';

  // Thêm nút xóa đáp án
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Xóa';
  removeBtn.classList.add('remove-answer-btn');
  removeBtn.addEventListener('click', () => {
    answerItem.remove();
  });

  // Thêm input và nút xóa vào phần tử đáp án
  answerItem.appendChild(answerInput);
  answerItem.appendChild(removeBtn);

  // Thêm đáp án mới vào container
  answersContainer.appendChild(answerItem);
}

function addQuestion() {
  const questionText = document.getElementById('question').value.trim();

  const answerElements = document.querySelectorAll('.answer');
  const answers = [];
  answerElements.forEach(input => {
    const answer = input.value.trim();
    if (answer) {
      answers.push(answer);
    }
  });

  if (!questionText || answers.length === 0) {
    alert('Vui lòng nhập câu hỏi và ít nhất một đáp án!');
    return;
  }

  const questionList = document.getElementById('questionList');

  // Tạo phần tử câu hỏi mới
  const questionItem = document.createElement('div');
  questionItem.classList.add('question-item');

  // Tạo nội dung câu hỏi
  const questionContent = document.createElement('p');
  questionContent.innerHTML = `<strong>Câu hỏi:</strong> ${questionText}<br><strong>Đáp án:</strong><ul>${answers.map(answer => `<li>${answer}</li>`).join('')}</ul>`;
  questionItem.appendChild(questionContent);

  // Tạo nút xóa câu hỏi
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Xóa';
  deleteBtn.addEventListener('click', () => {
    questionItem.remove();
  });

  questionItem.appendChild(deleteBtn);

  // Thêm câu hỏi vào danh sách
  questionList.appendChild(questionItem);

  // Clear input fields
  document.getElementById('question').value = '';
  document.getElementById('answersContainer').innerHTML = '<div class="answer-item"><input type="text" class="answer" placeholder="Nhập đáp án..."></div>';
}
