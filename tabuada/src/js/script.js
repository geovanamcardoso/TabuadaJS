var btnGerar = document.querySelector('#btnGerar');
btnGerar.addEventListener('click', tabuada);

function tabuada(){
    var txtnum = document.getElementById('txtnum')

    var resp = document.getElementById('resp')

    if(txtnum.value.length == 0){
        alert(`[ERRO] Digite um número para gerar a tabuada!`)
    }
    else{  
        
        num = Number(txtnum.value)
        resp.innerHTML = ``

        for(let c = 0; c <= 10; c++){

        resul = num * c
        var tabu = document.createElement('option')
        tabu.innerHTML = `${num} x  ${c} = ${resul}`
        tabu.value = `tab${c}`
        resp.appendChild(tabu)

        }
    }

    
}