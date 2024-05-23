// Conversão de temperaturas

const numInput = document.getElementById("num")
const toFahr = document.getElementById("toFahr")
const toCelc = document.getElementById("toCelc")
const result = document.getElementById("painel_result")
let temperature

function converter(){
    if(toFahr.checked){
        temperature = numInput.value
        let resultado = ((temperature-32)/1.8).toFixed(1)
        result.textContent = `${resultado}°C`
    }

    else if(toCelc.checked){
        temperature = numInput.value
        let resultado = ((temperature*1.8)+32).toFixed(1)
        result.textContent = `${resultado}°F`

    }

    else{
        result.textContent = "Selecione uma unidade"
    }
}