import { useState } from 'react';
import './App.css';
import Order from './Component/Order';
import OrderList from './Component/OrderList';

function App() {
 
  /*const temp ={
        Name: 'Haresh Chavda',
        Designation: 'Software Engineer',
        mobile: '1234567890',
        email: 'abc@gmail.com',   
        button: ClickMe
    } 

    function ClickMe() {
    alert('Button Clicked!');
  }
  return (       
    <Demo temp={temp} />

    let i = 10;
    i+1; button
    p i
    i
  )*/

  const [order, setOrder] = useState({
    Name: '',
    Quantity: '',
    Price: ''
  });
  const [orders, setOrders] = useState([]);

  function handlePlaceOrder() {
    if (!order.Name || !order.Quantity || !order.Price) {
      alert('Please fill all fields.');
      return;
    }
    setOrders([...orders, order]);
    setOrder({ Name: '', Quantity: '', Price: '' });
  }

  return (
    <div className="App">
      <div className="app-header">
        <h1>Order Management System</h1>
        <p className="app-subtitle">Manage your orders efficiently</p>
      </div>
      <div className="app-container">
        <div className="form-section">
          <Order order={order} setOrder={setOrder} onPlaceOrder={handlePlaceOrder} />
        </div>
        <div className="list-section">
          <OrderList orders={orders} />
        </div>
      </div>
    </div>
  );
}

export default App
