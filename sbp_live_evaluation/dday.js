window.onload = function () {
    var today = new Date();
    var anniversary = new Date(2021, 8, 30);
    var count = today.getTime() - anniversary.getTime();
    count = Math.ceil(count/(24*60*60*1000));
    count = Math.abs(count)
    var anni = document.getElementById("dday");
    anni.innerHTML = "2학기 중간고사 까지 " + count + "일";
}