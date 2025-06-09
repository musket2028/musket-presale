
function convert() {
    const bnb = parseFloat(document.getElementById("bnbInput").value);
    const rate = 500000;
    const result = isNaN(bnb) ? 0 : bnb * rate;
    document.getElementById("musketOutput").textContent = result.toLocaleString();
}

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert("Wallet connected. Please send BNB to the contract address to buy MUSKET.");
        } catch (err) {
            alert("Connection failed.");
        }
    } else {
        alert("MetaMask not detected. Please install MetaMask.");
    }
}

function copyAddress() {
    const address = document.getElementById("contract").textContent;
    navigator.clipboard.writeText(address).then(() => {
        alert("Address copied!");
    });
}
