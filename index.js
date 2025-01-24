let cart = [];
let totalPrice = 0;
function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  totalPrice += itemPrice;
  updateCartUI();
}
function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const cartHeader = document.querySelector('.cart h1');
  cartItemsContainer.innerHTML = '';
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsContainer.appendChild(listItem);
  });
  totalPriceElement.textContent = totalPrice.toFixed(2);
  cartHeader.textContent = `Your Cart(${cart.length})`;
}
function confirmOrder() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert(`Order confirmed! Total price: $${totalPrice.toFixed(2)}`);
    cart = [];
    totalPrice = 0;
    updateCartUI();
  }
}
