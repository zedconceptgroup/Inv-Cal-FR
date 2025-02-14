document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculate").addEventListener("click", function() {
        let investment = parseFloat(document.getElementById("investment").value);

        // Check if input is valid
        if (isNaN(investment) || investment <= 0) {
            alert("Veuillez entrer un montant valide.");
            return;
        }

        // Define ROI percentage range (minimum and maximum)
        let roiMin = 0.43;  // 43% minimum ROI
        let roiMax = 0.54;  // 54% maximum ROI

        // Calculate the monthly and yearly payouts for both min and max ROI
        let monthlyPayoutMin = (investment * roiMin) / 12;
        let monthlyPayoutMax = (investment * roiMax) / 12;

        let yearlyPayoutMin = investment * roiMin;
        let yearlyPayoutMax = investment * roiMax;

        let roiMinPercentage = (roiMin * 100).toFixed(2);
        let roiMaxPercentage = (roiMax * 100).toFixed(2);

        // Display results
        document.getElementById("monthlyPayout").textContent = 
            `${monthlyPayoutMin.toFixed(2)} € - ${monthlyPayoutMax.toFixed(2)} €`;

        document.getElementById("yearlyPayout").textContent = 
            `${yearlyPayoutMin.toFixed(2)} € - ${yearlyPayoutMax.toFixed(2)} €`;

        document.getElementById("roiAnnual").textContent = 
            `${roiMinPercentage}% - ${roiMaxPercentage}%`;
        // Ensure investment amount is valid
if (investmentAmount > 0) {
    let roiAnnualMin = ((yearlyPayoutMin / investmentAmount) * 100).toFixed(2);
    let roiAnnualMax = ((yearlyPayoutMax / investmentAmount) * 100).toFixed(2);
    
    document.getElementById("roiAnnual").textContent = `${roiAnnualMin}% - ${roiAnnualMax}%`;
} else {
    document.getElementById("roiAnnual").textContent = "0%";
}

    });
});
