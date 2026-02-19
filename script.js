function visitSite(url) {
    window.open(url, '_blank');
}

function newQuote() {
    let quotes = [
        "Keep going, you're getting there!",
        "Small steps every day = big success.",
        "Don't stop until you're proud.",
        "Your future is created by what you do today."
    ];

    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}

