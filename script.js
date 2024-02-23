function somaValor(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value); 
    if (n1 != "" && n2 != "") {
        let resultado = n1 + n2;
        document.getElementById("valor").innerHTML = resultado;
    }else{
        /*let resultado = "Insira um valor valido";
        document.getElementById("valor").innerHTML = resultado;*/
        alert("Insira um valor valido")
    }
}
function subValor(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value); 
    let resultado = n1 - n2;
    
    document.getElementById("valor").innerHTML = resultado;
}
function multiValor(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value); 
    let resultado = n1 * n2;
    
    document.getElementById("valor").innerHTML = resultado;
}
function divValor(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value); 
    var resultado = n1 / n2;
    
    document.getElementById("valor").innerHTML = resultado;
}

/*function mudaEscuro(){
    var body = document.body;

    body.style.background = "#393939";
    body.style.color = "white";
}
function mudaClaro(){
    var body = document.body;

    body.style.background = "#e9e9e9";
    body.style.color = "black";
}*/