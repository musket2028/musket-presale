
const contractAddress = "0x293E5dc7405FA8f4155Af6353542Ed00426A979a";
function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' });
    } else {
        alert('Please install MetaMask!');
    }
}
function updateConverter() {
    const bnb = parseFloat(document.getElementById("bnbInput").value) || 0;
    document.getElementById("tokenOutput").innerText = (bnb * 500000).toLocaleString();
}
function copyAddress() {
    navigator.clipboard.writeText(contractAddress).then(() => {
        alert("Contract address copied!");
    });
}
