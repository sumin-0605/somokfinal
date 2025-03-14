window.addEventListener("scroll", function () {
    const box = document.querySelector(".mbu"); // 움직이는 요소
    const bottomElement = document.querySelector(".mbubcbtm"); // 바닥 요소
    const container = document.getElementById("container");

    const scrollPos = window.scrollY;
    const stopPosition = container.offsetTop + 300; // 고정 시작 위치
    const bottomPosition = bottomElement.getBoundingClientRect().top; // 바닥 요소의 화면 내 위치
    const boxHeight = box.offsetHeight; // 박스 높이

    document.getElementById("scroll-position").innerText = `현재 스크롤 위치: ${scrollPos}px`;

    // if (scrollPos >= stopPosition && bottomPosition > boxHeight + 50) {
    //     box.style.position = "fixed";
    //     box.style.top = "100px"; // 화면 상단에 고정
    //     box.style.opacity = "1"; // 다시 나타나도록 설정
    //     box.style.visibility = "visible"; // 숨겨져 있던 경우 다시 보이게 설정
    // } else if (bottomPosition <= boxHeight + 50) {
    //     box.style.opacity = "0"; // 서서히 사라지도록 설정
    //     setTimeout(() => {
    //         box.style.visibility = "hidden"; // 완전히 사라지도록 설정
    //     }, 500); // 0.5초 후 visibility 숨김 적용
    // } else {
    //     box.style.position = "sticky";
    //     box.style.top = "10rem"; // 기본 위치 복귀
    //     box.style.opacity = "1"; // 다시 나타나도록 설정
    //     box.style.visibility = "visible"; // 다시 나타나도록 설정
    // }
});
