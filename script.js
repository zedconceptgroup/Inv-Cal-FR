function calculate() {
    let investment = parseFloat(document.getElementById("investment").value);

    if (isNaN(investment) || investment < 5000) {
        alert("Veuillez entrer un montant valide (minimum 5000€)");
        return;
    }

    let roi = 0, monthly = 0, yearly = 0;

    if (investment < 10000) {
        roi = Math.random() * (54 - 43) + 43; // ROI entre 43% et 54%
    } else if (investment < 25000) {
        roi = Math.random() * (60 - 48) + 48;
    } else if (investment < 50000) {
        roi = Math.random() * (60 - 48) + 48;
    } else if (investment < 100000) {
        roi = Math.random() * (66 - 53) + 53;
    } else {
        roi = Math.random() * (72 - 58) + 58;
    }

    yearly = (investment * roi) / 100;
    monthly = yearly / 12;

    document.getElementById("monthly-payout").innerText = monthly.toFixed(2);
    document.getElementById("yearly-payout").innerText = yearly.toFixed(2);
    document.getElementById("roi").innerText = roi.toFixed(2);
}