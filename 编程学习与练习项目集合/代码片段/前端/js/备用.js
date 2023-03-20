//runoo.com 有很多示例
/*------------------
替换节点
*/------------------
function rep(){
    let repNode=document.getElementById("p_del"); //得到旧元素的地址
    let newContent=document.createTextNode("this new Text"); //创建一个新的文本节点
    repNode.parentNode.replaceChild(newContent,repNode);
}
input.[1].value=input[1].value.toUpperCase();


/*------------------
创那建一个新的节点并将其加入现有节点
*/------------------
<div id="div1">
    <p id="p1">这是一个段落。</p>
<p id="p2">这是另一个段落。</p>
</div>
<script>
    //创建一个 p 标签元素节点，
    var para=document.createElement("p");
    //创建一个文本节点，内容为"这是一个新段落。
    var node=document.createTextNode("这是一个新段落。");
    //将文本节点装入 P 标签的最后一个子节点
    para.appendChild(node);
    //查找 ID 为div1的元素节点
    var element=document.getElementById("div1");
    //将刚才装入了文本节点的 P 标签装入 ID 为div1的元素节点最后一个子节点
    element.appendChild(para);
</script>

/*------------------
查看有多少种元素属性
*/------------------
let element=document.createElement("div");
let count=0;
for (index in element.style){
    count++;
}
console.log(count);