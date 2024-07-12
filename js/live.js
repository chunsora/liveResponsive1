// Noto Sans CJK KR CDN
// var koreanFont = new FontFace('Noto Sans CJK KR', 'url(https://cdn.jsdelivr.net/npm/noto-sans-cjk-kr@latest/fonts/NotoSansCJKkr-Regular.otf)');
// koreanFont.load().then(function (loadedFont) {
//   document.fonts.add(loadedFont);
//   document.body.style.fontFamily = "'Noto Sans CJK KR', sans-serif";
// });

// mobile menu - 사이트 네비게이션 열기, 닫기 함수 
// openNav() - id="myNav" 가져와 너비 100%설정 - 열기
// closeNav() - id="myNav" 가져와 너비0%설정 - 닫기
// getElementById() 메서드 - 특정 ID를 가진 요소 선택하는 기능 

// javascript
function openNav() {
document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
document.getElementById("myNav").style.width = "0%";
}

// jQuery 
// function openNav() {
//   $("#myNav").css("width","100%");
// }
// function closeNav() {
//   $("#myNav").css("width","0%");
// }


// jQuery 
$(function () {
  // layer popup
  $(".layerPopup").on("click", function () {
    $(".popup, .bg").fadeIn();
  });
  $(".close, .bg").on("click", function () {
    $(".popup, .bg").fadeOut();
  });
});