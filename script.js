document.getElementById("calculate").addEventListener("click", function() {
    let investment = parseFloat(document.getElementById("investment").value);

    // Define fixed ROI percentage range (min and max)
    let roiMin = 0.43;  // 43% minimum ROI
    let roiMax = 0.54;  // 54% maximum ROI

    // Calculate the monthly and yearly payouts for both min and max ROI
    let monthlyPayoutMin = (investment * roiMin) / 12;
    let monthlyPayoutMax = (investment * roiMax) / 12;

    let yearlyPayoutMin = investment * roiMin;
    let yearlyPayoutMax = investment * roiMax;

    // Display results with a fixed range format
    document.getElementById("monthlyPayout").textContent = 
        `${monthlyPayoutMin.toFixed(2)} € - ${monthlyPayoutMax.toFixed(2)} €`;

    document.getElementById("yearlyPayout").textContent = 
        `${yearlyPayoutMin.toFixed(2)} € - ${yearlyPayoutMax.toFixed(2)} €`;
});
