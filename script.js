function calculateReturns() {
    let investment = parseFloat(document.getElementById("investmentAmount").value);
    let roi, minMonthly, maxMonthly, minYearly, maxYearly;

    if (investment < 5000) {
        alert("Please enter an amount of at least €5,000.");
        return;
    }

    // Define ROI percentage based on investment tiers
    if (investment < 10000) {
        roi = 43; 
    } else if (investment < 25000) {
        roi = 48; 
    } else if (investment < 50000) {
        roi = 50; 
    } else if (investment < 100000) {
        roi = 53; 
    } else {
        roi = 58;  // Investments above €100,000 get the highest ROI
    }

    // Calculate estimated payouts
    minYearly = (roi / 100) * investment;
    maxYearly = ((roi + 10) / 100) * investment;
    minMonthly = minYearly / 12;
    maxMonthly = maxYearly / 12;

    // Display results
    document.getElementById("monthlyPayout").textContent = `€${minMonthly.toFixed(0)} - €${maxMonthly.toFixed(0)}`;
    document.getElementById("yearlyPayout").textContent = `€${minYearly.toFixed(0)} - €${maxYearly.toFixed(0)}`;
    document.getElementById("roi").textContent = `${roi} - ${roi + 10}`;
}