var valueP = document.querySelector('#valueP')
var valueA = document.querySelector('#valueA')
var btnC = document.querySelector('#btnC')

function calcular(){

    var valP = Number(valueP.value)
    var valA = Number(valueA.value)
    var txtResult = document.querySelector('#txtResult')
    var imc = valP/(valA*valA)
    var res = document.querySelector('#res')

    if(imc<=18){
        res.style.color = 'red'
        res.innerHTML = `IMC: ${imc.toFixed(2)}`
        txtResult.innerHTML = "Você está abaixo do peso, seu Frango!"
    }
    else if(imc<=25){
        res.style.color = 'green'
        res.innerHTML = `IMC: ${imc.toFixed(2)}`
        txtResult.innerHTML = "Você está no seu peso ideal, Parabéns!"
    }
    else if(imc>25){
        res.style.color = 'yellow'
        res.innerHTML = `IMC: ${imc.toFixed(2)}`
        txtResult.innerHTML = "Você está acima do peso ideal, Frangão!"
    }
}