$(function () {
    $.getJSON("./data/seminar.json", function (data) {
        var years = Object.keys(data).sort().reverse(); // Get sorted list of years
        var html = "";

        $.each(years, function (index, year) {
            html += '<p class="year">' + year + "</p>\n";
            html += '<ol class="seminar_list">\n';

            if (data[year] && data[year].length > 0) {
                data[year].sort((a, b) => new Date(a.date) - new Date(b.date));

                $.each(data[year], function (i, f) {
                    html +=
                        "<li>" +
                        f.paper +
                        "<span class='speaker'> " +
                        f.name +
                        "</span></li>\n";
                });
            } else {
                html += "<p>No seminars found for " + year + ".</p>\n";
            }

            html += "</ol>\n";
        });

        $("#seminarList").html(html);
    });
});
