
var tl= gsap.timeline()
tl.from("#loader img",{
    scale: 0,
    duration:1,
    delay:0.2,
    opacity:0
})
.from("#loader",{
    top:0,
    delay:0.3,
    duration:1
})
var btn = document.querySelector(".home");
btn.addEventListener("click", function(){
    document.querySelector("#kk").style.opacity = "1";
    document.querySelector("#main").style.opacity = "0" 
})