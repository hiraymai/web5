function highlight() {
    const paragraph = document.getElementById('paragraph');
    const text = paragraph.innerText;
    const words = text.split(' ');
    const highlightedText = words.map(word => {
        if (/^a/i.test(word)) {
            return `<span class="italic">${word}</span>`;
        }
        else if (/y$/i.test(word)) {
            return `<span class="underline">${word}</span>`;
        }
        return word;
    }).join(' ');
    paragraph.innerHTML = highlightedText;
}
