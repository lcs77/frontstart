const formulario = document.querySelector("form");

pegarTabelaDeDados();





formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("eventListner")
    cadastrar();
    limpar();
});

function cadastrar() {
    //fas o post para o backend
    var xhr = new XMLHttpRequest();
    xhr.open("post", "http://localhost:8080/salvaProntuario", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');
    const requestJson = criaJson();
    console.log(requestJson);
    xhr.send(requestJson);
    console.log(xhr);
    //debug - investigação
    xhr.onreadystatechange = function () {
        this.responseText;
        console.log(this.readyState);//debug - investigação
        console.log(this.status);    
        console.log(this);    
       
    };
}

function pegarTabelaDeDados() {
    //fas o post para o backend
    var xhr = new XMLHttpRequest();
    xhr.open("get", "http://localhost:8080/pegarProntuario", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');

    xhr.send();
    console.log(xhr);
    //debug - aguarda resposta do java
    xhr.onreadystatechange = function () {
        console.log(this.responseText);
        var resp  = criaTabela(this.responseText);
        console.log(resp);
    
        new gridjs.Grid({
            columns: ["nome", "cpf", "dataNascimento","tabagismo"],
            search: true,
            data: resp
          }).render(document.getElementById("tabelaResposta"));
    };
}

function criaTabela(json){
    var resposta = JSON.parse(json);
    return resposta;
}

function criaJson(){
    const Inome = document.querySelector(".nome");
    const Icpf = document.querySelector(".cpf");
    const Idatanascimento = document.querySelector(".datanascimento");
    const Iexercicios = document.querySelector(".exercicios");
    const Ialimentacao = document.querySelector(".alimentacao");
    const Itabagismo = document.querySelector(".tabagismo");
    const Ialcool = document.querySelector(".alcool");
    const Idiabetes = document.querySelector(".diabetes");
    const Ihipertencao = document.querySelector(".hipertencao");
    const Ialergia = document.querySelector(".medicacaoControlada");
    const IpOrtopedicos = document.querySelector(".pOrtopedicos");
    const IpCardiacos = document.querySelector(".pCardiacos");
    const Imedicacaocontrolada = document.querySelector(".medicacaoControlada");
    const Iareamedicamentos = document.querySelector(".area-medicamentos");
    const Ianotacoesadicionais = document.querySelector(".form-control");
    return JSON.stringify({
        nome: Inome.value,
        cpf: Icpf.value,
        datanascimeto: Idatanascimento.value,
        exercicios: Iexercicios.value,
        alimentacao: Ialimentacao.value,
        tabagismo: Itabagismo.value,
        alcool: Ialcool.value,
        diabetes: Idiabetes.value,
        hipertencao: Ihipertencao.value,
        alergia: Ialergia.value,
        pOrtopedicos: IpOrtopedicos.value,
        pCardiacos: IpCardiacos.value,
        medicacaocontrolada: Imedicacaocontrolada.value,
        areamedicamentos: Iareamedicamentos.value,
        anotacoesadicionais: Ianotacoesadicionais.value
    })
}
function limpar() {
    Inome.value ="";
    Icpf.value="";
    Idatanascimento.value ="";
    Iexercicios.value ="";
    Ialimentacao.value;
    Itabagismo.value ="";
    Ialcool.value ="";
    Idiabetes.value ="";
    Ihipertencao.value ="";
    Ialergia.value ="";
    IpOrtopedicos.value ="";
    IpCardiacos.value ="";
    Imedicacaocontrolada.value ="";
    Iareamedicamentos.value ="";
    Ianotacoesadicionais.value ="";
};
