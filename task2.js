function sortWords() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(' ');
    const sortedWords = words.map(word => {
        return word.split('').sort().join(''); });
    const result = sortedWords.join(' ');
    document.getElementById('output').innerText = result;
}
