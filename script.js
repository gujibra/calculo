
const deletar = () => resultado.innerText = null



function numero(i){
    const elements = document.querySelectorAll('#item')
    let resultado = document.querySelector('#resultado')

    let a = elements[i].value
    resultado.innerText += a
    
}

function elementos(i){
    let resultado = document.querySelector('#resultado')
    const elements = document.querySelectorAll('#elemento')

    let b = elements[i].value
    resultado.innerText += b
}

function back() {
    let resultado = document.querySelector('#resultado').innerText

    resultado = resultado.substring(0, resultado.length -1)
    document.querySelector('#resultado').innerText = resultado

}

function calcular() {
    let resultado = document.querySelector('#resultado').innerText
    document.querySelector('#resultado').innerText = eval(resultado)
}


 





