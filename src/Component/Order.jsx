function Order({ order, setOrder, onPlaceOrder }) {
    return (
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
                </button>
            </form>
        </div>
    );
}

export default Order;