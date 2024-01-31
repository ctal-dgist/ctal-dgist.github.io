$(function () {
    $.getJSON("./data/seminar.json", function (data) {
        var years = Object.keys(data).sort().reverse(); // Get sorted list of years
        var html = "";

        $.each(years, function (index, year) {
            html += '<p class="year">' + year + "</p>\n";
            html += '<ol class="seminar_list">\n';

            if (data[year] && data[year].length > 0) {
                data[year] = data[year].sort(
                    (a, b) => new Date(b.date) - new Date(a.date)
                );

                $.each(data[year], function (i, f) {
                    if (f.name.length < 3) {
                        f.name = f.name + "&nbsp;&nbsp;&nbsp;&nbsp;";
                    }
                    const today = new Date();
                    let day = today.getDate();
                    let month = today.getMonth() + 1;
                    let year = today.getFullYear();
                    let currentDate = `${year}.${month}.${day}`;

                    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
                    const diffInDays = Math.round(
                        (new Date(f.date) - new Date(currentDate)) / oneDay
                    );
                    const isthisweek = diffInDays >= 0 && diffInDays < 7;
                    if (isthisweek) {
                        html +=
                            "<li style='font-weight: bold'>" +
                            "<span class='speaker'> " +
                            f.name +
                            "</span>&nbsp;&nbsp;&nbsp;&nbsp;" +
                            f.paper +
                            "</li>\n";
                    } else {
                        html +=
                            "<li>" +
                            "<span class='speaker'> " +
                            f.name +
                            "</span>&nbsp;&nbsp;&nbsp;&nbsp;" +
                            f.paper +
                            "</li>\n";
                    }
                });
            } else {
                html += "<p>No seminars found for " + year + ".</p>\n";
            }

            html += "</ol>\n";
        });

        $("#seminarList").html(html);
    });
});
