$(function () {
  $.getJSON("./data/people.json", function (data) {
    var professor = data["Professor"];
    var Ph = data["Ph.D"];
    var MS = data["MS"];
    var Intern = data["Intern"];
    var Alumni = data["Alumni"];

    function addPeople(people, target) {
      var container = document.getElementById(target);

      people.forEach(function (person) {
        // Create a container div for each person
        var personDiv = document.createElement("div");
        personDiv.className = "person";

        // Add photo if not Alumni
        if (target !== "Alumni") {
          var photo = person.photo;
          if (photo === undefined) {
            photo = "person.png";
          }
          photo = "../assets/people/" + photo;
          var img = document.createElement("img");
          img.src = photo;
          img.alt = person.name;
          personDiv.appendChild(img);
        }

        // Create a div for text content
        var textDiv = document.createElement("div");
        textDiv.className = "person-info";

        // Add name
        var name = document.createElement("p");
        name.textContent = person.name + " (" + person.name_eng + ")";
        textDiv.appendChild(name);

        // Add blog link if it exists
        if (person.blog && person.blog.trim() !== "") {
          var blogLink = document.createElement("a");
          blogLink.href = person.blog;
          blogLink.textContent = "Blog";
          blogLink.target = "_blank";
          textDiv.appendChild(blogLink);
        }

        // Add personal homepage link if it exists
        if (person.personal && person.personal.trim() !== "") {
          var personalLink = document.createElement("a");
          personalLink.href = person.personal;
          personalLink.textContent = "Personal Homepage";
          personalLink.target = "_blank";
          textDiv.appendChild(personalLink);
        }

        // If Alumni, add position and current info
        if (target === "Alumni") {
          var position = document.createElement("p");
          position.textContent = person.position;
          if (person.current) {
            position.textContent += ", " + person.current;
          }
          textDiv.appendChild(position);
        }

        // Append the text div to the person div
        personDiv.appendChild(textDiv);

        // Append the person div to the container
        container.appendChild(personDiv);
      });
    }

    addPeople(professor, "professor");
    addPeople(Ph, "Ph");
    addPeople(MS, "MS");
    addPeople(Intern, "Intern");
    addPeople(Alumni, "Alumni");
  });
});
