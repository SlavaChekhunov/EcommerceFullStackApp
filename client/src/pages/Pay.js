import axios from "axios";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
const KEY="pk_test_51M5IH6JPvhgkKcxC0cW8dyK1iyBHjR9LtmYQSFvhJK6hQhlUyXm0uUEOdAqHSeLOAuFpcIawAAVqUsQF7pkz6af700PcLDznJM"
//so stripe api on the client side returns us a token which we can pass to our backend node.js application and use it there

function Pay() {

  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async (req, res) => {
      try {
        const res = await axios.post("http://localhost:5000/api/checkout/payment",
        { 
          tokenId: stripeToken.id,
          amount: 2000,
        }
        );
        console.log(res.data);
      } catch(err) {
        console.log(err)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken])


  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout name="Summer Shop" 
      image="https://avatars1.githubusercontent.com/u/1486366?v=4"
      billingAddress
      shippingAddress
      description="Your total is $20"
      amount={2000}
      token={onToken}
      stripeKey={KEY}>
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
}

export default Pay;
