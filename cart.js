let cart = JSON.parse(localStorage.getItem("cart")) || [];

function add(id){
const p = products.find(x=>x.id===id);

let item = cart.find(x=>x.id===id);

if(item){
item.qty++;
} else {
cart.push({...p, qty:1});
}

save();
alert("Adicionado ao carrinho");
}

function remove(id){
cart = cart.filter(x=>x.id!==id);
save();
}

function save(){
localStorage.setItem("cart", JSON.stringify(cart));
}
