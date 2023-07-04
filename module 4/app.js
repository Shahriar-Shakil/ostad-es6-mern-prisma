import products from "./products.js";
// Define an empty shopping cart array
let shoppingCart = [];

function renderProductList() {
  const productListContainer = document.getElementById("productList");

  // Clear any existing content
  productListContainer.innerHTML = "";

  // Iterate over the products array and generate HTML for each product
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("bg-white", "p-4", "rounded");

    const productName = document.createElement("h3");
    productName.classList.add("font-bold");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: $${product.price}`;

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add(
      "bg-blue-500",
      "hover:bg-blue-600",
      "text-white",
      "px-4",
      "py-2",
      "rounded"
    );
    addToCartButton.textContent = "Add to Cart";

    // Attach event listener to the "Add to Cart" button
    addToCartButton.addEventListener("click", () => {
      const quantityInput = 1;

      if (
        quantityInput &&
        !isNaN(quantityInput) &&
        parseInt(quantityInput) > 0
      ) {
        const quantity = parseInt(quantityInput);

        // Check if the product already exists in the shopping cart
        const existingProduct = shoppingCart.find(
          (item) => item.id === product.id
        );

        if (existingProduct) {
          // If the product already exists, increase the quantity
          existingProduct.quantity += quantity;
        } else {
          // If the product doesn't exist, add it to the shopping cart
          const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
          };
          shoppingCart.push(cartItem);
        }

        // Call a function to update the display of the shopping cart
        updateShoppingCart();
      } else {
        alert("Invalid quantity. Please enter a valid quantity.");
      }
    });

    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(addToCartButton);

    productListContainer.appendChild(productDiv);
  });
}

function updateShoppingCart() {
  const shoppingCartContainer = document.getElementById("shoppingCart");
  const totalContainer = document.getElementById("total");

  // Clear any existing content
  shoppingCartContainer.innerHTML = "";
  totalContainer.textContent = "";

  // Iterate over the shopping cart array and generate HTML for each cart item
  shoppingCart.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("flex", "justify-between", "items-center");

    const itemName = document.createElement("p");
    itemName.textContent = item.name;

    const itemQuantityContainer = document.createElement("div");
    itemQuantityContainer.classList.add("flex", "items-center", "space-x-2");

    const decrementButton = document.createElement("button");
    decrementButton.textContent = "-";
    decrementButton.classList.add(
      "bg-blue-500",
      "hover:bg-blue-600",
      "text-white",
      "px-2",
      "py-1",
      "rounded"
    );

    const quantityInput = document.createElement("input");
    quantityInput.classList.add("border", "rounded", "p-1", "w-16");
    quantityInput.type = "number";
    quantityInput.value = item.quantity;
    quantityInput.min = 1;

    const incrementButton = document.createElement("button");
    incrementButton.textContent = "+";
    incrementButton.classList.add(
      "bg-blue-500",
      "hover:bg-blue-600",
      "text-white",
      "px-2",
      "py-1",
      "rounded"
    );

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Item Price: $${item.price}`;

    // Attach event listeners to the increment and decrement buttons
    incrementButton.addEventListener("click", () => {
      item.quantity++;
      quantityInput.value = item.quantity;
      updateCartTotal();
      updateShoppingCart();
    });

    decrementButton.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
        quantityInput.value = item.quantity;
        updateCartTotal();
        updateShoppingCart();
      }
    });

    // Attach event listener to the quantity input
    quantityInput.addEventListener("change", () => {
      const newQuantity = parseInt(quantityInput.value);
      if (newQuantity >= 1) {
        item.quantity = newQuantity;
        updateCartTotal();
      } else {
        quantityInput.value = item.quantity;
      }
    });

    const itemTotal = document.createElement("p");
    itemTotal.textContent = `Total: $${(item.price * item.quantity).toFixed(
      2
    )}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add(
      "bg-red-500",
      "hover:bg-red-600",
      "text-white",
      "px-2",
      "py-1",
      "rounded"
    );
    removeButton.addEventListener("click", () => {
      removeItemFromCart(item.id);
    });

    cartItemDiv.appendChild(itemName);
    itemQuantityContainer.appendChild(decrementButton);
    itemQuantityContainer.appendChild(quantityInput);
    itemQuantityContainer.appendChild(incrementButton);
    cartItemDiv.appendChild(itemQuantityContainer);
    cartItemDiv.appendChild(itemPrice);
    cartItemDiv.appendChild(itemTotal);
    cartItemDiv.appendChild(removeButton);

    shoppingCartContainer.appendChild(cartItemDiv);
  });

  // Calculate and display the total amount
  updateCartTotal();
}
function removeItemFromCart(itemId) {
  shoppingCart = shoppingCart.filter((item) => item.id !== itemId);
  updateShoppingCart();
}
function updateCartTotal() {
  const totalAmount = shoppingCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalContainer = document.getElementById("total");
  totalContainer.textContent = `Total: $${totalAmount.toFixed(2)}`;
}
// clear cart button
const clearCartButton = document.getElementById("clearCartBtn");
clearCartButton.addEventListener("click", () => {
  clearCart();
});
function clearCart() {
  shoppingCart = [];
  updateShoppingCart();
}

// Call the renderProductList function to generate the initial product list
renderProductList();
