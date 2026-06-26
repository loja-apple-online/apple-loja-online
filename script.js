let cart = JSON.parse(localStorage.getItem("cart")) || [];

function openProd(id){
localStorage.setItem("produto", id);
window.location.href="produto.html";
}

function addItem(name, price){
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
updateTotal();
}

function updateTotal(){
let total = cart.reduce((s,i)=>s+i.price,0);
let el = document.getElementById("total");
if(el) el.innerText = total;
}

function goCheckout(){
window.location.href="checkout.html";
}

updateTotal();
