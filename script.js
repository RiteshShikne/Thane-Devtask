document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling.nextElementSibling;
            const brAbove = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';

            // Reset all questions and answers
            faqQuestions.forEach(q => {
                q.nextElementSibling.nextElementSibling.style.display = 'none';
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });

            if (!isVisible) {
                answer.style.display = 'block';
                this.classList.add('active');
                brAbove.classList.add('active');
            } else {
                answer.style.display = 'none';
                this.classList.remove('active');
                brAbove.classList.remove('active');
            }
        });
    });
});
