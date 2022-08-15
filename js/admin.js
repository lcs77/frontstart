const formulario1 = document.querySelector("form");



formulario1.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("eventListner")
    cadastro();
    // limpar();
});

function cadastro() {
    //fas o post para o backend
    var xh = new XMLHttpRequest();
    xh.open("post", "http://localhost:8080/salvaAdmin", true);
    xh.setRequestHeader('Content-Type', 'application/json');
    xh.setRequestHeader('Accept', '*/*');
    const requestJson = criaJson1();
    console.log(requestJson);
    xh.send(requestJson);
    console.log(xh);
    //debug - investigação
    xh.onreadystatechange = function () {
        console.log(this.readyState);//debug - investigação
        console.log(this.status);    
        console.log(this);    
       
    };

    
   
}
function criaJson1(){
    const Inome = document.querySelector(".nome");
    const Iemail = document.querySelector(".email");
    const Imatricula = document.querySelector(".matricula");
    const Isenha = document.querySelector(".senha");
  
    
    return JSON.stringify({
        nome: Inome.value,
        email: Iemail.value,
        matricula: Imatricula.value,
        senha: Isenha.value,
        
    })
}
function limpar() {
    Inome.value ="";
    Iemail.value ="";
    Imatricula.value ="";
    Isenha.value ="";

    
};
