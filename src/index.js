import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
console.log("Este é seu carrinho");

const item1 = await createItem("capinha iphone 14", 60.99, 1);
const item2 = await createItem("suporte monitor", 100, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.displayCart(myCart);

//deletando produto
await cartService.deleteItem(myCart, item1.name);

//deletando item/quantidade
//await cartService.removeItem()

await cartService.calculateTotal(myCart);