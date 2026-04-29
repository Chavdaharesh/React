//import './App.css';

function OrderList({ orders }) {
  const totalPrice = orders.reduce((sum, order) => sum + (parseFloat(order.Price) || 0) * (parseInt(order.Quantity) || 0), 0);
  
  return (
    <div className="orders-card">
      <div className="orders-header">
        <h2>📋 Order Summary</h2>
        <p className="orders-subtitle">{orders.length} order{orders.length !== 1 ? 's' : ''} placed</p>
      </div>
      {orders.length === 0 ? (
        <div className="empty-state">
          <p>No orders yet. Create one to get started! 🚀</p>
        </div>
      ) : (
        <>
          <div className="orders-table-wrapper">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="product-name">{order.Name}</td>
                    <td className="quantity">{order.Quantity}</td>
                    <td className="price">${parseFloat(order.Price).toFixed(2)}</td>
                    <td className="total">${(parseFloat(order.Price) * parseInt(order.Quantity)).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="orders-footer">
            <div className="total-summary">
              <span>Total Amount:</span>
              <span className="total-amount">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderList;