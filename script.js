function checkStatus() {
    const country = document.getElementById('country').value;
    const number = document.getElementById('permitNumber').value.trim();
    const resultBox = document.getElementById('result');

    if (country === "" || number === "") {
        alert("Please select a country and enter a number!");
        return;
    }

    // রেজাল্ট বক্স দেখানো
    resultBox.style.display = "block";
    resultBox.className = "";
    resultBox.innerHTML = "Searching database...";

    setTimeout(() => {
        // এখানে আপনি আপনার পছন্দমতো নম্বর সেট করতে পারেন
        if (number === "10001" || number === "786") {
            resultBox.className = "success";
            resultBox.innerHTML = "<strong>Status: APPROVED!</strong><br>Country: " + country + "<br>Your permit is verified.";
        } else {
            resultBox.className = "error";
            resultBox.innerHTML = "<strong>Status: NOT FOUND!</strong><br>No data found for " + number + " in " + country;
        }
    }, 1200);
}
