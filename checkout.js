const product = JSON.parse(localStorage.getItem("product"));

document.getElementById("product").innerText = product.name;
document.getElementById("price").innerText = "R$ " + product.price;
document.getElementById("pix").value = product.pix;

function copyPIX(){
const pix = document.getElementById("pix");
pix.select();
pix.setSelectionRange(0, 99999);
navigator.clipboard.writeText(pix.value);
alert("PIX copiado!");
}

function getCEP(v){
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

📦 Produto:
${product.name}

💰 Valor:
R$ ${product.price}

👤 Cliente:
${name.value}
${cpf.value}
${phone.value}

📍 Endereço:
${street.value}, ${number.value}
${city.value}/${state.value}

💳 PIX pago. Envio comprovante.
`;

window.open("https://wa.me/5511960934864?text=" + encodeURIComponent(msg));

localStorage.removeItem("product");
}
