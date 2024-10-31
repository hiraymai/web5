function replaceCharacters() {
    const paragraph = document.querySelector('#text');
    let text = paragraph.innerText;
    text = text.replace(/\?/g, '*').replace(/!/g, '@');

    paragraph.innerText = text;
}

replaceCharacters();
