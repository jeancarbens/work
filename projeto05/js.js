let display = document.getElementById('calculadora');
let numero = "";
let operador = "";
function apende(value){
    numero += value;
    display.innerHTML = numero;

}
function operadorFunc(operador){
    if(numero === "" && operador !== "-")return;
    numero += operador;
    display.innerHTML = numero;
}
function calcular(){
    try{
        let resultado = eval(numero);
        if(!Number.isFinite(resultado)){
            resultado = resultado.toFixed(2);
        }
        numero = resultado;
        display.innerHTML = resultado;

    }catch(error){
        display.innerHTML = "Erro";
        numero = "";
    }
}
function limpar(){
    numero = "";
    display.innerHTML = "";
}
function tab(){
    var t1 = document.getElementById("txa1")
    var txta1 = Number(t1.value)
    var tabx = document.getElementById("tab")
    tabx.innerHTML = ""
    for(var c = 1 ; c <= 10 ;c+=1){
        tabx.innerHTML += `<p>${c} x ${txta1} = ${c * txta1}</p>`
        
        

    }}