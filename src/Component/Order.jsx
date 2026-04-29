function Order({ order, setOrder, onPlaceOrder }) {
    return (
<<<<<<< HEAD
        <div className="card">
      <div className="section-title">
        <h2>Create a new order</h2>
      </div>

      <form className="order-form" onSubmit={e => { e.preventDefault(); onPlaceOrder(); }}>
        <div className="input-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={order.Name}
            onChange={e => setOrder({ ...order, Name: e.target.value })}
          />
=======
<<<<<<< Updated upstream
        <div className="Container">
            <form onSubmit={e => { e.preventDefault(); onPlaceOrder(); }}>
                <label htmlFor="productName">Product Name:</label>
                <input
                    type="text"
                    id="productName"
                    value={order.Name}
                    onChange={e => setOrder({ ...order, Name: e.target.value })}
                />
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={order.Quantity}
                    onChange={e => setOrder({ ...order, Quantity: e.target.value })}
                />
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={order.Price}
                    onChange={e => setOrder({ ...order, Price: e.target.value })}
                />
                <button className="btn" type="submit">
                    Place Order
=======
        <div className="order-card">
            <div className="order-header">
                <h2>📦 Create Order</h2>
                <p className="order-subtitle">Fill in the details below</p>
            </div>
            <form onSubmit={e => { e.preventDefault(); onPlaceOrder(); }} className="order-form">
                <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        placeholder="Enter product name"
                        value={order.Name}
                        onChange={e => setOrder({ ...order, Name: e.target.value })}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        placeholder="Enter quantity"
                        value={order.Quantity}
                        onChange={e => setOrder({ ...order, Quantity: e.target.value })}
                        className="form-input"
                        min="1"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price ($)</label>
                    <input
                        type="number"
                        id="price"
                        placeholder="Enter price"
                        value={order.Price}
                        onChange={e => setOrder({ ...order, Price: e.target.value })}
                        className="form-input"
                        min="0"
                        step="0.01"
                    />
                </div>
                <button className="btn-submit" type="submit">
                    🛒 Place Order
>>>>>>> Stashed changes
                </button>
            </form>
>>>>>>> bf3fb66826613428ab001ab368c47770023e369a
        </div>
        <div className="input-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={order.Quantity}
            onChange={e => setOrder({ ...order, Quantity: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={order.Price}
            onChange={e => setOrder({ ...order, Price: e.target.value })}
          />
        </div>

        <button className="btn" type="submit">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Order;