
function CalcularGeral() {

    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").selectedIndex;
    let ano = document.getElementById("ano").value;

    let nascimento = new Date(ano, mes, dia);

    let hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    let diferencaMes = hoje.getMonth() - nascimento.getMonth();

    if (
        diferencaMes < 0 ||
        (diferencaMes === 0 &&
            hoje.getDate() < nascimento.getDate())
    ) {
        idade--;
    }

    document.getElementById("resultado").innerHTML =
        "Idade: " + idade + " anos";
}