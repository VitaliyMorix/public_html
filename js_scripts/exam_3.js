//скрипт, рисующий шахматную доску на странице
buttomClickCB.onclick=function ()
{
    var x=document.createElement("canvas");
    x.setAttribute('id',"mySpace");
    x.setAttribute("height",500);
    x.setAttribute("width",500);
    document.body.append(x);

    let ctx=mySpace.getContext("2d");

    ctx.lineWidth=5;        //задание штртны контура
    ctx.fillStyle = "#FFCC33";      //задание цвета заливки
    ctx.rect(0,0,500,500);      //данные для рисования прямоугольника
    ctx.fill();     //рисование прямоугольника
    ctx.stroke();       //рисование контура


    ctx.beginPath();
    //циклы по рисованию клеток шахмотной доски
    for(let i=0;i<8;i++)
    {
        let a;
        if(i%2==0) a=1;
        else a=0;
        for(let j=a;j<8;j+=2)
        {
            ctx.lineWidth=2;
            ctx.fillStyle = "#000000";
            ctx.rect((j+1)*50,(i+1)*50,50,50);
        }
    }
    ctx.fill();

    ctx.font="40px Georgia";        //задание свойств текста - размер, шрифт
    let arr=["A","B","C","D","E","F","G","H"];      //массив букв

    let j=60, k=85;     //начальные положения обозначений
    //цикл по рислванию букв и чисел на сторонах доски
    for(let i=0;i<8;i++)
    {
        ctx.fillStyle = "#000000";
        ctx.fillText((i+1),15,k);       //рисование чисел слева
        ctx.fillText((i+1),465,k);      //рисование чисел справа

        ctx.fillText(arr[i],j,40);      //рисование букв сверху
        ctx.fillText(arr[i],j,490);     //рислвание букв снизу
        j+=50; k+=50;
    }

    ctx.beginPath();
    ctx.strokeStyle = "#000000";        //цвет внутреннего контура
    ctx.lineWidth=5;        //ширина внутреннего контура
    ctx.rect(50,50,400,400);        //параметры для рисования внутреннего контура
    ctx.stroke();       //рисование внутреннего контура
}