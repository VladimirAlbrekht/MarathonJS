const slides = document.querySelectorAll('.slide')


for(const slide of slides){
 
    slide.addEventListener('click', ()=> {
        removeClass()
       slide.classList.add('slide_active')
    }) 
  
}
function removeClass (){
    slides.forEach((slide)=>{
        slide.classList.remove('slide_active')
    })
}

