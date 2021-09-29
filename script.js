document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

function saibaMaisIntro() {
    window.open("https://github.com/Felipe-Baz")
}

function saibaMaisProj1() {
    window.open("https://github.com/Felipe-Baz/WineClassification")
}

function saibaMaisProj2() {
    window.open("https://github.com/Felipe-Baz/PacMan")
}

function saibaMaisProj3() {
    window.open("https://github.com/Felipe-Baz/BreastCancer")
}

document.querySelector("#qtde").addEventListener("change", atualizarpreco)
document.querySelector("#js").addEventListener("change", atualizarpreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarpreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarpreco)
document.querySelector("#prazo").addEventListener("change", function (){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas.`
    atualizarpreco()
})

function atualizarpreco() {
    const qtde = document.querySelector("#qtde").value
    const temJs = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    let preco = qtde * 100;
    if (temJs) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo * 0.1;
    preco *= 1 + taxaUrgencia
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

