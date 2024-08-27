const msgError = `<p class="msgError bold">Ningún mensaje fue encontrado</p><p>Ingresa el texto que deseas encriptar o desencriptar</p>`;
function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function desencriptar(textoEncriptado) {
    return textoEncriptado.replace(/enter/g, 'e')
                          .replace(/imes/g, 'i')
                          .replace(/ai/g, 'a')
                          .replace(/ober/g, 'o')
                          .replace(/ufat/g, 'u');
}

document.getElementById('encriptarBtn').addEventListener('click', function() {
    const texto = document.getElementById('inputTexto').value.trim();
    const resultadoDiv = document.getElementById('resultado');
    
    if (texto === "") {
        resultadoDiv.innerHTML = msgError
        document.getElementById('copiarBtn').style.display = 'none';
    } else {
        const textoEncriptado = encriptar(texto);
        resultadoDiv.innerHTML = `${textoEncriptado}<br><button id="copiarBtn">Copiar</button>`;
        document.getElementById('copiarBtn').style.display = 'inline-block';
    }
});

document.getElementById('desencriptarBtn').addEventListener('click', function() {
    const textoEncriptado = document.getElementById('inputTexto').value.trim();
    const resultadoDiv = document.getElementById('resultado');

    if (textoEncriptado === "") {
        resultadoDiv.innerHTML = msgError
        document.getElementById('copiarBtn').style.display = 'none';
    } else {
        const textoOriginal = desencriptar(textoEncriptado);
        resultadoDiv.innerHTML = `${textoOriginal}<br><button id="copiarBtn">Copiar</button>`;
        document.getElementById('copiarBtn').style.display = 'inline-block';
    }
});

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'copiarBtn') {
        const texto = document.getElementById('resultado').innerText.split('\n')[0];
        navigator.clipboard.writeText(texto).then(function() {
            alert('Texto copiado al portapapeles');
        }, function(err) {
            alert('Error al copiar el texto: ', err);
        });
    }
});
