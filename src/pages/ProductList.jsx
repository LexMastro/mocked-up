import Announcements from "../components/Announcements";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { Footer } from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Advertising</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Categories
            </Option>
            <Option>Photos</Option>
            <Option>Graphics</Option>
            <Option>Templates</Option>
            <Option>Fonts</Option>
          </Select>
          <Select>
            <Option disabled select>
              File Type
            </Option>
            <Option>.PNG</Option>
            <Option>.JPG</Option>
            <Option>.EPS</Option>
            <Option>.SVG</Option>
            <Option>.AI</Option>
            <Option>.PSD</Option>
            <Option>.PDF</Option>
            <Option>.INDD</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
