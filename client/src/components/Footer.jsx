import {
  AlternateEmail,
  Facebook,
  Instagram,
  LocalPhone,
  LocationOn,
  Pinterest,
} from "@material-ui/icons";
import styled from "styled-components";
import React from "react";
import paymentImg from "../images/stripePayments.png";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#ffffef" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 40%;
`;

export const Footer = ({ item }) => {
  return (
    <Container>
      <Left>
        <Logo>MOCKED UP.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga maiores
          amet ipsum fugiat. Quo doloremque soluta nam in quam esse sed animi
          ipsum! Vel ut, asperiores qui itaque laborum porro.
        </Description>
        <SocialContainer>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>View All Mockups</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>View Order Details</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms and Conitions</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} />
          123 Fake Street, Faketown, 2000
        </ContactItem>
        <ContactItem>
          <LocalPhone style={{ marginRight: "10px" }} /> 0477 211 551
        </ContactItem>
        <ContactItem>
          <AlternateEmail style={{ marginRight: "10px" }} /> info@mockedup.com
        </ContactItem>
        <Payment src={paymentImg} />
      </Right>
    </Container>
  );
};
