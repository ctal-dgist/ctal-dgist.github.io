var footer = document.createElement("footer");
var containerDiv = document.createElement("div");
containerDiv.className = "container";
var paragraph = document.createElement("p");
paragraph.innerHTML =
    "&copy; 2024 Computational Theory and Application Lab. All rights reserved";

containerDiv.appendChild(paragraph);
footer.appendChild(containerDiv);
document.body.appendChild(footer);

document.querySelector(".bars").addEventListener("click", function () {
    var navbar = document.querySelector(".navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
});
