function addition(i){ 
    woman=parseInt(document.getElementById("qty"+i).innerText)
    woman=document.getElementById("qty"+i).innerHTML = woman+1;
    let prix=Number(document.getElementById('prix'+i).textContent)
    document.getElementById('the-total').innerText=prix+parseInt(document.getElementById('the-total').innerText)
    if(woman===0) document.getElementById("price"+i).innerHTML = "0$";
    else document.getElementById("price"+i).innerHTML =( prix*(woman)+"$");
}

function diminution(i){
    woman=parseInt(document.getElementById("qty"+i).innerText)
    if(Number(woman)<=0)
    return{}
    woman=document.getElementById("qty"+i).innerHTML = woman-1
    let prix=Number(document.getElementById('prix'+i).textContent)
    document.getElementById("price"+i).innerHTML =( prix*(woman)+"$");
    document.getElementById('the-total').innerText=parseInt(document.getElementById('the-total').innerText)-prix
}

let x = document.querySelectorAll('a.like i');
for(let i of x)
    i.addEventListener("click",(e) =>{(e.target.style.color=="pink") ? e.target.style.color="black":e.target.style.color="pink"});

let y = document.querySelectorAll('a.unlike i');
for(let i of y)
    i.addEventListener("click",(e) =>{e.target.parentNode.parentNode.parentNode.parentNode.remove()})
    
remove=(i)=>
{
    woman=parseInt(document.getElementById("qty"+i).innerText)
    let prix=Number(document.getElementById('prix'+i).textContent)

    document.getElementById('the-total').innerText=parseInt(document.getElementById('the-total').innerText)-prix*woman;
}