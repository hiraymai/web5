function calculate() {
    const a = parseFloat(document.getElementById("baseLength").value);
    const b = parseFloat(document.getElementById("baseWidth").value);
    const h = parseFloat(document.getElementById("height").value);
    if (isNaN(a) || isNaN(b) || isNaN(h)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }
    const baseArea = a * b;
    const volume = baseArea * h;
    document.getElementById("volume").value = volume.toFixed(4);
}
