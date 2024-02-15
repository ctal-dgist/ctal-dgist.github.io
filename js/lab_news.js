$(function () {
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    $.getJSON('./data/lab_news.json', function (data) {
        var year = Object.keys(data).sort().reverse()[0];
        var newsData = data[year];
        newsData.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });
        var html = '<ul>';

        $.each(newsData, function (key, value) {
            var one_news = '<li>';

            var date = new Date(value.date);
            var monthIndex = date.getMonth();
            var monthName = monthNames[monthIndex];
            var day = date.getDate();

            one_news += '<div class="date"><p>' + monthName + '</p>' + '<p>' + day + '</p></div>';

            var content = value.content;

            one_news += '<div class="content">' + content + '</div>';

            one_news += '</li>';
            html += one_news;
        });
        html += '</ul>';
        $('#newsList').html(html);
    });
});
