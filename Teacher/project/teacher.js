document.addEventListener('DOMContentLoaded', () => {
    const mcqs = [];
    const qa = [];

    document.getElementById('add-mcq').addEventListener('click', () => {
        const question = document.getElementById('new-mcq-question').value;
        const options = document.getElementById('new-mcq-options').value.split(',');
        const correct = document.getElementById('new-mcq-correct').value;

        mcqs.push({ question, options, correct });
        console.log('MCQ Added:', { question, options, correct });
        alert('MCQ added successfully!');
    });

    document.getElementById('add-qa').addEventListener('click', () => {
        const question = document.getElementById('new-qa-question').value;

        qa.push({ question });
        console.log('Q&A Added:', { question });
        alert('Q&A added successfully!');
    });

    document.getElementById('create-exam-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const exam = { mcqs, qa };
        localStorage.setItem('exam', JSON.stringify(exam));
        console.log('Exam Created:', exam);
        alert('Exam created successfully!');
        // Clear inputs after creation
        document.getElementById('new-mcq-question').value = '';
        document.getElementById('new-mcq-options').value = '';
        document.getElementById('new-mcq-correct').value = '';
        document.getElementById('new-qa-question').value = '';
    });

    // Display submitted exams
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    const examsList = document.getElementById('submitted-exams-list');
    submissions.forEach((submission, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p>Submission ${index + 1}:</p>
            <p>MCQs: ${submission.mcqAnswers.join(', ')}</p>
            <p>Q&A: ${submission.qaAnswers.join('<br>')}</p>
        `;
        examsList.appendChild(listItem);
    });
});
const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});