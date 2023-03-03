const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', function() {
        const nextElement = question.nextElementSibling;
        nextElement.classList.toggle('visible');

        const icon = question.lastElementChild;
        icon.classList.toggle('fa-chevron-up');
    });
});
