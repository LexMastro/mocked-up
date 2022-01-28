import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import productImg from "../images/MagMockup1.jpg";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
  line-height: 1.6;
`;

const Price = styled.span`
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 18px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justifiy-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid lightgray;
  background-color: white;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: teal;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src={productImg} />
        </ImgContainer>
        <InfoContainer>
          <Title>Magazine Layout Mockup</Title>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eaque
            quaerat delectus, nostrum officiis cupiditate nobis voluptatibus
            dolorem repudiandae nesciunt? Fugiat veritatis dolorem veniam quos
            cupiditate, distinctio eaque doloremque! Eius.
          </Description>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Photos</FilterSizeOption>
                <FilterSizeOption>Graphics</FilterSizeOption>
                <FilterSizeOption>Templates</FilterSizeOption>
                <FilterSizeOption>Fonts</FilterSizeOption>
              </FilterSize>
            </Filter>
            <Filter>
              <FilterTitle>File Color</FilterTitle>
              <FilterColor color="blue" />
              <FilterColor color="pink" />
              <FilterColor color="yellow" />
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
