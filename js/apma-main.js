// gsap.to(".carnect-ppf-main-text-title", {
//   scrollTrigger: {
//     trigger: ".carnect-ppf-main-wrap",
//     markers: true,
//     start: "top top",
//     end: "22% 20%",
//     scrub: true,
//   },
//   fontSize: "200",
// });

// APMA 폰트 사이즈 중앙에서 작아지기
function updateFontSize() {
  let fontSize;
  if (window.innerWidth>=1000) {
    fontSize = "10rem"; // 뷰포트 너비가 1000px 이상인 경우
  } else if (window.innerWidth >= 500 && window.innerWidth < 1000) {
    fontSize = "6rem"; // 뷰포트 너비가 1000px 미만인 경우
  } else {
    fontSize = "3rem";
  }
  // GSAP를 사용하여 폰트 크기를 적용합니다.
  gsap.to(".apma-main-menu-title", { fontSize: fontSize });
}

// 초기에 한 번 호출하여 현재 뷰포트 크기에 맞는 폰트 크기를 설정합니다.
// updateFontSize();

// 뷰포트 크기가 변경될 때마다 폰트 크기를 업데이트합니다.
window.addEventListener("resize", updateFontSize);

// 스크롤 트리거로 애니메이션을 트리거할 경우, 뷰포트 크기에 따라 다른 폰트 크기를 적용합니다.
let tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "0 top", // 첫 번째 애니메이션의 start 값
    end: "5% 8%",
    scrub: true,
    markers: false,
    onUpdate: updateFontSize, // 스크롤 위치가 변경될 때마다 폰트 크기 업데이트
  },
});

//APMA 고정시키기
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "5.3% top", // 두 번째 애니메이션의 start 값
    end: "8.5% top",
    scrub: true,
    markers: false,
  },
});

tl2.to(".apma-main-menu-title", {
  y: "-130%",
});

//   세번쨰 애니메이션 메뉴 날라오는 것

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "650px top", // 세 번째 애니메이션의 start 값
    end: "850px top",
    scrub: true,
    markers: false,
  },
});

tl3.to(".apma-main-menu01, .apma-main-menu03", {
  x: "0%",
});



let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "650px top", // 세 번째 애니메이션의 start 값
    end: "850px top",
    scrub: true,
    markers: false,
  },
});

tl4.to(".apma-main-menu02", {
  x: "0%",
});



// 5 
let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "950px top", // 여섯 번째 애니메이션의 start 값
    end: "1150px top",
    scrub: true,
    markers: false,
  },
});

tl5.to(".apma-main-menu02, .apma-main-menu-title", {
  x: "8%",
  opacity: 0,
});

// 6
let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "950px top", // 여섯 번째 애니메이션의 start 값
    end: "1150px top",
    scrub: true,
    markers: false,
  },
});

tl6.to(".apma-main-menu01, .apma-main-menu03", {
  x: "-21%",
  opacity: 0,
});

// 미술관 소개 멘트 1
let tl16 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "18% center", // 여섯 번째 애니메이션의 start 값
    end: "26% center",
    scrub: true,
    markers:false,
  },
});

tl16.to(".apma-intro01", {
  opacity: 1,
});

// 미술관 소개 멘트 2
let tl15 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "25% center", // 여섯 번째 애니메이션의 start 값
    end: "35% center",
    scrub: true,
    markers: false,
  },
});

tl15.to(".apma-intro02", {
  opacity: 1,
});

// 배경이미지 밝아짐 

let tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "35% 80%",
    end: "45% 100%",
    scrub: true,
    markers: false,
  },
});

tl7.to(".apma-main-img", {
  filter: "brightness(0.9)",
});

// // 헤더 보임
// let tl8 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".apma-main-wrap",
//     start: "30% 80%",
//     end: "40% 100%",
//     scrub: true,
//     markers: false,
//   },
// });

// tl8.to(".apma-header-wrap", {
//   opacity: 1,
// });

// 이미지 작아짐
let tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "40% 80%",
    end: "50% 100%",
    scrub: true,
    markers: false,
  },
});

tl9.to(" .apma-main-img", {
  width: "55%", // 너비를 50%로 줄입니다.
  height: "100%",
});

// span길어짐
let tl12 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "55% 80%",
    end: "65% 100%",
    scrub: true,
    markers: false,
  },
});

tl12.to(".apma-explain01-top, .apma-explain01-bottom", {
  width: "90%", 
});


// 두번쨰 이미지 보임
let tl10 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "65% 70%", // 일곱 번째 애니메이션의 start 값
    end: "85% bottom",
    scrub: true,
    markers: false,
  },
});

tl10.to(" .apma-main-img02", {
  opacity: 1,
  // borderRadius: 50,
});

// 두번쨰 span 보임
let tl13 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "68% 60%", // 일곱 번째 애니메이션의 start 값
    end: "85% bottom",
    scrub: true,
    markers: false,
  },
});

tl13.to(".apma-explain02-top, .apma-explain02-bottom", {
  width: "90%",
});


// 세번쨰 이미지 보임
let tl11 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "90% center", // 일곱 번째 애니메이션의 start 값
    end: "100% bottom",
    scrub: true,
    markers: false,
  },
});

tl11.to(" .apma-main-img03", {
  opacity: 1,
  // borderRadius: 50,
});

// 세번쨰 이미지 보임
let tl14 = gsap.timeline({
  scrollTrigger: {
    trigger: ".apma-main-wrap",
    start: "95% center", // 일곱 번째 애니메이션의 start 값
    end: "100% center",
    scrub: true,
    markers: false,
  },
});

tl14.to(".apma-explain03-top, .apma-explain03-bottom", {
  width: "90%",
  // borderRadius: 50,
});



