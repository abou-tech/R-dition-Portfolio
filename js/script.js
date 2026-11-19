const buttons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project');
buttons.forEach(button => {
button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('is-active'));
            button.classList.add('is-active');
            const filter = button.dataset.filter;
            projects.forEach(project => {
                project.hidden = filter !== 'all' && project.dataset.category !== filter;
            });
        });
    });