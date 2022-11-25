import Home from "./pages/Home";
import  Pay from "./pages/Pay";
import Success from "./pages/Success";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
      <Route path="/pay" element={<Pay />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
