document.getElementById("calculate").addEventListener("click", function() {
    let investment = parseFloat(document.getElementById("investment").value);

    // Use a fixed ROI instead of random values
    let roiMin = 0.43; // 43%
    let roiMax = 0.54; // 54%
    let avgROI = (roiMin + roiMax) / 2;  // Fixed midpoint ROI

    let monthlyPayout = (investment * avgROI) / 12;
    let yearlyPayout = investment * avgROI;

    document.getElementById("monthlyPayout").textContent = `${monthlyPayout.toFixed(2)} €`;
    document.getElementById("yearlyPayout").textContent = `${yearlyPayout.toFixed(2)} €`;
});
