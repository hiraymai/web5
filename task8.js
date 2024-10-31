function splitSentences() {
    const paragraph = document.getElementById('text').innerText;
    const sentences = paragraph.split(/(?<=[.!?])\s+/);
    const result = sentences.join('\n');
    document.getElementById('output').innerText = result;
}