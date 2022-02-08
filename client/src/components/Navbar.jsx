import { Badge, Button } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Center = styled.div`
  flex: 0;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  ${mobile({ fontSize: "24px", marginLeft: "10px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1, justifyContent: "flex-end", marginRight: "15px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  // const [quantity, setQuantity] = useState(1);
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  const isLoggedIn = localStorage.getItem("id_token");

  // const user = useSelector((state) => state.user);

  function logout(event) {
    // call the logout endpoint on server
    // localStorage.clear();

    const root = JSON.parse(localStorage.getItem("persist:root"));

    const user = JSON.parse(root.user);
    user.currentUser = null;

    root.user = JSON.stringify(user);
    // 2.
    localStorage.setItem("persist:root", JSON.stringify(root));

    // redirect to home page
    window.location.href = "/";
  }

  function renderAuth() {
    if (isLoggedIn) {
      return (
        <Right>
          <MenuItem>
            <Button onClick={logout}>Logout</Button>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      );
    }
    return (
      <Right>
        <Link to="/signup">
          <MenuItem>REGISTER</MenuItem>
        </Link>
        <MenuItem>
          <Link to="/login">SIGN IN</Link>
        </MenuItem>
      </Right>
    );
  }

  return (
    <Container>
      <Wrapper>
        <Center>
          <Logo>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
              to={"/"}
            >
              MOCKUP.
            </Link>
          </Logo>
        </Center>
        {renderAuth()}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
