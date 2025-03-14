document.querySelector(".menususu-button").addEventListener("mouseover", function() {
    document.querySelector(".menususu").classList.toggle("active"); // 메뉴 열기/닫기
});

// document.querySelector(".close-button").addEventListener("mouseover", function() {
//     document.querySelector(".menususu").classList.remove("active"); 
// });

document
.querySelector(".menususu")
.addEventListener("mouseover", function () {
  this.classList.add("active"); // 메뉴 열기
});

document
.querySelector(".menususu")
.addEventListener("mouseleave", function () {
  this.classList.remove("active"); // 메뉴 닫기
});