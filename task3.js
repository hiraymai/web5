function findFirstNonRepeatedCharacter() {
    const inputText = document.getElementById('inputText').value;
    const charCount = {};
    for (let char of inputText) {
        charCount[char] = (charCount[char] || 0) + 1; }
    for (let char of inputText) {
        if (charCount[char] === 1) {
            document.getElementById('output').innerText = char;
            return; 
        }
    }
    document.getElementById('output').innerText = 'No non-repeated character found.';
}
