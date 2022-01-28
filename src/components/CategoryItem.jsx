import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 100%;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  opacity: 0.7;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: black;
  margin: 20px;
  font-weight: 700;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-colour: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
`;

const categoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default categoryItem;
