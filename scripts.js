// Add interactivity to your site
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site carregado e pronto.');
    
    // Example of adding an event listener to the section
    const section = document.querySelector('section');
    section.addEventListener('click', () => {
        alert('Você clicou na seção de exploração!');
    });
});
