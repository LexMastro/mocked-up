import { useState } from "react";
import styled from "styled-components";
// import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
// import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";

// import { useMutation } from "@apollo/client";
// import { Link } from "react-router-dom";
// import { LOGIN } from "../utils/mutations";
// import Auth from "../utils/auth";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const LinkText = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = (props) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const { isFetching } = useSelector((state) => {
  //   return state.user;
  // });

  // // const userState = useSelector((state) => state.user);

  // // console.log({ userState });

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   login(dispatch, { username, password });
  // };

  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleFormSubmit}>
          <Input name="email" placeholder="email" onChange={handleChange} />
          <Input
            name="password"
            placeholder="password"
            type="password"
            onChange={handleChange}
          />

          <Button type="submit">LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}
          <LinkText>FORGOT YOUR PASSWORD?</LinkText>
          <LinkText>CREATE A NEW ACCOUNT</LinkText>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
