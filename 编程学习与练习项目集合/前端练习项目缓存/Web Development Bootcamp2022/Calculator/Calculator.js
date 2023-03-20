const express=require("express");
const app=express();

//设置/目录的路由
app.get("/",function (req,res){
    //__dirname 此为系统常量，表示当前代码文件所在的目录，当文件位于远程服务器，测试服等不同的系统下的不同目录时使用，不必重写每个环境
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function (req,res){
    let num1=Number(req.body.n1);
    let num2=Number(req.body.n2);
    let result =num1+num2;
    res.send("The result instanceof The calculation is" +result);
});

//listen写在最后，其中端品号一般会写在一个变量里
app.listen(3000, function (){
    //将字符串以反单引号括起来（1左边的），可在其中使用${}进行字符串拼接,{}内的字符串不用""
    console.log("server is running on port 3000");
});
