$(function () {
    $.getJSON("./data/publication.json", function (data) {
        var html = "";

        for (var type in data) {
            var result = '<div class="publication_type">\n';
            result += "<h1>" + type + "</h1>\n";

            publications = data[type];

            var years = [...new Set(publications.map((paper) => paper.year))];

            years.forEach(function (year) {
                var papersOfYear = publications.filter(function (paper) {
                    return paper.year === year;
                });

                result += '<p class="year">' + year + "</p>\n";
                result += '<ol class="paper_list">\n';

                papersOfYear.forEach(function (paper) {
                    result += "<li>\n";
                    result +=
                        paper.author +
                        ". (" +
                        paper.year +
                        "). " +
                        paper.title +
                        ". <em>" +
                        paper.journal +
                        "</em>, " +
                        paper.volumn +
                        '. <a href="' +
                        paper.doi +
                        '">' +
                        paper.doi +
                        "</a>\n";
                    result += "</li>\n";
                });

                result += "</ol>\n";
            });

            result += "</div>\n";
            html += result;
        }

        $("#pubList").html(html);
    });
});
