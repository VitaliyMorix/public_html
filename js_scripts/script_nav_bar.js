const boxes2 = document.querySelectorAll('.sideBarAmin');

  window.addEventListener('scroll', checkAxis);
  checkAxis(); // shows initial box(es) 

  function checkAxis() {
    const triggerBottom2 = (window.innerHeight/5*4);
    
    boxes2.forEach(axis => {
      const boxTop2 = sideBarAmin.getBoundingClientRect().top;
      
      if(boxTop2 < triggerBottom2) {
        sideBarAmin.classList.add('show');
      }
    })
  }