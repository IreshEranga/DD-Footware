import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import ProductList from '../components/ProductList';
//import OrderList from '../components/OrderList';
import { Product } from "../pages/Product/Product";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { ToastContainer } from 'react-toastify';
import SystemAdminHome from "../pages/SystemAdmin/SystemAdminHome";
import OutletAdminHome from "../pages/OutletAdmin/OutletAdminHome";
import SysProducts from "../pages/SystemAdmin/SysProducts";
import OrderList from "../pages/SystemAdmin/OrderList";



const AppRoutes = () => {
    return (
      <>
        <Router>
          <ToastContainer/>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            {/* <Route path="/order" element={<OrderList />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/systemadmin" element={<SystemAdminHome />} />
            <Route path="/outletadmin" element={<OutletAdminHome />} />
            <Route path="/systemadmin/products" element={<SysProducts />} />
            <Route path="/systemadmin/orders" element={<OrderList />} /> 
            
          </Routes>
        </Router>
      </>
    );
  };
  
  export default AppRoutes;