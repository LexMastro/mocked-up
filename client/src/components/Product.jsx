import { useQuery } from "@apollo/client";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { QUERY_PRODUCT } from "../utils/queries";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 200px;
  width: 260px;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
  const { id } = useParams();
  const [quantity] = useState(1);
  const [color] = useState("");
  const dispatch = useDispatch();
  const { data } = useQuery(QUERY_PRODUCT, {
    variables: {
      id,
    },
  });
  console.log(data);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color }));
  };

  return (
    <Container>
      <Image src={product.img} />
      <Info>
        <Icon>
          <Link
            style={{
              textDecoration: "none",
              color: "red",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            <ShoppingCartOutlined />
          </Link>
        </Icon>
        <Icon>
          <Link
            to={`/product/${product._id}`}
            style={{
              textDecoration: "none",
              color: "red",
              cursor: "pointer",
            }}
          >
            <SearchOutlined />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
