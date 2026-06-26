const product = JSON.parse(localStorage.getItem("product"));

document.getElementById("product").innerText = product.name;
document.getElementById("price").innerText = "R$ " + product.price;

// preencher cores
const colorSelect = document.getElementById("color");

product.colors.forEach(c=>{
let opt = document.createElement("option");
opt.value = c;
opt.innerText = c;
colorSelect.appendChild(opt);
});

function showPIX(){

document.getElementById("pixBox").style.display = "block";
document.getElementById("pix").value = product.pix;

}

function copyPIX(){
const pix = document.getElementById("pix");
pix.select();
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

🎨 Cor:
${colorSelect.value}

💰 Valor:
R$ ${product.price}

👤 Cliente:
${name.value}
${cpf.value}
${phone.value}

📍 Endereço:
${street.value}, ${number.value}
${city.value}/${state.value}

PIX enviado para pagamento.
`;

window.open("https://wa.me/5511960934864?text="+encodeURIComponent(msg));

localStorage.removeItem("product");
}
