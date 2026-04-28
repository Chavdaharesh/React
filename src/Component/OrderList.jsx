//import './App.css';

function OrderList({ orders }) {
  return (
    <div className="card">
      <h2>Order List</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <strong>{order.Name}</strong> - Quantity: {order.Quantity}, Price: ${order.Price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;