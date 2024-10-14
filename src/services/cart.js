//adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name == name);

    if (index !== -1){
        userCart.splice(index, 1);
    }
}

//remover um item
async function removeItem(userCart, index) {
    const deleteIndex = index - 1;

    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

//calcular total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal do carrinho: R$${result}`);
}

async function displayCart(userCart) {
    console.log("\nCart List:");
    userCart.forEach((item, index) => {
        console.log(`${index +1}. ${item.name} -- R$${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`);
    })
}

export {
    addItem,
    calculateTotal, 
    removeItem, 
    deleteItem,
    displayCart,
}