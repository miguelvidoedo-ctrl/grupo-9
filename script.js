// animação ao aparecer

const cards = document.querySelectorAll(".card")

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = 1
entry.target.style.transform = "translateY(0)"

}

})

})

cards.forEach(card => {

card.style.opacity = 0
card.style.transform = "translateY(40px)"
card.style.transition = "all 0.8s"

observer.observe(card)

})


// contador animado

const counter = document.getElementById("counter")

if(counter){

let value = 0
let target = 1247

function update(){

if(value < target){

value += 7

counter.innerText = value

setTimeout(update,10)

}

}

update()

}
