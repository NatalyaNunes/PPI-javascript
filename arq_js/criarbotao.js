let btn = document.querySelector("#paragrafo"); 
btn.onclick = function (){
    let p = document.createElement("p");
    let quantidade = document.getElementsByTagName("p").length;
    p.innerHTML = "Parágrafo " + (quantidade + 1);
    document.body.appendChild(p);
}