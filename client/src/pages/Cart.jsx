import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
// import { useHistory } from "react-router";
import { QUERY_CHECKOUT } from "../utils/queries";
import { ADD_MULTIPLE_TO_CART } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { idbPromise } from "../utils/helpers";

const KEY =
  "pk_test_51KN59RIYp7PKIOaPeFxD7Smx0vJWi8X6uahMHCvTySIiV9VD1Km16v96f5Lcti0LUoRbQ5q7bzLAHzkv90rEusfR00sxAhOYxa";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

// const TopTexts = styled.div`
//   ${mobile({ display: "none" })}
// `;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  margin-left: 20px;

`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ width: "40%", height: "40%", marginTop: "25px;" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  ${mobile({ fontSize: "14px", margin: "5px" })}
`;

const ProductId = styled.span`
  ${mobile({ fontSize: "14px", margin: "5px" })}
`;

const ProductColor = styled.span`
  ${mobile({ fontSize: "14px", margin: "5px" })}
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 25px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;


const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 20vh;
  display: flex;
  flex-direction: column;
  margin-left: 120px;
  margin-right: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [setStripeToken] = useState(null);
  // const history = useHistory();
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    if (data) {
      KEY.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!cart.products.length) {
      getCart();
    }
  }, [cart.products.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    cart.products.forEach((product) => {
      sum += product.price * product.quantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((product) => {
      for (let i = 0; i < product.quantity; i++) {
        productIds.push(product._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }
  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await userRequest.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: 500,
  //       });
  //       history.push("/success", {
  //         stripeData: res.data,
  //         products: cart,
  //       });
  //     } catch {}
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, cart, history]);

  const [quantity, setQuantity] = useState(1);
  // const product = data?.product;
  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  console.log(cart);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to="/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopText>Shopping Bag({cart.products.length})</TopText>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>Description:</b> {product.desc}
                    </ProductId>
                    <ProductColor>
                      <b>File Type:</b> {product.color}
                    </ProductColor>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Remove onClick={() => handleQuantity("dec")} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Add onClick={() => handleQuantity("inc")} />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemPrice>Total: ${calculateTotal()}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="MOCKUP"
              image="https://image.freepik.com/free-vector/green-hand-drawn-laptop-clipart_53876-115988.jpg"
              billingAddress
              shippingAddress
              description={`Your total is $${calculateTotal()}`}
              amount={`${calculateTotal()}` * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button onClick={submitCheckout}>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
