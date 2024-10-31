function highlightWords() {
    const paragraph = document.querySelector('#text');
    const words = paragraph.innerText.split(' ');

    const updatedWords = words.map(word => {
        if (word.length > 7) {
            return `<span class="highlight-blue">${word}</span>`;
        } else if (word.length < 3) {
            return `<span class="bold">${word}</span>`;
        } else {
            return word;
        }
    });

    paragraph.innerHTML = updatedWords.join(' ');
}
highlightWords();
