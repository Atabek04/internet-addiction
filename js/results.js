// results.js
document.addEventListener("DOMContentLoaded", function () {
    var name = localStorage.getItem("name");
    var addictionLevel = localStorage.getItem("addictionLevel");
    var description = "";
    var tips = "";

    switch (addictionLevel) {
        case "severe":
            description = "Сізде интернетке қатты тәуелділік бар.";
            tips =
                "Here are some tips to help you overcome your addiction: [Insert tips for severe addiction here]";
            break;
        case "moderate":
            description = "Сізде орташа интернетке тәуелділік бар.";
            tips =
                "Here are some tips to help you overcome your addiction: [Insert tips for moderate addiction here]";
            break;
        case "mild":
            description = "Сізде жеңіл интернетке тәуелділік бар.";
            tips =
                "Here are some tips to help you overcome your addiction: [Insert tips for mild addiction here]";
            break;
        default:
            description = "Сізде интернетке тәуелділік жоқ.";
            tips =
                "Maintain healthy internet usage habits to prevent addiction.";
            break;
    }

    document.getElementById("addictionDescription").innerHTML =
        "<p><strong>" +
        name +
        " " +
        description.toLowerCase() +
        "</strong></p>";
    document.getElementById("tips").innerHTML =
        "<p><strong>Tips:</strong> " + tips + "</p>";
    document.getElementById("userName").innerHTML =
        "<p><strong>Name:</strong> " + name + "</p>";
});
