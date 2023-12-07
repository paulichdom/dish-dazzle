import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../auth/AuthContext";
import { FormEvent } from "react";
import { CheckCircle, Circle } from "react-feather";

export default function SignupForm() {
  const initialErrors = [
    { message: "At least one lowercase letter.", isValid: false },
    { message: "One uppercase letter.", isValid: false },
    { message: "One number.", isValid: false },
    { message: "One special character.", isValid: false },
  ]
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState(initialErrors);
  const { signup } = useAuth();

  const validateEmail = (value: string) => {
    const isValid = value.includes("@");
    console.log({ emailValid })
    setEmailValid(isValid);
    return isValid;
  };

  const validatePassword = (value: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

    const lowercase = /^(?=.*[a-z])/.test(value);
    const uppercase = /^(?=.*[A-Z])/.test(value);
    const number = /^(?=.*\d)/.test(value);
    const specialChar = /^(?=.*[@$!%*?&])/.test(value);

    const errors = passwordErrors.map((error) => {
      if (error.message === "At least one lowercase letter.") {
        return { ...error, isValid: lowercase };
      } else if (error.message === "One uppercase letter.") {
        return { ...error, isValid: uppercase };
      } else if (error.message === "One number.") {
        return { ...error, isValid: number };
      } else if (error.message === "One special character.") {
        return { ...error, isValid: specialChar };
      }
      return error;
    });

    setPasswordValid(passwordRegex.test(value));
    setPasswordErrors(errors);
    return passwordRegex.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSignup = (e: FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      signup(email, password);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignup}>
        <Title>Create an account</Title>
        <Description>
          Sign up to save and review your favorite recipes.
        </Description>
        <Label>
          <LabelText>Email:</LabelText>
          <Input
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={handleEmailChange}
          />
        </Label>
        <Label>
          <LabelText>Password:</LabelText>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <ErrorList>
            {passwordErrors.map(({ message, isValid }, index) => (
              <ListItem key={index}>
                {isValid ? (
                  <CheckCircle color="green" size={16} />
                ) : (
                  <Circle color="grey" size={16} />
                )}
                <ListItemText>{message}</ListItemText>
              </ListItem>
            ))}
          </ErrorList>
        </Label>
        <SignupButton type="submit" disabled={!passwordValid}>Sign Up</SignupButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 8px;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 16px;
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
  position: relative;
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

const SignupButton = styled.button`
  display: block;
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

const ErrorList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.8rem;
  padding: 16px 0px 0px 2px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const ListItemText = styled.span`
  color: #333;
  padding-left: 4px;
`;
