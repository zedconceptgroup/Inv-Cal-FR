function calculate() {
    let investment = parseFloat(document.getElementById("investment").value);
    let monthlyPayout, yearlyPayout, roi;

    if (investment >= 5000 && investment < 10000) {
        monthlyPayout = investment * 0.036;  // 3.6% per month
        yearlyPayout = monthlyPayout * 12;
        roi = (yearlyPayout / investment) * 100;
    } else if (investment >= 10000 && investment < 25000) {
        monthlyPayout = investment * 0.04;  // 4% per month
        yearlyPayout = monthlyPayout * 12;
        roi = (yearlyPayout / investment) * 100;
    } else if (investment >= 25000 && investment < 50000) {
        monthlyPayout = investment * 0.048; // 4.8% per month
        yearlyPayout = monthlyPayout * 12;
        roi = (yearlyPayout / investment) * 100;
    } else if (investment >= 50000 && investment < 100000) {
        monthlyPayout = investment * 0.055; // 5.5% per month
        yearlyPayout = monthlyPayout * 12;
        roi = (yearlyPayout / investment) * 100;
    } else if (investment >= 100000) {
        monthlyPayout = investment * 0.06;  // 6% per month
        yearlyPayout = monthlyPayout * 12;
        roi = (yearlyPayout / investment) * 100;
    } else {
        alert("Veuillez entrer un montant valide (minimum 5000€)");
        return;
    }

    document.getElementById("monthlyPayout").innerText = monthlyPayout.toFixed(2);
    document.getElementById("yearlyPayout").innerText = yearlyPayout.toFixed(2);
    document.getElementById("roi").innerText = roi.toFixed(2);
}