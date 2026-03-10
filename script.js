// SCROLL ANIMATION

function reveal(){

let reveals = document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight
let elementTop = reveals[i].getBoundingClientRect().top
let elementVisible = 100

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll", reveal)


// CHART

const ctx = document.getElementById('noiseChart')

if(ctx){

new Chart(ctx, {

type: 'bar',

data: {

labels: [
'Expostos a ruído na Europa',
'Trabalhadores industriais expostos',
'Trabalhadores com perda auditiva'
],

datasets: [{

label: 'Percentagem',

data: [20,46,18],

borderWidth:1

}]

},

options: {

responsive:true,

plugins:{

legend:{display:false}

},

scales:{

y:{beginAtZero:true}

}

}

})

}
