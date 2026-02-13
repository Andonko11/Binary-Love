
document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const audio = document.getElementById("background-music");

    // YES button
    yesButton.addEventListener('click', function () {
        alert('Yay! Can’t wait for our date! ❤️');
        confetti();
        audio.play();
    });

    // NO button runs away
    function moveNoButton() {
        const padding = 20;
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;

        const maxX = window.innerWidth - buttonWidth - padding;
        const maxY = window.innerHeight - buttonHeight - padding;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;

        generateEvilFaces();
    }

    // Run on hover AND click attempt
    noButton.addEventListener('mouseenter', moveNoButton);
    noButton.addEventListener('mousedown', function (e) {
        e.preventDefault();
        moveNoButton();
    });

    // Evil faces
    function generateEvilFaces() {
        for (let i = 0; i < 5; i++) {
            const evilFace = document.createElement('div');
            evilFace.innerHTML = '😈';
            evilFace.classList.add('evil-face');
            document.body.appendChild(evilFace);

            evilFace.style.left = `${Math.random() * window.innerWidth}px`;
            evilFace.style.top = `${Math.random() * window.innerHeight}px`;

            setTimeout(() => evilFace.remove(), 800);
        }
    }
});

