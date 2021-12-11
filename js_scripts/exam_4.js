let a=0;
buttomClickA.onclick=function ()
  {
    a++;
    let div=document .createElement('div');
    div.className="divStyleTest";
    div.innerHTML='reset click!!!!'+' - '+a;
    document.body.append(div);
  }

buttomClickD.onclick=function ()
{
  $('.divStyleTest').remove();
  $('canvas').remove();
  a=0;
}