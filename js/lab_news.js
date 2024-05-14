$(function () {
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  $.getJSON("./data/lab_news.json", function (data) {
    var years = Object.keys(data).sort().reverse();
    var html = "";

    $.each(years, function (index, year) {
      var newsData = data[year];
      newsData.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });

      html += "<h3>" + year + "</h3><ul>";

      $.each(newsData, function (key, value) {
        var one_news = "<li>";

        var date = new Date(value.date);
        var monthIndex = date.getMonth();
        var monthName = monthNames[monthIndex];
        var day = date.getDate();

        one_news +=
          '<div class="date"><p>' +
          monthName +
          "</p>" +
          "<p>" +
          day +
          "</p></div>";
        one_news += '<div class="content">' + value.content + "</div>";

        one_news += "</li>";
        html += one_news;
      });
      html += "</ul>";
    });

    $("#newsList").html(html);
  });
});
