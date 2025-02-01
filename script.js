const messages = [
    "¿Estás segura?",
    "¿De verdad estás segura, amor?",
    "¿Estás completamente segura?",
    "Amor, por favor...",
    "¡Solo piénsalo!",
    "Tania, si dices que no, estaré muy triste...",
    "Amor, estaré muy triste...",
    "Dios, estaré muy, muy, muy triste...",
    "Está bien, dejaré de preguntar...",
    "Solo bromeaba, ¡Di que sí, por favor Tania! 💟"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}