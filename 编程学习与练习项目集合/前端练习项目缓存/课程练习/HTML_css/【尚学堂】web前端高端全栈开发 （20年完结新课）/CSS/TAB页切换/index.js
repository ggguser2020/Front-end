
let boxId=document.getElementsByClassName('box');
console.log(boxId);
function tab(index){
    for (let i=0;i<boxId.length;i++){
        if (i===index){
            boxId[i].style.display='inline-block';
        }else{
            boxId[i].style.display='none';
        }
    }
}
