let card = document.querySelector(".card")
let icon = document.querySelector("i")

card.addEventListener("dblclick", function(){
    icon.style.transform = ("translate(-50% ,-50%) scale(1)")
    icon.style.opacity = 0.8


setTimeout(function ()  {
    icon.style.opacity = 0;
}, 1000);

setTimeout(() => {
    icon.style.transform = ("translate(-50% ,-50%) scale(1)")
}, 2000);

})