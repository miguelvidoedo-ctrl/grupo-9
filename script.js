// =====================
// GRÁFICOS IMPACTO
// =====================

const saude = document.getElementById("graficoSaude")

if(saude){
new Chart(saude,{
type:"bar",
data:{
labels:["Stress","Sono","Audição"],
datasets:[{
data:[70,60,40]
}]
}
})
}

const ambiente = document.getElementById("graficoAmbiente")

if(ambiente){
new Chart(ambiente,{
type:"pie",
data:{
labels:["Aves","Animais","Outros"],
datasets:[{
data:[50,30,20]
}]
}
})
}

const economia = document.getElementById("graficoEconomia")

if(economia){
new Chart(economia,{
type:"line",
data:{
labels:["Ano1","Ano2","Ano3","Ano4"],
datasets:[{
data:[10,30,60,100]
}]
}
})
}

const comparacao = document.getElementById("graficoComparacao")

if(comparacao){
new Chart(comparacao,{
type:"bar",
data:{
labels:["Antes","Depois"],
datasets:[{
data:[80,50]
}]
}
})
}


// =====================
// QUIZ
// =====================

function resposta(correta){

let r = document.getElementById("resultado")

if(correta){
r.innerText = "✅ Correto"
}else{
r.innerText = "❌ Errado"
}

}


// =====================
// SLIDER
// =====================

const slider = document.getElementById("slider")

if(slider){

slider.addEventListener("input", function(){

let v = slider.value

document.getElementById("nivel").innerText = v + " dB"

document.getElementById("barraNivel").style.width = v + "%"

})

}


// =====================
// JOGO CLICK
// =====================

let ruido = 100

function reduzir(){

if(ruido > 0){

ruido -= 10

document.getElementById("ruido").innerText = ruido

}

if(ruido <= 0){

alert("🎉 Conseguido!")

}

}
