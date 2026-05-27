function calcular() {
    var nu_1 = document.getElementById("tx01")
    var nu_2 = document.getElementById("tx02")
    var n1 = Number(nu_1.value)
    var n2 = Number(nu_2.value)
    var m = document.getElementById("obj").value
    var res = document.getElementById("res")
    if (m === "soma"){
        res.innerHTML = n1 + n2
    }else if ( m === "substração"){
        res.innerHTML = n1 - n2

        }else if ( m === "divisão"){
            res.innerHTML = n1 / n2
        }else if ( m === "elevado"){
            res.innerHTML = n1 ** n2
        }else if ( m === "mult"){
            res.innerHTML = n1 * n2
        }
}
function tab(){
    var t1 = document.getElementById("txa1")
    var txta1 = Number(t1.value)
    var tabx = document.getElementById("tab")
    tabx.innerHTML = ""
    for(var c = 1 ; c <= 10 ;c+=1){
        tabx.innerHTML += `<p>${c} x ${txta1} = ${c * txta1}</p>`
        
        

    }
}