const pedido = JSON.parse(localStorage.getItem("pedido"));

document.getElementById("info").innerHTML = `
<h3>${pedido.nome}</h3>
<p>Valor: R$ ${pedido.preco}</p>
`;

function copiarPIX() {
navigator.clipboard.writeText(pedido.pix);
alert("PIX copiado!");
}

function whatsapp() {
const msg = `
Olá HL APPLE STORE!

Comprei:
Produto: ${pedido.nome}
Valor: R$ ${pedido.preco}

Já fiz o pagamento via PIX e envio o comprovante.
`;

window.open("https://wa.me/5500000000000?text=" + encodeURIComponent(msg));
}
