let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("resume").innerHTML =
cart.map(p=>`<p>${p.name} x${p.qty}</p>`).join("");

document.getElementById("pix").value = cart[0]?.pix || "";

function copy(){
navigator.clipboard.writeText(document.getElementById("pix").value);
alert("PIX copiado");
}

function cep(v){
fetch(`https://viacep.com.br/ws/${v}/json/`)
.then(r=>r.json())
.then(d=>{
street.value = d.logradouro;
city.value = d.localidade;
state.value = d.uf;
});
}

function finish(){

const msg = `
🍎 HL APPLE STORE

📦 Pedido:
${cart.map(p=>`- ${p.name} x${p.qty}`).join("\n")}

👤 Cliente:
${name.value}
${cpf.value}
${phone.value}

📍 Endereço:
${street.value}, ${number.value} - ${city.value}/${state.value}

💳 PIX realizado.
Envio comprovante.
`;

window.open("https://wa.me/5500000000000?text="+encodeURIComponent(msg));

localStorage.removeItem("cart");
}
