console.log("welcome to spotify");
let songindex =0;


let arrsongs=[
    {songname:'let me love you',filePath:"1.mp3",coverPath:"1.jpg"},
    {songname:'let me love you',filePath:"2.mp3",coverPath:"2.jpg"},
    {songname:'let me love you',filePath:"3.mp3",coverPath:"3.jpg"},
    {songname:'let me love you',filePath:"4.mp3",coverPath:"4.jpg"},
    {songname:'let me love you',filePath:"5.mp3",coverPath:"5.jpg"},
    {songname:'let me love you',filePath:"6.mp3",coverPath:"6.jpg"},
    {songname:'let me love you',filePath:"7.mp3",coverPath:"7.jpg"},
    {songname:'let me love you',filePath:"8.mp3",coverPath:"8.jpg"},
    {songname:'let me love you',filePath:"9.mp3",coverPath:"9.jpg"},
    {songname:'let me love you',filePath:"10.mp3",coverPath:"10.jpg"}
]
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
audioElement.play();
masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
gif.style.opacity=1;
    }else{
audioElement.pause()
masterplay.classList.remove('fa-pause-circle');
masterplay.classList.add('fa-play-circle');
gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
const makeallplay = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
element.classList.add("fa-play-circle");
    })
}
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        index = parseInt(e.target.id);
        console.log(index)
        makeallplay()
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src=`songs/${index}.mp3`;
       console.log(audioElement.src)
        audioElement.currentTime=0;
        masterplay.classList.remove('fa-play-circle');
masterplay.classList.add('fa-pause-circle');
        audioElement.play()
    })
})



