function Area() {
    const b = parseFloat(document.getElementById("base").value);
    const h = parseFloat(document.getElementById("height").value);
    const area = 0.5 * b * h;
    document.getElementById("area").value = area.toFixed(4);
}
