var header = document.createElement("header");

var nav = document.createElement("nav");

var h1 = document.createElement("h1");

var h1Anchor = document.createElement("a");
h1Anchor.href = "./index.html";
h1Anchor.textContent = "Computational Theory and Application Lab.";

h1.appendChild(h1Anchor);

nav.appendChild(h1);

var ul = document.createElement("ul");
ul.className = "navbar";

var links = [
    { text: "home", href: "./index.html" },
    { text: "about", href: "./about.html" },
    { text: "publications", href: "./publications.html" },
    { text: "people", href: "./people.html" },
    { text: "seminar", href: "./blog.html" },
    { text: "archive", href: "./archive.html" },
];

links.forEach(function (link) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
});

nav;
nav.appendChild(ul);

var button = document.createElement("button");
button.className = "bars";

var i = document.createElement("i");
i.className = "fa-solid fa-bars";

button.appendChild(i);

nav.appendChild(button);

header.appendChild(nav);

document.body.appendChild(header);
