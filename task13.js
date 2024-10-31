function calculateConeVolume() {
    const radius = parseFloat(document.getElementById("radius").value);
    const height = parseFloat(document.getElementById("height").value);


    if (isNaN(radius) || radius <= 0 || isNaN(height) || height <= 0) {
        alert("Please enter valid positive numbers for both radius and height.");
        return;
    }

    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;

    document.getElementById("volume").value = volume.toFixed(4);
}
