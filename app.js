const app = document.getElementById("app");

function render(){
app.innerHTML = products.map(p=>`
<div class="card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>R$ ${p.price}</p>

<button onclick="buy(${p.id})">
Comprar agora
</button>

</div>
`).join("");
}

function buy(id){
const product = products.find(p=>p.id===id);
localStorage.setItem("product", JSON.stringify(product));
window.location.href = "checkout.html";
}

render();
