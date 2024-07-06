const btnCodificar = document.querySelector(".btn-codificar");
const txtCodificar = document.querySelector(".codificar");
const btnDescodificar = document.querySelector(".btn-descodificar");
const alerta = document.querySelector(".texto-alerta");
const resposta = document.querySelector(".avaliar");
const conteudo = document.querySelector(".cartao-conteudo");
const btnCopiar = document.querySelector(".btn-copiar");


btnCodificar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtCodificar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "Esse campo não pode ser vazio";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "Esse campo não deve ter acentos ou caracteres especiais";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "O texto deve ser escrito apenas com letras minúsculas";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resposta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        conteudo.remove();
    }

});

btnDescodificar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtCodificar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "Esse campo não pode ser vazio";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "Esse campo não deve ter acentos ou caracteres especiais";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else if(texto !== texto.toLowerCase()){
        alerta.style.background = "#0A3871";
        alerta.style.color = "#FFFF";
        alerta.style.fontWeight = "800";
        alerta.textContent = "O texto deve ser escrito apenas com letras minúsculas";

        setTimeout(()=>{
            alerta.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resposta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        conteudo.remove();
    }

});

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = resposta;
    copiar.select();
    document.execCommand("copy");
});