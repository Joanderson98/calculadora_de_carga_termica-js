let metrosQ = document.getElementById("metrosQ")
let QtdPessoas = document.getElementById("QtdPessoas")
let QtdEletro = document.getElementById("QtdEletro")
let resultado = document.getElementById("resultado")
let n = document.getElementById("n")

let parede = document.getElementById("parede")

let btusP = 800;
let btuS = 600;


function calcular(){
    console.log("testando")

    let Xmetros = metrosQ.value;
    let Xpessoas = QtdPessoas.value;
    let Xeletro = QtdEletro.value;

    let n1 = (Xmetros * btuS) + (Xpessoas * check(checkB)) + (Xeletro * check(checkB)); 
    if(n1 > 60000){
        n.innerHTML = `Será necessário aparelhos de capacidades equivaletes a ${n1}BTUs. `
    }else if(n1 > 48000){
        n.innerHTML = "Será necessário um ar de 60000Btus."
    } else if(n1 > 38000){
        n.innerHTML = "Será necessário um ar de 48000Btus."
    } else if(n1 > 32000){
        n.innerHTML = "Será necessário um ar de 36000Btus."
    }else if(n1 > 30000){
        n.innerHTML = "Será necessário um ar de 30000Btus."
    }else if(n1 > 26000){
        n.innerHTML = "Será necessário um ar de 28000Btus."
    }else if(n1 > 20000){
        n.innerHTML = "Será necessário um ar de 24000Btus."
    }else if(n1 > 14000){
        n.innerHTML = "Será necessário um ar de 18000Btus."
    }else if(n1 > 10000){
        n.innerHTML = "Será necessário um ar de 12000Btus."
    }else if(n1 > 8000){
        n.innerHTML = "Será necessário um ar de 9000Btus."
    }else if(n1 > 2000){
        n.innerHTML = "Será necessário um ar de 7000Btus."
    }else{
        n.innerHTML = "Verifique se os campos acima estão preenchidos"
    }
  


}



let comprimento = document.getElementById('comprimento')
let largura = document.getElementById('largura')
let metroq = document.getElementById("Mq")

function calcM(){
    console.log("Calculando...")

    let larg = largura.value;
    let comp = comprimento.value;

    let total = larg * comp;

    if (total == 0) {
        metroq.innerHTML = "Por favor preencha os campos acima" 
    } else {
        metroq.innerHTML = "Sua área é equivalente a " + total + " metros quadrados." 
    }

}

let checkB = document.getElementById('parede');

checkB.addEventListener('change', check)

function check(checkB){
    if(checkB.checked == true){
        return btusP
    }else{
        return btuS
    } 
}