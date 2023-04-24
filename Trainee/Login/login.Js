let contas = [
    ['Antonio_Junior', '123456'],
    ['admin','admin123']
];

let n = contas.length;

function login(){
    let achou = 0;
    let = usuario = document.getElementById("email");
    let senha = document.getElementById("senha");
    
    senha=senha.value
    usuario = usuario.value

    for(let i = 0; i < n; i++){
        if(contas[i][0] == usuario){
            achou = 1;
            if(contas[i][1] == senha){
                achou = 2;
                alert('Seja Bem Vindo');
                break;
            }
            else{
                alert('Senha Incorreta!');
                break;
            }
        }
    }
    if(achou == 0){
        alert('Informe os dados corretamente');
        location.reload()
    }
    else{
        //window.location.assign("https://chat.openai.com/");
        window.location.href = "file:///C:/Users/Windows/Documents/Trainee/Deu_Certo.html"
    }
}