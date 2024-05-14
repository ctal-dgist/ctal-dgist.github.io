$(function () {
  $.getJSON("./data/seminar.json", function (data) {
    var html = "";
    var years = Object.keys(data).sort((a, b) => b - a); // 년도를 내림차순으로 정렬

    $.each(years, function (index, year) {
      $.each(data[year], function (i, seminar) {
        let seminarDate = new Date(seminar.date);
        let today = new Date();
        let isthisweek =
          seminarDate >= today &&
          seminarDate < new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        let className = isthisweek ? "seminar_card thisweek" : "seminar_card";

        // 날짜 구성요소 추출
        let day = seminarDate.getDate(); // 일
        let monthNames = [
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
        let month = monthNames[seminarDate.getMonth()]; // 월 이름으로
        let year = seminarDate.getFullYear(); // 년도

        let titleHtml = seminar.link
          ? `<a href="${seminar.link}" class="title">${seminar.paper}</a>`
          : `<p class="title">${seminar.paper}</p>`;

        html += `<div class="${className}">

            <div class="date">
              <p class="day">${day}</p>
              <p>${month}, ${year}</p>
            </div>
            <div class="info">
              ${titleHtml}
              <p class="speaker"><i class="fa-regular fa-user"></i> ${seminar.name}</p>
            </div>

        </div>`;
      });
    });
    $("#seminarList").html(html);
  });
});
