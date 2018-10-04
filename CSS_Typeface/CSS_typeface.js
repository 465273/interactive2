
let MainContainer = document.querySelector('.MainContainer')


window.requestAnimationFrame(draw)

let scrollPosition = 0
window.addEventListener('scroll',function(e){
    scrollPosition = window.scrollY
})

function draw(){
  let visibleSize = 330
  let distanceFromEdgeOfScreen = (window.innerHeight - visibleSize)/2
   MainContainer.style.clipPath =
   "inset(" + (scrollPosition + distanceFromEdgeOfScreen) + "px 0 " + (MainContainer.clientHeight - scrollPosition - window.innerHeight + distanceFromEdgeOfScreen) + "px 0)"

   if(scrollPosition > 1500){
     MainContainer.style.opacity = 1 - (scrollPosition - 1100)*0.0015;

  } else {
     MainContainer.style.opacity = 1;
  }





  window.requestAnimationFrame(draw)
}
