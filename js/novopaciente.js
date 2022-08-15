const form= document.querySelector("form");


formulario.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("eventListner")
    cadastrar();
    limpar();
});
function cadastrar() {
    var xhr = new XMLHttpRequest();
    xhr.open("post", "http://localhost:3306/salvaPaciente", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');
    const requestJson = criaJson();
    console.log(requestJson);
    xhr.send(requestJson);
    console.log(xhr);
    //debug - investigação
    xhr.onreadystatechange = function () {
        console.log(this.readyState);//debug - investigação
        console.log(this.status);    
        console.log(this);    
       
    };

    
   
}
function criaJson(){
    const Inome = document.querySelector(".nome");
    const Icpf = document.querySelector(".cpf");
    const Irg = document.querySelector(".rg");
    const Idatanascimento = document.querySelector(".datanascimento");
    const Isex = document.querySelector(".sex");
    const Iendereco = document.querySelector(".endereco");
    const Inumero = document.querySelector(".numero");
    const Ibairro = document.querySelector(".bairo");
    const Iciadade = document.querySelector(".cidade");
    const Iestado = document.querySelector(".estado");
    const Icep = document.querySelector(".cep");
    const Itelefone = document.querySelector(".telefone");
    
    return JSON.stringify({
        nome: Inome.value,
        cpf: Icpf.value,
        rg: Irg.value,
        datanascimeto: Idatanascimento.value,
        sex: Isex.value,
        endereco: Iendereco.value,
        numero: Inumero.value,
        bairro: Ibairro.value,
        cidade: Iciadade.value,
        estado: Iestado.value,
        cep: Icep.value,
        telefone: Itelefone.value,
        
    })
}
function limpar() {
    Inome.value ="";
    Icpf.value="";
    Irg.value ="";
    Idatanascimento.value ="";
    Isex.value;
    Iendereco.value ="";
    Inumero.value ="";
    Ibairro.value ="";
    Iciadade.value ="";
    Iestado.value ="";
    Icep.value ="";
    Itelefone.value ="";
    
};

