document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const container = document.querySelector('.container');
    const aside = document.querySelector('aside');
    const navLinksDarkMode = document.querySelectorAll('.nav-link');
    const projects = document.querySelectorAll('.project');
    const skills = document.querySelectorAll('.skill');
    const tools = document.querySelectorAll('.tool');
    const languages = document.querySelectorAll('.language');

    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        container.classList.toggle('dark-mode');
        aside.classList.toggle('dark-mode');

        navLinksDarkMode.forEach(link => link.classList.toggle('dark-mode'));
        projects.forEach(project => project.classList.toggle('dark-mode'));
        skills.forEach(skill => skill.classList.toggle('dark-mode'));
        tools.forEach(tool => tool.classList.toggle('dark-mode'));
        languages.forEach(language => language.classList.toggle('dark-mode'));

        themeToggle.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Oscuro';
        }

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);

            navLinks.forEach(navLink => navLink.classList.remove('active'));
            pages.forEach(page => page.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    themeToggle.addEventListener('click', toggleDarkMode);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        toggleDarkMode();
    }
});
