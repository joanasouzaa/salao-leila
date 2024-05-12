let conteudo = ""
let nome = ""

function login_page(){
    nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var primeira_vez = document.getElementById("primeira_vez").value;
    var dt_nascto = document.getElementById("idade").value;
    var email = document.getElementById("email").value;


    let dataAtual = new Date();
    let new_dt_nascto = new Date(dt_nascto)
    let diferenca = dataAtual - new_dt_nascto;
    let idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));

    conteudo = "Nome: " + nome + "\n" +
                   "Telefone: " + telefone + "\n" +
                   "Primeira Vez: " + primeira_vez + "\n" +
                   "Data Nascimento: " + dt_nascto + "(" + idade + " anos)\n" + 
                   "E-mail: " + email

    localStorage.setItem("conteudo", conteudo);
    localStorage.setItem("nome", nome);
}

function agendamento(){
    var procedimento = document.getElementById("procedimento").value;
    var data = document.getElementById("data").value;
    var horario = document.getElementById("horario").value;

    conteudo = localStorage.getItem("conteudo")
    nome = localStorage.getItem("nome")

    conteudo = + "\n" + conteudo + "\n" +
               "Procedimento: " + procedimento + "\n" +
               "Data: " + data + "\n" + 
               "Horário: " + horario + "\n" +
               "----------------------------------------------------"

    const blob = new Blob([conteudo], { type: 'text/plain' });

    const link = document.createElement('a');
    link.download = "agendamento_" + nome + ".txt";

    link.href = window.URL.createObjectURL(blob);
    link.click();
    window.URL.revokeObjectURL(link.href);
}