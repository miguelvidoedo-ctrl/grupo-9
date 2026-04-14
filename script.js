// FUNÇÃO SEGURA PARA GRÁFICOS

function criarGrafico(id, config){
  const el = document.getElementById(id)
  if(el){
    new Chart(el, config)
  }
}

// GRÁFICOS

criarGrafico("graficoSaude", {
  type: "bar",
  data: {
    labels: ["Stress","Sono","Audição"],
    datasets: [{ data: [70,60,40] }]
  }
})

criarGrafico("graficoAmbiente", {
  type: "pie",
  data: {
    labels: ["Aves","Animais","Outros"],
    datasets: [{ data: [50,30,20] }]
  }
})

criarGrafico("graficoEconomia", {
  type: "line",
  data: {
    labels: ["Ano1","Ano2","Ano3","Ano4"],
    datasets: [{ data: [10,30,60,100] }]
  }
})

criarGrafico("graficoComparacao", {
  type: "bar",
  data: {
    labels: ["Antes","Depois"],
    datasets: [{ data: [80,50] }]
  }
})

// QUIZ

function resposta(correta){
  const r = document.getElementById("resultado")
  if(!r) return
  r.innerText = correta ? "✅ Correto" : "❌ Errado"
}

// SLIDER

const slider = document.getElementById("slider")

if(slider){
  slider.addEventListener("input", function(){
    const v = slider.value
    document.getElementById("nivel").innerText = v + " dB"
    document.getElementById("barraNivel").style.width = v + "%"
  })
}

// JOGO

let ruido = 100

function reduzir(){
  const el = document.getElementById("ruido")
  if(!el) return

  if(ruido > 0){
    ruido -= 10
    el.innerText = ruido
  }

  if(ruido <= 0){
    alert("🎉 Conseguiste!")
  }
}
