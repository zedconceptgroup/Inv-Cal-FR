function calculate() {
    let investment = parseFloat(document.getElementById("investment").value);
    
    // Vérifier si l'entrée est valide
    if (isNaN(investment) || investment < 5000) {
        alert("Veuillez entrer un montant valide (minimum 5000€).");
        return;
    }

    let minMonthlyPayout, maxMonthlyPayout, minYearlyPayout, maxYearlyPayout, minROI, maxROI;

    if (investment >= 5000 && investment < 10000) {
        minMonthlyPayout = investment * 0.036;  // 3.6% par mois
        maxMonthlyPayout = investment * 0.045;  // 4.5% par mois
    } else if (investment >= 10000 && investment < 25000) {
        minMonthlyPayout = investment * 0.04;  // 4% par mois
        maxMonthlyPayout = investment * 0.05;  // 5% par mois
    } else if (investment >= 25000 && investment < 50000) {
        minMonthlyPayout = investment * 0.048; // 4.8% par mois
        maxMonthlyPayout = investment * 0.06;  // 6% par mois
    } else if (investment >= 50000 && investment < 100000) {
        minMonthlyPayout = investment * 0.055; // 5.5% par mois
        maxMonthlyPayout = investment * 0.066; // 6.6% par mois
    } else {
        minMonthlyPayout = investment * 0.06;  // 6% par mois
        maxMonthlyPayout = investment * 0.072; // 7.2% par mois
    }

    minYearlyPayout = minMonthlyPayout * 12;
    maxYearlyPayout = maxMonthlyPayout * 12;
    minROI = (minYearlyPayout / investment) * 100;
    maxROI = (maxYearlyPayout / investment) * 100;

    // Affichage des résultats
    document.getElementById("monthlyPayout").innerText = minMonthlyPayout.toFixed(2) + " - " + maxMonthlyPayout.toFixed(2);
    document.getElementById("yearlyPayout").innerText = minYearlyPayout.toFixed(2) + " - " + maxYearlyPayout.toFixed(2);
    document.getElementById("roi").innerText = minROI.toFixed(2) + " - " + maxROI.toFixed(2);
}