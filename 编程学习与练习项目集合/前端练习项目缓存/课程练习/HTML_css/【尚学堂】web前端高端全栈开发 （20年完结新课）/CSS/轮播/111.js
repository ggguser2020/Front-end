let imgArr = ["1.jpg", "2.webp", "3.webp"];
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let img = document.querySelector(".img");
let li_list=document.querySelectorAll(".ul_circle>li");

let i = 0;

left.onclick = function () {
    i--;
    if (i < 0) {
        i = imgArr.length - 1;
    }
    img.src = "img/" + imgArr[i];
}
left.onclick=function

right.onclick = function () {
    i++;
    if (i > imgArr.length - 1) {
        i = 0;
    }
    img.src = "img/" + imgArr[i];
    fn(li_list[i]);
}
function fn(index){
    for (let i=0;i<imgArr.length;i++) {
        if (i ==index){
            img.src = "img/" + imgArr[i];
            
            li_list[i].style.borderColor="rgba(0,0,0,.4)";
            li_list[i].style.backgroundColor="rgba(255,255,255,.3)";
        }else{
            li_list[i].style.borderColor="rgba(255,255,255,.3)";
            li_list[i].style.backgroundColor="rgba(0,0,0,.4)";
        }
        
    }
}



