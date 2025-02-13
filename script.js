function calculate() {
    let investment = parseFloat(document.getElementById("investment").value);
    let monthlyPayout, annualPayout, roi;

    if (investment >= 100000) {
        monthlyPayout = investment * 0.06;
        roi = 72;
    } else if (investment >= 50000) {
        monthlyPayout = investment * 0.055;
        roi = 66;
    } else if (investment >= 25000) {
        monthlyPayout = investment * 0.05;
        roi = 60;
    } else if (investment >= 10000) {
        monthlyPayout = investment * 0.048;
        roi = 58;
    } else {
        monthlyPayout = investment * 0.045;
        roi = 54;
    }

    annualPayout = monthlyPayout * 12;

    document.getElementById("monthly-payout").textContent = monthlyPayout.toFixed(2);
    document.getElementById("annual-payout").textContent = annualPayout.toFixed(2);
    document.getElementById("roi").textContent = roi;
}

function simulateReinvestment() {
    let initialInvestment = parseFloat(document.getElementById("investment").value);
    let years = parseInt(document.getElementById("years").value);
    let reinvestedAmount = initialInvestment;
    let roi;

    for (let i = 0; i < years; i++) {
        if (reinvestedAmount >= 100000) {
            roi = 72;
        } else if (reinvestedAmount >= 50000) {
            roi = 66;
        } else if (reinvestedAmount >= 25000) {
            roi = 60;
        } else if (reinvestedAmount >= 10000) {
            roi = 58;
        } else {
            roi = 54;
        }

        reinvestedAmount += (reinvestedAmount * (roi / 100));
    }

    document.getElementById("reinvested-amount").textContent = reinvestedAmount.toFixed(2);
}