import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: lightblue;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>30% off all mockups!</Container>;
};

export default Announcement;
