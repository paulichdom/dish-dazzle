import styled from "styled-components";
import { useAuth } from "../../auth/AuthContext";
import { FormEvent, useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Title>Log in with email</Title>
        <Label>
          <LabelText>Email:</LabelText>
          <Input
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label>
          <LabelText>Password:</LabelText>
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Label>
        <LoginButton type="submit">Log In</LoginButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
padding-bottom: 16px;
`;

const Form = styled.form`
  width: max-content;
  margin: 16px auto;
  border: 1px dotted silver;
  border-radius: 2px;
  padding: 26px 32px 32px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`;

const LabelText = styled.span`
  display: block;
  margin-bottom: 4px;
  color: #333;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  display: block;
  width: 325px;
  border: 1px solid black;
  border-bottom-width: 2px;
  padding: 6px 8px;
  margin-top: 4px;
  border-radius: 2px 2px 3px 3px;

  &:focus {
    outline: 3px auto blue;
    outline-offset: 2px;
    border-color: transparent;
  }
`;

const LoginButton = styled.button`
  display: block;
  margin-top: 40px;
  width: 100%;
  background: black;
  color: white;
  padding: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;

  &:focus {
    outline: 3px auto blue;
    background: blue;
    outline-offset: 2px;
  }

  &:hover {
    cursor: pointer;
  }
`;
