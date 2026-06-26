const container = document.getElementById("produtos");

produtos.forEach(p => {

const div = document.createElement("div");
div.className = "produto";

div.innerHTML = `
<h2>${p.nome}</h2>
<p>Preço: R$ ${p.preco}</p>
<button onclick="comprar('${p.nome}','${p.preco}','${p.pix}')">
Comprar Agora
</button>
`;

container.appendChild(div);

});

function comprar(nome, preco, pix) {
localStorage.setItem("pedido", JSON.stringify({nome, preco, pix}));
window.location.href = "checkout.html";
}
