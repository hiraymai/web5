    const word1 = prompt("Enter the first word:");
    const word2 = prompt("Enter the second word:");
    const word3 = prompt("Enter the third word:");
    const words = [word1, word2, word3];
    let longest = words[0];
    let shortest = words[0];
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word; }
        if (word.length < shortest.length) {
            shortest = word; }
    }
    alert(`The longest is: ${longest}\nThe shortest is: ${shortest}`);

