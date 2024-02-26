function submitForm() {
    var score = 0;
    var radios = document.querySelectorAll("input[type=radio]:checked");
    radios.forEach(function (radio) {
        score += parseInt(radio.value);
    });

    var addictionLevel = "";
    if (score >= 20) {
        addictionLevel = "severe";
    } else if (score >= 15) {
        addictionLevel = "moderate";
    } else if (score >= 10) {
        addictionLevel = "mild";
    } else {
        addictionLevel = "none";
    }

    var name = document.getElementById("fullName").value.trim();
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("addictionLevel", addictionLevel);
    window.location.href = "results.html";
}
