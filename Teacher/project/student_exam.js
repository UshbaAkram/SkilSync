document.addEventListener('DOMContentLoaded', () => {
    const exam = JSON.parse(localStorage.getItem('exam')) || { mcqs: [], qa: [] };

    // Render MCQs
    const mcqContent = document.getElementById('mcq-content');
    exam.mcqs.forEach((mcq, index) => {
        const questionElement = document.createElement('p');
        questionElement.textContent = `${index + 1}. ${mcq.question}`;
        mcqContent.appendChild(questionElement);

        mcq.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.innerHTML = `
                <input type="radio" name="mcq${index}" value="${option}">
                <label>${option}</label>
            `;
            mcqContent.appendChild(optionElement);
        });
    });

    // Render Q&A
    const qaContent = document.getElementById('qa-content');
    exam.qa.forEach((q, index) => {
        const questionElement = document.createElement('p');
        questionElement.textContent = `${index + 1}. ${q.question}`;
        qaContent.appendChild(questionElement);

        const answerElement = document.createElement('textarea');
        answerElement.id = `qa${index}`;
        answerElement.placeholder = "Write your answer here...";
        qaContent.appendChild(answerElement);
    });

    document.getElementById('submit-exam').addEventListener('click', () => {
        const mcqAnswers = exam.mcqs.map((mcq, index) => {
            const selectedOption = document.querySelector(`input[name="mcq${index}"]:checked`);
            return selectedOption ? selectedOption.value : null;
        });

        const qaAnswers = exam.qa.map((_, index) => {
            return document.getElementById(`qa${index}`).value;
        });

        const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
        submissions.push({ mcqAnswers, qaAnswers });
        localStorage.setItem('submissions', JSON.stringify(submissions));

        console.log('MCQ Answers:', mcqAnswers);
        console.log('Q&A Answers:', qaAnswers);
        alert('Your exam has been submitted successfully!');
    });
});
