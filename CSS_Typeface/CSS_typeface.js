
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







  window.requestAnimationFrame(draw)
}
