const textoArea = document.querySelector(".textoarea");
const mensaje = document.querySelector(".mensaje");

function btnen (){
    const textoencrip = encriptar(textoArea.value)
    mensaje.value = textoencrip
    textoArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar (Encriptado){
    let matrizCod = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u","ufat"]]
    Encriptado = Encriptado.toLowerCase();

    for (let i = 0; i < matrizCod.length; i++){
        if (Encriptado.includes(matrizCod[i][0])){
            Encriptado = Encriptado.replaceAll(matrizCod[i][0], matrizCod[i][1]);
        }
    
    }

    return Encriptado
}

function btndes (){
    const textodesencrip = desencriptar (textoArea.value)
    mensaje.value = textodesencrip
    textoArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar (Desencriptado){
    let matrizCod = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u","ufat"]]
     Desencriptado = Desencriptado.toLowerCase();

    for (let i = 0; i < matrizCod.length; i++){
        if (Desencriptado.includes(matrizCod[i][1])){
            Desencriptado = Desencriptado.replaceAll(matrizCod[i][1], matrizCod[i][0]);
        }
    
    }
    return Desencriptado
}

function btncopiar (){
    let copy = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(copy);
}