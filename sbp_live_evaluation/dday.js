window.onload = async function () {
    while (true) {
        var today = new Date();
        var anniversary = new Date(2021, 8, 29, 8, 50);
        var count = today.getTime() - anniversary.getTime();
        var day = Math.floor(count/(1000*60*60*24));
        var hours = Math.abs(Math.floor((count % (1000*60*60*24))/(1000*60*60)));
        var minutes = Math.abs(Math.floor((count % (1000*60*60))/(1000*60)));
        var seconds = Math.abs(Math.floor((count % (1000*60))/1000));
        var anni = document.getElementById("dday");
        if (isPositive(day)) {
            anni.innerHTML = "2학기 중간고사 보는중!! 시험 결과가 잘 나오길 바래요!"
        } else {
            day = Math.abs(day)
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