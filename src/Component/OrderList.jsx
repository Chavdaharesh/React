function OrderList({ orders }) {
    

    return (
        <div className="order-list">
            <h2>Order List</h2>
            {orders.length === 0 ? (
                <p className="empty-state">No orders yet. Create one to get started!</p>
            ) : (
                <ul>
                    {orders.map((order, index) => (
                        <li key={index}>
                            <div className="order-item-details">
                                <div className="order-item-id">ID: {index}</div>
                                <div className="order-item-name">{order.Name}</div>
                                <div className="order-item-qty">Qty:`` {order.Quantity}</div>                                
                                <div className="order-item-price">${parseFloat(order.Price).toFixed(2)}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default OrderList;