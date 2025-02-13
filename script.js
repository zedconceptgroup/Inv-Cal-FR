function calculate() {
    let investment = parseFloat(document.getElementById("investment").value);
    
    // Vérifier si l'entrée est valide
    if (isNaN(investment) || investment < 5000) {
        alert("Veuillez entrer un montant valide (minimum 5000€).");
        return;
    }

    let monthlyPayout, yearlyPayout, roi;

    if (investment >= 5000 && investment < 10000) {
        monthlyPayout = investment * 0.036;  // 3.6% par mois
    } else if (investment >= 10000 && investment < 25000) {
        monthlyPayout = investment * 0.04;  // 4% par mois
    } else if (investment >= 25000 && investment < 50000) {
        monthlyPayout = investment * 0.048; // 4.8% par mois
    } else if (investment >= 50000 && investment < 100000) {
        monthlyPayout = investment * 0.055; // 5.5% par mois
    } else {
        monthlyPayout = investment * 0.06;  // 6% par mois
    }

    yearlyPayout = monthlyPayout * 12;
    roi = (yearlyPayout / investment) * 100;

    // Affichage des résultats
    document.getElementById("monthlyPayout").innerText = monthlyPayout.toFixed(2);
    document.getElementById("yearlyPayout").innerText = yearlyPayout.toFixed(2);
    document.getElementById("roi").innerText = roi.toFixed(2);
}