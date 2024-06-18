// 현재 페이지의 title을 가져옵니다.
var currentTitle = document.title;

// Create header element
var header = document.createElement("header");

// Create nav element
var nav = document.createElement("nav");

// Create ul element to hold the navigation links
var ul = document.createElement("ul");

// Array of link texts and hrefs
var links = [
  { text: "Home", href: "./index.html" },
  { text: "About", href: "./about.html" },
  { text: "Publication", href: "./publication.html" },
  { text: "Project", href: "./project.html" },
  { text: "People", href: "./people.html" },
  { text: "Seminar", href: "./seminar.html" },
  { text: "Contact", href: "./contact.html" },
];

// Loop through the links array to create li and a elements
links.forEach(function (link) {
  var li = document.createElement("li");
  var a = document.createElement("a");

  // Set the href and text for the anchor element
  a.href = link.href;
  a.textContent = link.text;

  // Check if the link text matches the current page title
  if (("CTAL" === currentTitle) & (link.text === "Home")) {
    a.className = "active";
  } else if (link.text === currentTitle) {
    a.className = "active";
  }

  // Append the anchor to the list item
  li.appendChild(a);

  // Append the list item to the unordered list
  ul.appendChild(li);
});

// Append the ul to the nav element
nav.appendChild(ul);

// Append the nav to the header element
header.appendChild(nav);

// Finally, append the header to the body
document.body.appendChild(header);

// 버튼 클릭 이벤트 추가
document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector("header");
  var ul = document.querySelector("header ul");

  // Header의 ::before 가상 요소를 클릭하는 이벤트 핸들러 추가
  header.addEventListener("click", function (event) {
    if (window.getComputedStyle(header, "::before").display !== "none") {
      // ul의 "show" 클래스를 토글하여 보이기/숨기기
      ul.classList.toggle("show");
    }
  });
});
