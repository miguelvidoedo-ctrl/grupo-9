// GRÁFICOS

function criarGrafico(id, tipo, labels, dados){

let canvas = document.getElementById(id)

if(canvas){

new Chart(canvas,{
type: tipo,
data:{
labels: labels,
datasets:[{data: dados}]
},
options:{
responsive:true,
plugins:{legend:{display:false}}
}
})

}

}

// gráficos

criarGrafico("grafico1","bar",
["Europa","Indústria","Cidades"],
[20,46,30]
)

criarGrafico("grafico2","pie",
["Tráfego","Indústria","Construção","Outros"],
[40,25,20,15]
)

criarGrafico("grafico3","line",
["Stress","Insónia","Perda auditiva"],
[60,45,18]
)


// 🎮 MINI JOGO (reduzir ruído)

let ruido = 100

function reduzirRuido(){

ruido -= 10

if(ruido < 0) ruido = 0

document.getElementById("nivelRuido").innerText = ruido

if(ruido === 0){
alert("Conseguiste eliminar o ruído!")
}

}
