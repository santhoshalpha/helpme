// Get the order form element
const orderForm = document.getElementById("order-form");

// Add event listener to the form submission
orderForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form values
  const productName = document.getElementById("product-name").value;
  const quantity = document.getElementById("quantity").value;
  const deliveryAddress = document.getElementById("delivery-address").value;

  // Perform any desired validation on the form values

  // Example: Log the form values to the console
  console.log("Product Name:", productName);
  console.log("Quantity:", quantity);
  console.log("Delivery Address:", deliveryAddress);

  // TODO: Add your desired logic to process the order here
  // You can send the form values to a server or perform any other actions

  // Reset the form
  orderForm.reset();
});
