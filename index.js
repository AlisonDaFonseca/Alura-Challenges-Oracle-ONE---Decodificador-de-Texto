function criptografar(){
    const texto = document.getElementById('texto').value;
    let mensagemCriptografada = '';

    for(let i = 0; i < texto.length; i++){
        if(texto[i] === 'e'){
            mensagemCriptografada += 'enter';
        }else if(texto[i] === 'i'){
            mensagemCriptografada += 'imes';
        }else if(texto[i] === 'a'){
            mensagemCriptografada += 'ai';
        }else if(texto[i] === 'o'){
            mensagemCriptografada += 'ober';
        }else if(texto[i] === 'u'){
            mensagemCriptografada += 'ufat';
        }else{
            mensagemCriptografada += texto[i]
        }
    }

    mostrarTela2();
    renderizaTexto(mensagemCriptografada);
    
}

function mostrarTela2(){
    const tela1 = document.querySelector('.tela1');
    const tela2 = document.querySelector('.tela2');

    tela1.classList.add('esconde');
    tela2.classList.remove('esconde');
}
function renderizaTexto(txt){
    let texto = document.querySelector('.com-texto span');
    texto.innerHTML = `${txt}`;
}
function descriptografar(){
    const texto = document.getElementById('texto').value;

   let texto1 = texto.replace(/enter/g, "e");
   let texto2 = texto1.replace(/imes/g, "i");
   let texto3 = texto2.replace(/ai/g, "a");
   let texto4 = texto3.replace(/ober/g, "o");
   let textoDescriptografado = texto4.replace(/ufat/g, "u");
   console.log(textoDescriptografado)

    mostrarTela2();
    renderizaTexto(textoDescriptografado);
}

function copiar(){
    const textoCopiado = document.querySelector('.com-texto span').innerHTML;
    navigator.clipboard.writeText(textoCopiado);
   
}