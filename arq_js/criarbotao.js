let btn = document.querySelector("#paragrafo"); 
btn.onclick = function (){
    let p = document.createElement("p");
    p.innerHTML = "Hi Lorena";
    document.body.appendChild(p);
}