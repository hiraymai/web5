function countWords() {
    const text = document.getElementById('paragraph').innerText;
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    alert(`The number of words in the paragraph is: ${wordCount}`);
}