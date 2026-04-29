//import './App.css';

function OrderList({ orders }) {
  return (
    <div className="card order-list">
      <div className="section-title">
        <h2>Order List</h2>
      </div>
      {orders.length === 0 ? (
        <div className="empty-state">No orders yet. Add your first product to get started.</div>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <strong><span className="order-index">{index + 1}.</span> {order.Name}</strong>
              <div className="order-details">
                <span className="order-detail">Quantity: {order.Quantity}</span>
                <span className="order-detail">Price: ${order.Price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OrderList;