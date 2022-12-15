import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
	return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={ <Login />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
