window.onload = async function () {
    while (true) {
        var today = new Date();
        var anniversary = new Date(2021, 8, 30, 8, 50);
        var count = today.getTime() - anniversary.getTime();
        var day = Math.floor(count/(1000*60*60*24));
        var hours = Math.floor((count % (1000*60*60*24))/(1000*60*60));
        var minutes = Math.floor((count % (1000*60*60))/(1000*60));
        var seconds = Math.floor((count % (1000*60))/1000);
        var anni = document.getElementById("dday");
        if (isPositive(day) && isPositive(hours) && isPositive(minutes) && isPositive(seconds)) {
            anni.innerHTML = "2학기 중간고사 보는중!! 시험 결과가 잘 나오길 바래요!"
        } else {
            day = Math.abs(day) - 1
            hours = Math.abs(hours) - 1
            minutes = Math.abs(minutes) - 1
            seconds = Math.abs(seconds) - 1
            anni.innerHTML = "2학기 중간고사까지 " + day + "일 " + hours + "시간 " + minutes + "분 " + seconds + "초 ";
        }
        await sleep(1000);
    }
}
function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}
isPositive = function(num) {
    return num >= 0;
};