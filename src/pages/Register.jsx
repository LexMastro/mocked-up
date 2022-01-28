import styled from "styled-components";
import backgroundImg from "../images/SignupImg.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;
const Wrapper = styled.div``;
const Form = styled.form``;
const Title = styled.h1``;
const Input = styled.input``;
const Agreement = styled.span``;
const Button = styled.button``;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholer="name" />
          <Input placeholer="last name" />
          <Input placeholer="username" />
          <Input placeholer="email" />
          <Input placeholer="password" />
          <Input placeholer="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <i>PRIVACY POLICY</i>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
