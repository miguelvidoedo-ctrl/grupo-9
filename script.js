// GRÁFICOS

function grafico(id,data){

let c = document.getElementById(id)

if(c){

new Chart(c,{
type:"bar",
data:{
labels:["Ruído","Indústria","Saúde"],
datasets:[{data:data}]
}
})

}

}

grafico("g1",[110,46,18])
grafico("g2",[40,25,20])

// JOGO

let ruido = 50

function aumentar(){
ruido += Math.floor(Math.random()*10)

if(ruido > 85){
alert("Perdeste")
ruido = 50
}

document.getElementById("ruido").innerText = ruido
}

function reduzir(){
ruido -= Math.floor(Math.random()*10)

if(ruido < 0) ruido = 0

document.getElementById("ruido").innerText = ruido
}
