import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { userRequest } from "../requestMethod";
import Button from "@mui/material/Button";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.products;
  
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch(err) {
        console.log(err)
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  const handleClick = () => {
    navigate("/");
  }
  
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://yt3.googleusercontent.com/ytc/AMLnZu9KvYClnqgU4OrdgvX9juhvsc3ZECM-GznreSbi=s88-c-k-c0x00ffffff-no-rj"
        alt="Hardware Nerds Logo"
      />
        <Button style={{ margin: "25px" }} variant="contained" onClick={handleClick}>
          Continue Shopping.
        </Button>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
    </div>
  );
};

export default Success;
