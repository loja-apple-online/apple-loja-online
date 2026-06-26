const app = document.getElementById("app");

function render(){

app.innerHTML = products.map(p=>`
<div class="card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>R$ ${p.price}</p>

<p>Estoque: ${p.stock}</p>

<button onclick="add(${p.id})">
Comprar
</button>

</div>
`).join("");

}

render();
