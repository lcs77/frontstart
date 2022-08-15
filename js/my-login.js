const formulario = document.querySelector("#form-login");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("eventListner");
    fazLogin();
});

function fazLogin() {
    //fas o post para o backend
    var xhr = new XMLHttpRequest();
    xhr.open("post", "http://localhost:8080/cadastro/login", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', '*/*');
    const requestJson = criaJson();
    console.log(requestJson);
    xhr.send(requestJson);
    console.log(xhr);
    //debug - investigação
    xhr.onreadystatechange = function () {
        console.log("aqui");
        console.log(this.responseText);
       if(xhr.readyState==4){//4=siginifica que esta pronto
            if( this.responseText == '' ||this.responseText == null || this.responseText == undefined){
                alert("email ou senha incorretos ou usuario não cadastrado");
            }else{
                var usuario = JSON.parse(this.response);
                alert("Bem vindo "+ usuario.nome);
                window.location.replace("../paginaFuncionario/paginaperfil.html");
            }    
       } 
       
    
    };
}


function criaJson(){
    const email = document.querySelector("#email");
    const senha = document.querySelector("#password");

    return JSON.stringify({
        email: email.value,
        senha: senha.value

    })
}