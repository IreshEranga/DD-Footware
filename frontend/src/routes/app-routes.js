import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import ProductList from '../components/ProductList';
import OrderList from '../components/OrderList';
import { Product } from "../pages/Product/Product";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const AppRoutes = () => {
    return (
      <>
        <Router>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/order" element={<OrderList />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </Router>
      </>
    );
  };
  
  export default AppRoutes;