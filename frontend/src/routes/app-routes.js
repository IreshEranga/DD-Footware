import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from '../components/ProductList';
import OrderList from '../components/OrderList';
const AppRoutes = () => {
    return (
      <>
        <Router>
          <Routes>
            
            <Route path="/" element={<ProductList />} />
            <Route path="/order" element={<OrderList />} />
            
          </Routes>
        </Router>
      </>
    );
  };
  
  export default AppRoutes;