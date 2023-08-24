const playPause=document.querySelector('.playPause')
const reset=document.getElementById('reset')

var sec=0;
var min=0;
var hr=0;

let ls;
let lm;
let lh;

let action='play';
let interval;

function stopWatch(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hr++;
        }
    }

    if(sec<10){
        ls="0"+sec;
    }
    else{
        ls=sec;
    }
    if(min<10){
        lm="0"+min;
    }
    else{
        lm=min;
    }
    if(hr<10){
        lh="0"+hr;
    }
    else{
        lh=hr;
    }
    document.getElementById('time').innerHTML= lh + ':' + lm +':'+ ls;
}

playPause.addEventListener('click',function(){
    if(action==='play'){
        action='pause';
        interval=window.setInterval(stopWatch,1000)
        playPause.innerHTML=`&#x275A;&#x275A;`
        playPause.setAttribute('id','pause')
    }
    else{
        action='play';
        clearInterval(interval)
        playPause.innerHTML=`&#9658;`
        playPause.setAttribute('id','play')
    }
})

reset.addEventListener('click',function(){
    sec=0;
    min=0;
    hr=0;
    clearInterval(interval)
    action='play';
    playPause.innerHTML=`&#9658;`
    playPause.setAttribute('id','play')
    document.getElementById('time').innerHTML="00:00:00";
})