import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 30px;
  background-color: #e5f9ff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ display: "none" })}
`;

const Announcement = () => {
  return (
    <Container>
      Discover the latest premium quality mockups graphic mockups, ready for
      instant download!
    </Container>
  );
};

export default Announcement;
