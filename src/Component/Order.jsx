import { useState } from 'react';

function Order({ orders, setOrders }) {
    const [order, setOrder] = useState({
        Name: '',
        Quantity: '',
        Price: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!order.Name || !order.Quantity || !order.Price) {
            return;
        }

        setOrders([...orders, order]);
        setOrder({ Name: '', Quantity: '', Price: '' });
    };

    return (
        <div className="card">
            <h2>Create Order</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        value={order.Name}
                        onChange={(e) => setOrder({ ...order, Name: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input
                        type="number"
                        value={order.Quantity}
                        onChange={(e) => setOrder({ ...order, Quantity: e.target.value })}
                        min="1"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input
                        type="number"
                        value={order.Price}
                        onChange={(e) => setOrder({ ...order, Price: e.target.value })}
                        step="0.01"
                        min="0"
                        required
                    />
                </div>
                <button type="submit">Create Order</button>
            </form>
        </div>
    );
}

export default Order;