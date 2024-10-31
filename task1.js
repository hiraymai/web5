const value1 = parseFloat(prompt("Enter the first value:"));
const value2 = parseFloat(prompt("Enter the second value:"));
const value3 = parseFloat(prompt("Enter the third value:"));

const values = [value1, value2, value3];

function findNearestAndFarthest(values) {
    let nearest = values[0];
    let farthest = values[0];
    let nearestDistance = Math.abs(100 - values[0]);
    let farthestDistance = Math.abs(100 - values[0]);

    for (let i = 1; i < values.length; i++) {
        const distance = Math.abs(100 - values[i]);
        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearest = values[i];
        }
        if (distance > farthestDistance) {
            farthestDistance = distance;
            farthest = values[i];
        }
    }
    return { nearest, farthest };
}

const result = findNearestAndFarthest(values);

document.write(`<h2>Results:</h2>`);
document.write(`<p>Nearest value to 100: <strong>${result.nearest}</strong></p>`);
document.write(`<p>Farthest value from 100: <strong>${result.farthest}</strong></p>`);
