import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { useSelector } from "react-redux";

function App() {

  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  // const admin = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser.isAdmin;
  
  return (
  <Routes>
      <Route path="/login" element={<Login />} />
      {admin && (
        <>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/newproduct" element={<NewProduct />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        
        </>
      )}
  </Routes>
    // <Routes>
    //     <Route path="/login">
    //       <Login />
    //     </Route>
    //     {admin && (
    //       <>
    //         <Topbar />
    //         <div className="container">
    //           <Sidebar />
    //           <Route exact path="/">
    //             <Home />
    //           </Route>
    //           <Route path="/users">
    //             <UserList />
    //           </Route>
    //           <Route path="/user/:userId">
    //             <User />
    //           </Route>
    //           <Route path="/newUser">
    //             <NewUser />
    //           </Route>
    //           <Route path="/products">
    //             <ProductList />
    //           </Route>
    //           <Route path="/product/:productId">
    //             <Product />
    //           </Route>
    //           <Route path="/newproduct">
    //             <NewProduct />
    //           </Route>
    //         </div>
    //       </>
    //     )}
    // </Routes>
  );
  }

export default App;
