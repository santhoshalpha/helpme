document.addEventListener('DOMContentLoaded', getOrders);

function getOrders() {
  // Assuming you have an API endpoint to retrieve orders
  fetch('https://api.example.com/orders')
    .then(response => response.json())
    .then(data => {
      const orderTableBody = document.getElementById('orderTableBody');
      orderTableBody.innerHTML = '';

      data.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${order.orderId}</td>
          <td>${order.product}</td>
          <td>${order.quantity}</td>
          <td>${order.customerName}</td>
          <td>${order.address}</td>
        `;
        orderTableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error retrieving orders:', error);
    });
}





