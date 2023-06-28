// console.log(document.getElementById("portugues"));
// console.log(document.querySelector("#portugues"));
// console.log(document.getElementsByTagName("button"));
// console.log(document.querySelector("button"));

// document.querySelector("#ingles").innerHTML = "English";
console.log(document)

let botao = document.createElement("button"); //Cria o elemento
botao.innerHTML = "Japonês"; // Texto do botão
botao.setAttribute("id", "japones");
botao.setAttribute("class", "botao");
botao.onclick = function(){
 alert("こんにちは世界");
}
document.body.appendChild(botao); // Associa o elemento ao HTML