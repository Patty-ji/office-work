AOS.init();
const navbar=document.querySelector('.navbar');
window.addEventListener('scroll',()=> {
  navbar.classList.toggle('scrolled', window.scrollY>50);
});
const menuToggle=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.navbar ul');
menuToggle.addEventListener('click',()=> navLinks.classList.toggle('open'));
    const track=document.querySelector('.carousel-track');
    const slides=Array.from(track.children);
    const nextBtn=document.querySelector('.next');
    const prevBtn=document.querySelector('.prev');
    const dotsNav=document.querySelector('.carousel-dots');

    let current=0;
    slides.forEach((_,i)=>{
      const dot=document.createElement('span');
      dot.classList.add('dot');
      if(i===0) dot.classList.add('active');
      dot.addEventListener('click',()=>goToSlide(i));
      dotsNav.appendChild(dot);
    });
    const dots=Array.from(dotsNav.children);

    function goToSlide(index){
      current=index;
      track.style.transform=`translateX(-${100*index}%)`;
      dots.forEach(d=>d.classList.remove('active'));
      dots[index].classList.add('active');
    }

    nextBtn.addEventListener('click',()=>goToSlide((current+1)%slides.length));
    prevBtn.addEventListener('click',()=>goToSlide((current-1+slides.length)%slides.length));
