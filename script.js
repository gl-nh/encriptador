const text_area = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");

//let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//console.table(matrizCodigo)

function btnEncriptar() {
    const textoEncriptado = encriptar(text_area.value)
    mensaje.value = textoEncriptado
    text_area.value = "";
    mensaje.style.backgroundImage = "none";
}


function encriptar(stringEncriptado) {
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
             stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            
        }
    }
    return stringEncriptado
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(text_area.value)
    mensaje.value = textoEncriptado
    text_area.value = "";

}


function desencriptar(stringDesencriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
              stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptado
}    


