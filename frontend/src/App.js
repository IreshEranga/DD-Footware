import React from 'react';
import ProductList from './components/ProductList';
import OrderList from './components/OrderList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>DD Footwear</h1>
            </header>
            <main>
                <ProductList />
                <OrderList />
            </main>
        </div>
    );
};

export default App;
