window.onload = function() {
    const images = document.querySelectorAll('.animations img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('bounce-in');
        }, index * 500);
    });
};
