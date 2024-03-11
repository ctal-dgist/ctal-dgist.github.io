$(function () {
    $.getJSON("./data/people.json", function (data) {
        var professor = data["Professor"];
        var Ph = data["Ph.D"];
        var MS = data["MS"];
        var Intern = data["Intern"];
        var Alumni = data["Alumni"];

        function addPeople(people, target) {
            var container = document.getElementById(target);
            var ul = document.createElement("ul");

            people.forEach(function (person) {
                var li = document.createElement("li");
                li.innerHTML = "";

                if (target !== "Alumni") {
                    var photo = person.photo;
                    if (photo == undefined) {
                        photo = "person.png";
                    }
                    photo = "../assets/people/" + photo;
                    li.innerHTML += `<img src="${photo}"></img>`;
                }
                li.innerHTML += person.name + " (" + person.name_eng + ")";

                if (target === "Alumni") {
                    li.innerHTML += "<br/>" + person.position;
                    if (person.current) {
                        li.innerHTML += ", " + person.current;
                    }
                }

                ul.appendChild(li);
            });

            container.appendChild(ul);
        }

        addPeople(professor, "professor");
        addPeople(Ph, "Ph");
        addPeople(MS, "MS");
        addPeople(Intern, "Intern");
        addPeople(Alumni, "Alumni");
    });
});
