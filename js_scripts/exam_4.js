let a=0;
buttomClick.onclick=function ()
  {
    a++;
      let div=document .createElement('div');
      div.className="divStyleTest";
      div.innerHTML='reset click!!!!'+' - '+a;
      document.body.append(div);
  }