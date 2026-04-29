function Order({ order, setOrder, onPlaceOrder }) {
    return (
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