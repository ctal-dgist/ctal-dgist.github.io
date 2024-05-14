$(function () {
  let seminarData = {}; // 세미나 데이터 저장할 객체

  // 데이터 로드 및 초기 렌더링
  $.getJSON("./data/seminar.json", function (data) {
    seminarData = data; // 전체 데이터 저장
    renderSeminars(seminarData); // 초기 전체 데이터 렌더링
  });

  // 검색 이벤트 핸들러
  $("#searchInput").on("input", function () {
    const searchTerm = $(this).val().toLowerCase();
    filterSeminars(searchTerm);
  });

  // 세미나 필터링 및 렌더링
  function filterSeminars(searchTerm) {
    const filteredData = {};
    if (searchTerm) {
      Object.keys(seminarData).forEach((year) => {
        filteredData[year] = seminarData[year].filter((seminar) =>
          seminar.paper.toLowerCase().includes(searchTerm)
        );
      });
    } else {
      Object.assign(filteredData, seminarData); // 검색어 없을 시 전체 데이터
    }
    renderSeminars(filteredData);
  }

  // 세미나 정보 렌더링 함수
  function renderSeminars(data) {
    let html = "";
    Object.keys(data)
      .sort((a, b) => b - a)
      .forEach((year) => {
        // 년도 내림차순 정렬
        data[year].forEach((seminar) => {
          let className = "seminar_card";
          let seminarDate = new Date(seminar.date);
          let isthisweek = isThisWeek(seminarDate);

          if (isthisweek) {
            className += " thisweek";
          }

          let titleHtml = seminar.link
            ? `<a href="${seminar.link}" class="title">${seminar.paper}</a>`
            : `<p class="title">${seminar.paper}</p>`;

          html += `<div class="${className}">
          <div class="date">${formatDate(seminarDate)}</div>
          <div class="info">
            ${titleHtml}
            <p class="speaker"><i class="fa-regular fa-user"></i> ${
              seminar.name
            }</p>
          </div>
        </div>`;
        });
      });
    $("#seminarList").html(html);
  }

  // 날짜 형식 변환
  function formatDate(date) {
    const day = date.getDate();
    const monthNames = [
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
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `<p class="day">${day}</p>
    <p>${month}, ${year}</p>`;
  }

  // 이번 주인지 확인
  function isThisWeek(date) {
    const today = new Date();
    const endOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    return date >= today && date < endOfWeek;
  }
});
