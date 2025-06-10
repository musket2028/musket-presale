
function connectWallet() {
    alert('Wallet connection will be handled by Web3 in production.');
}
function buyToken() {
    alert('Token purchase logic via Web3 will go here.');
}
function copyContract() {
    const contract = document.getElementById("contract").textContent;
    navigator.clipboard.writeText(contract);
    alert("Contract address copied!");
}
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("bnbInput");
    const output = document.getElementById("musketOutput");
    input.addEventListener("input", () => {
        const bnb = parseFloat(input.value) || 0;
        output.textContent = (bnb * 500000).toLocaleString();
    });
});
