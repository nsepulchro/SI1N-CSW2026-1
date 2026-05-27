function calcularIdd() {
    let ano = (document.getElementById("ano").value);

    let anoAtual = new Date().getFullYear();

    let idade = anoAtual - ano;

    document.getElementById("resultado").innerHTML =
        "Sua idade é: " + idade;        
}