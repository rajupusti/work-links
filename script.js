const submittbtn = document.getElementById("submitBtn");

submittbtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission
    const dateInput = document
        .getElementById("date")
        .value;

    const typeSelect = document
        .querySelector("#select")
        .value;
    let openingToken = 58783;
    let closingToken = 59598;

    const startDate = new Date("2025-10-10")
    const selectedDate = new Date(dateInput)
    const diff = selectedDate - startDate
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    console.log(startDate, selectedDate, diffDays);
    console.log(openingToken, closingToken);
    if (typeSelect === "open") {
        const result = openingToken + diffDays;
       let link = `https://docs.google.com/forms/d/e/1FAIpQLSct3cdw9E7DeGowvKrT6kP2f-h4h_zJPx9j8hcZipvKwhKx5w/viewform?usp=pp_url&entry.173694581=${result}&entry.1788179170=RKH%20Front%20Gate%20Opening%20(Branch_Ballavpur_Godown)&entry.1595199125=MIS131_RAJU%20PUSTI`;
        window.open(link, "_blank");
        console.log(link);
    }else{
        const result = closingToken + diffDays;
        let link = `https://docs.google.com/forms/d/e/1FAIpQLSct3cdw9E7DeGowvKrT6kP2f-h4h_zJPx9j8hcZipvKwhKx5w/viewform?usp=pp_url&entry.173694581=${result}&entry.1788179170=RKH%20Front%20Gate%20Closing%20(Branch_Ballavpur_Godown)&entry.1595199125=MIS131_RAJU%20PUSTI`;
        window.open(link, "_blank");
        console.log(link);
        
    }
});