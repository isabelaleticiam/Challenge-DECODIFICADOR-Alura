let substituicoes = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];


mostrarImagem();

function mostrarImagem() {
    output.innerHTML = '<div class="interface__em__branco"><img id="imagem__principal" class="imagem__principal" src="pngwing.com.png" alt="menina com lupa"><div class="texto__em__branco"><p class="mensagem__em__branco">Você não digitou nada...</p><p class="mensagem__em__branco">Seu texto aparecerá aqui.</p></div>';
}


function criptografar() {
        let textarea = document.getElementById("textarea").value;
        let output = document.getElementById("interface__output");
        substituicoes.forEach(([descriptografado, criptografado]) => {
            textarea = textarea.replace(new RegExp(descriptografado, 'g'), criptografado)
        });
        output.innerHTML = textarea + '<div class="interface__copiar"><button class="botao__copiar" id="botao__copiar" onclick="copiarTexto()">Copiar <img src="content_copy_24dp_294B29_FILL0_wght400_GRAD0_opsz24.png" alt="símbolo copiar"> </button></div>';
        if (textarea.trim() == "") {
        mostrarImagem();
    }
}
  
function descriptografar() {
    let textarea = document.getElementById("textarea").value;
    let output = document.getElementById("interface__output");
    substituicoes.forEach(([descriptografado, criptografado]) => {
        textarea = textarea.replace(new RegExp(criptografado, 'g'), descriptografado)
    });
    output.innerHTML = textarea + '<div class="interface__copiar"><button class="botao__copiar" id="botao__copiar" onclick="copiarTexto()">Copiar <img src="content_copy_24dp_294B29_FILL0_wght400_GRAD0_opsz24.png" alt="símbolo copiar"> </button></div>';
    if (textarea.trim() == "") {
        mostrarImagem();
    }
}


function copiarTexto() {
    let output = document.getElementById("interface__output");
    let textoParaCopiar = output.firstChild.textContent;

    navigator.clipboard.writeText(textoParaCopiar);
    alert("Texto copiado para a área de transferência.");
}
