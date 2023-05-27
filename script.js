const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const imagenMuneco = document.querySelector(".imagenmuneco");
const contenedorMuneco = document.querySelector(".contenedormuneco");
const contenedorResultado = document.querySelector(".contenedorresultado");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    imagenMuneco.classList.add("ocultar");
    contenedorMuneco.classList.add("ocultar");
}

function encriptar(stringEncriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada

}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    

}

function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }


    }
    return stringDesencriptada
    
}


function copiar() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function limpiar() {
    document.querySelector(".text-area").value = "";
    document.querySelector(".mensaje").value = "";
    document.querySelector(".seccion2").classList.remove('ocultar');
    document.querySelector(".mensaje").classList.remove('ocultar');
    document.querySelector(".btn-copiar").disabled = true;

}




















