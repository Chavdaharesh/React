import { useState } from 'react';
import './App.css';
import Order from './Component/Order';
import OrderList from './Component/OrderList';

function App() {
    const [orders, setOrders] = useState([]);

    return (
        <div className="App">
            <main>
                <Order orders={orders} setOrders={setOrders} />
                <OrderList orders={orders} />
            </main>
        </div>
    );
}

export default App;
