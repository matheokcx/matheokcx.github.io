document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back');
    const nextButton = document.getElementById('next');
    const scrollContainer = document.querySelector('section.h-5\\/6');

    if (backButton && nextButton && scrollContainer) {
        backButton.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -scrollContainer.clientWidth,
                behavior: 'smooth',
            });
        });

        nextButton.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: scrollContainer.clientWidth,
                behavior: 'smooth',
            });
        });
    }
    else {
        console.error('Élément(s) non trouvé(s) : vérifiez vos IDs et sélecteurs.');
    }
});