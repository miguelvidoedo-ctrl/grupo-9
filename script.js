new Chart(document.getElementById("grafico1"),{

type:"bar",

data:{
labels:["Europa","Indústria","Perda auditiva"],
datasets:[{
data:[110,46,18]
}]
}

})

new Chart(document.getElementById("grafico2"),{

type:"pie",

data:{
labels:["Tráfego","Indústria","Construção","Outros"],
datasets:[{
data:[40,25,20,15]
}]
}

})
