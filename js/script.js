document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('nav ul li a');
    const contentSections = document.querySelectorAll('.content-sections section');

    function showSection(id) {
        contentSections.forEach(section => {
            section.classList.add('hidden');
        });

        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão de rolar a página

            const targetId = link.getAttribute('href').substring(1) + '-content';
            showSection(targetId);
        });
    });

    // Mostra a seção de início por padrão
    showSection('inicio-content');
});
