class ValorantNickGenerator {
    static adjectives = [
        'Sova', 'Reyna', 'Jett', 'Omen', 'Breach',
        'Viper', 'Cypher', 'Sage', 'Phoenix', 'Brimstone',
        'Astra', 'KAY/O', 'Chamber', 'Neon', 'Fade',
        'Harbor', 'Gekko', 'Deadlock', 'Iso', 'Clove'
    ];

    static nouns = [
        'Protocol', 'Hunter', 'Smoke', 'Flash', 'Spike',
        'Ultimate', 'Orb', 'Shard', 'Pistol', 'Operator',
        'Frenzy', 'Ghost', 'Vandal', 'Phantom', 'Spectre',
        'Sheriff', 'Knife', 'Defuse', 'Plant', 'Retake'
    ];

    static generate() {
        const adj = this.getRandomElement(this.adjectives);
        const noun = this.getRandomElement(this.nouns);
        const number = Math.floor(Math.random() * 999).toString().padStart(3, '0');
        return `${adj}${noun}#${number}`;
    }

    static getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

// Elementos da UI
const nickDisplay = document.getElementById('nickDisplay');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

// Gerar nickname
function generateNick() {
    nickDisplay.textContent = ValorantNickGenerator.generate();
    nickDisplay.classList.add('fade-in');
    setTimeout(() => nickDisplay.classList.remove('fade-in'), 500);
}

// Copiar para clipboard
function copyNick() {
    navigator.clipboard.writeText(nickDisplay.textContent)
        .then(() => alert('Nick copied to clipboard!'))
        .catch(err => console.error('Failed to copy:', err));
}

// Event Listeners
generateBtn.addEventListener('click', generateNick);
copyBtn.addEventListener('click', copyNick);
nickDisplay.addEventListener('click', copyNick);

// Gerar inicial
generateNick();