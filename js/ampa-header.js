var lastScrollPosition = 0;

// 뷰포트의 넓이를 확인하여 1000px 이상인 경우에만 scroll 이벤트를 등록합니다.
if (window.innerWidth >= 1000) {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".apma-header-wrap");
    var currentScrollPosition = window.scrollY;

    if (currentScrollPosition < lastScrollPosition) {
      header.classList.remove("closed");
    } else {
      header.classList.add("closed");
    }

    lastScrollPosition = currentScrollPosition;
  });
}
