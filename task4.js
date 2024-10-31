function replaceCharacters() {
    const inputText = document.getElementById('inputText').value;
    let result = '';
    for (let char of inputText) {
        const charCode = char.charCodeAt(0);
        if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode(charCode === 122 ? 97 : charCode + 1);
        }
        else if (char >= 'A' && char <= 'Z') {
            result += String.fromCharCode(charCode === 90 ? 65 : charCode + 1);
        } else {
            result += char;
        }
    }
    alert(result);
}
