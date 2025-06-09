
function copyContract() {
    const contractText = document.getElementById("contract").textContent;
    navigator.clipboard.writeText(contractText).then(() => {
        alert("Contract address copied!");
    });
}
function connectWallet() {
    alert("MetaMask connection coming soon!");
}
document.getElementById("bnbAmount").addEventListener("input", function () {
    const bnb = parseFloat(this.value);
    const rate = 500000;
    document.getElementById("musketResult").textContent = bnb > 0 ? bnb * rate : 0;
});
