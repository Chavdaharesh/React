import { useState } from 'react';
import './App.css';
import Order from './Component/Order';
import OrderList from './Component/OrderList';

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
