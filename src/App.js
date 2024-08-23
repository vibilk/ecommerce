import './App.css';
// import AppRouter from './Routes/Index.jsx';
import Header from './Component/Header.jsx';
import Footer from './Component/Footer.jsx';
import {
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import Home from './Home/Home';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductList from './ProductList/ProductList';

import Checkout from './Checkout/Checkout.jsx';
function App() {
  return (
    <div className="App">

      <Header />

      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path='/product' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
