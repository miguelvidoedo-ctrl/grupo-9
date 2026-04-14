window.onload = function(){

// INDEX
let g = document.getElementById("graficoIndex")
if(g){
new Chart(g,{
type:"bar",
data:{
labels:["Europa","Indústria","Perda"],
datasets:[{data:[110,46,18]}]
}
})
}

// IMPACTO
let s = document.getElementById("graficoSaude")
if(s){
new Chart(s,{
type:"bar",
data:{
labels:["Stress","Sono","Audição"],
datasets:[{data:[70,60,40]}]
}
})
}

let a = document.getElementById("graficoAmbiente")
if(a){
new Chart(a,{
type:"pie",
data:{
labels:["Aves","Animais","Outros"],
datasets:[{data:[50,30,20]}]
}
})
}

let e = document.getElementById("graficoEconomia")
if(e){
new Chart(e,{
type:"line",
data:{
labels:["Ano1","Ano2","Ano3","Ano4"],
datasets:[{data:[10,30,60,100]}]
}
})
}

}

// JOGO REFLEXOS

let startTime
const box = document.getElementById("box")
const startBtn = document.getElementById("start")

if(startBtn){
startBtn.onclick = function(){

box.style.display = "block"
box.style.background = "red"

setTimeout(()=>{
box.style.background = "green"
startTime = new Date().getTime()
},Math.random()*2000+1000)

}

box.onclick = function(){

let tempo = new Date().getTime() - startTime
document.getElementById("tempo").innerText = tempo + " ms"
box.style.display="none"

}
}

// CLICK GAME

function startClickGame(){

let pontos=0
let score=document.getElementById("score")

let i=setInterval(()=>{
pontos++
score.innerText=pontos
},200)

setTimeout(()=>{
clearInterval(i)
alert("Pontuação: "+pontos)
},10000)

}
