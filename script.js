document.addEventListener("DOMContentLoaded", function () {
    const investmentInput = document.getElementById("investment");
    const calculateButton = document.getElementById("calculate");

    // Set default investment amount on focus
    investmentInput.addEventListener("focus", function() {
        if (investmentInput.value === "") {
            investmentInput.value = 15000;
            investmentInput.style.color = "#000"; // Change text color when user types
        }
    });

    function calculatePayouts() {
        let investmentAmount = parseFloat(investmentInput.value);

        if (isNaN(investmentAmount) || investmentAmount < 5000) {
            alert("Veuillez entrer un montant valide (minimum 5000 €).");
            return;
        }

        // Define ROI percentage ranges per investment tier
        let roiRanges = [
            { min: 43, max: 54, threshold: 5000 },
            { min: 48, max: 60, threshold: 10000 },
            { min: 48, max: 60, threshold: 25000 },
            { min: 53, max: 66, threshold: 50000 },
            { min: 58, max: 72, threshold: 100000 }
        ];

        // Determine applicable ROI range
        let selectedROI = roiRanges[roiRanges.length - 1]; // Default to highest tier
        for (let i = 0; i < roiRanges.length; i++) {
            if (investmentAmount <= roiRanges[i].threshold) {
                selectedROI = roiRanges[i];
                break;
            }
        }

        // Calculate Payouts
        let monthlyPayoutMin = ((selectedROI.min / 100) * investmentAmount) / 12;
        let monthlyPayoutMax = ((selectedROI.max / 100) * investmentAmount) / 12;
        let yearlyPayoutMin = (selectedROI.min / 100) * investmentAmount;
        let yearlyPayoutMax = (selectedROI.max / 100) * investmentAmount;

        // Format numbers for better readability
        let formatCurrency = (num) => num.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });

        // Update UI with results
        document.getElementById("monthlyPayout").innerHTML = 
            `<span class="highlight">${formatCurrency(monthlyPayoutMin)}</span> - 
            <span class="highlight">${formatCurrency(monthlyPayoutMax)}</span>`;
            
        document.getElementById("yearlyPayout").innerHTML = 
            `<span class="highlight">${formatCurrency(yearlyPayoutMin)}</span> - 
            <span class="highlight">${formatCurrency(yearlyPayoutMax)}</span>`;
        
        document.getElementById("roiAnnual").innerHTML = 
            `<span class="roi-green">${selectedROI.min}%</span> - 
            <span class="roi-green">${selectedROI.max}%</span>`;

        // Show results section
        document.getElementById("results").style.display = "block";
    }

    // Trigger calculation when page loads
    calculatePayouts();

    // Trigger calculation on button click
    calculateButton.addEventListener("click", calculatePayouts);
});
