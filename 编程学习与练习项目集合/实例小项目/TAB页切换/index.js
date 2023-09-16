//boxId是一个包含了指定类名下全部子元素的数组对象，console.log(boxId):
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// 0:div.box
// 1:div.box
// 2:div.box
// 3:div.box
// 4:div.box
// length:5
let boxId = document.getElementsByClassName('box');

//返回与指定的选择器组匹配的文档中的元素列表,此列表为NodeList对象，
// 它不是一个数组，但可用forEach()进行迭代或用Array.from()将期转为数组；下方为console.log(list_elements);
// NodeList(5) [li.active, li, li, li, li]
// 0:li.active
// 1:li
// 2:li
// 3:li
// 4:li
// length:5
// [[Prototype]:NodeList
let list_elements = document.querySelectorAll('.nav>li');
function tab(index) {
    let tp;
    for (let i = 0; i < boxId.length; i++) {
            //在for循环中将boxId数组下标与html中的   onclick="tab(1);"传入的实参进行循环比较，
        if (i === index) {
            // 如果下标与实参一致则将对应的html元素进行显示
            boxId[i].style.display = 'inline-block';

            //html元素使用的类名来设定css样式，
            // Array.from静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例
            tp=Array.from(list_elements);
            tp[i].className='active';
        } else {
            boxId[i].style.display = 'none';
            //上方的tp简写形式，注意这里的className为.nav>li组合式也可使用
            Array.from(list_elements)[i].className='.nav>li';
            //通过console.log对上一句验证：输出为：classname:.nav>li
            console.log("classname:"+Array.from(list_elements)[i].className);
        }
    }
}
