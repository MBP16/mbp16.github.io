var Links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //   alist[i].style.color = color;
        //   i = i + 1;
        // }
        $('a').css('color', color);
    }
}
var Body = {
    setColor:function (color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function (color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

window.onload = function (){
    DarkTheme = localStorage.getItem("darkTheme");
    if (DarkTheme === "true"){
        Body.setBackgroundColor('black');
        Body.setColor('pink');
        document.getElementById('night_day' ).setAttribute('style', 'background-color: black; color: yellow')
        document.getElementById('night_day' ).setAttribute('value', '☀️ 라이트 모드')
        localStorage.setItem("darkTheme", "true");
        Links.setColor('deepskyblue');
    } else if (DarkTheme === "false"){
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = '🌙 다크 모드';
        localStorage.setItem("darkTheme", "false");
        document.getElementById('night_day' ).setAttribute('style', 'background-color: white; color: black')
        document.getElementById('night_day' ).setAttribute('value', '🌙 다크 모드')
        Links.setColor('deepskyblue');
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        Body.setBackgroundColor('black');
        Body.setColor('pink');
        document.getElementById('night_day' ).setAttribute('style', 'background-color: black; color: yellow')
        document.getElementById('night_day' ).setAttribute('value', '☀️ 라이트 모드')
        localStorage.setItem("darkTheme", "true");
        Links.setColor('deepskyblue');
    } else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = '🌙 다크 모드';
        localStorage.setItem("darkTheme", "false");
        document.getElementById('night_day' ).setAttribute('style', 'background-color: white; color: black')
        document.getElementById('night_day' ).setAttribute('value', '🌙 다크 모드')
        Links.setColor('deepskyblue');
    }
}

function nightDayHandler(self){
    DarkTheme = localStorage.getItem("darkTheme");
    var target = document.querySelector('body');
    if(self.value === '🌙 다크 모드'){
        Body.setBackgroundColor('black');
        Body.setColor('pink');
        self.value = '☀️ 라이트 모드';
        document.getElementById('night_day' ).setAttribute('style', 'background-color: black; color: yellow')
        localStorage.setItem("darkTheme", "true");

        Links.setColor('deepskyblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = '🌙 다크 모드';
        localStorage.setItem("darkTheme", "false");
        document.getElementById('night_day' ).setAttribute('style', 'background-color: white; color: black')

        Links.setColor('deepskyblue');
    }
}