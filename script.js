let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addItem(name, price){
cart.push({name, price});
localStorage.setItem("cart", JSON.stringify(cart));
updateTotal();
}

function updateTotal(){
let total = cart.reduce((sum,i)=>sum+i.price,0);
document.getElementById("total").innerText = total;
}

function goCheckout(){
window.location.href = "checkout.html";
}

updateTotal();
