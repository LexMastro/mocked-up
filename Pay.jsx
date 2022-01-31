import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const KEY =
  "pk_test_51KN59RIYp7PKIOaPeFxD7Smx0vJWi8X6uahMHCvTySIiV9VD1Km16v96f5Lcti0LUoRbQ5q7bzLAHzkv90rEusfR00sxAhOYxa";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = router.post(
      "/register",
      async (req, res) => {
        try {
          const res = await axios.post(
            "http://localhost:3000/server/checkout/payment",
            {
              tokenId: stripeToken.id,
              amount: 2000,
            }
          );
          console.log(res.data);
          history.push("/sucess");
        } catch (err) {
          console.log(err);
        }
      },
      stripeToken && makeRequest
    );
  }, [stripeToken, history]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Processing. Please wait...</span>
      ) : (
        <StripeCheckout
          name="Mockup"
          image=""
          billingAddress
          shippingAddress
          description="Your total is $20"
          amount={2000}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "White",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
