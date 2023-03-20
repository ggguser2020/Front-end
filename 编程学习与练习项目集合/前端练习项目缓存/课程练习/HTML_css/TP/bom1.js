let y=true;
function myConfirm(){
    if (y) {
        y="........";
    }else {
        y="取消";
    }
    console.log(y);
    document.getElementById("text").innerHTML=y;
}

console.log(y);