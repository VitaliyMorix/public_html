const navBar = document.querySelectorAll('.fix_nav_bar');

window.addEventListener('scroll', checkBoxes);
checkNavBar(); // shows initial box(es) 

function checkNavBar() {
  const triggerBottom = (window.innerHeight / 5 * 40);
  
  navBar.forEach(fix_nav_bar => {
    const boxTop = navBar.getBoundingClientRect().top;
    
    if(boxTop < triggerBottom) {
      box.classList.add('addShow');
    } else {
      box.classList.remove('addShow');
    }
  })
}