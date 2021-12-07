const boxes2 = document.querySelectorAll('#axis');

  window.addEventListener('scroll', checkAxis);
  checkAxis(); // shows initial box(es) 

  function checkAxis() {
    const triggerBottom2 = (window.innerHeight/5*4);
    
    boxes2.forEach(axis => {
      const boxTop2 = axis.getBoundingClientRect().top;
      
      if(boxTop2 < triggerBottom2) {
        axis.classList.add('active');
      } else {
        axis.classList.remove('active');
      }
    })
  }