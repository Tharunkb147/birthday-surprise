function showSurprise() {

    document.getElementById("surprise").style.display = "block";

    createConfetti();

}

function createConfetti() {

    const colors = [
        "#ff4081",
        "#ffd700",
        "#4caf50",
        "#2196f3",
        "#9c27b0",
        "#ff9800"
    ];

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.animationDelay =
            Math.random() * 0.8 + "s";

        document.body.appendChild(piece);

        setTimeout(function() {
            piece.remove();
        }, 4000);

    }

}