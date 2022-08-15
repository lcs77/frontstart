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
    xhr.open("post", "http://localhost:8080/salvaAdmin", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');
    const requestJson = criaJson1();
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
