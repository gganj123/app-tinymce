"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import { useAuthStore } from "@/stores/authStore";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container>
      <BackgroundImage src="login_bg.png" alt="Login Background" />
      <FormContainer>
        <Logo src="logo_h.png" alt="Logo" />
        <Subtitle>Advanced Anti-Drone Security System</Subtitle>
        <Description>Real-time monitoring, jamming and takeover solutions for unmatched control and safety</Description>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <PasswordWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TogglePassword onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </TogglePassword>
          </PasswordWrapper>
          <Button type="submit">로그인</Button>
        </Form>
        <ExtraLinks>
          <label>
            <input type="checkbox" /> 아이디 기억하기
          </label>
          <a href="#">아이디/비밀번호 찾기</a>
          <a href="#">회원가입</a>
        </ExtraLinks>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  position: relative;
  width: 1200px;
  height: 840px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 1200px;
  height: 600px;
  object-fit: cover;
`;

const FormContainer = styled.div`
  position: absolute;
  top: 280px;
  left: 80px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
`;

const Logo = styled.img`
  top: 0;
  left: 0;
  margin-bottom: 30px;
  width: 165px;
  height: 42px;
`;

const Subtitle = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Description = styled.p`
  font-size: 13px;
  color: #555;
  margin-bottom: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  width: 360px;
  height: 52px;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  font-size: 14px;
  background-color: #f9f9f9;
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TogglePassword = styled.button`
  position: absolute;
  top: 45%;
  right: 15px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #aaa;
`;

const Button = styled.button`
  width: 360px;
  height: 62px;
  background: #1a1a1a;
  color: #42ff63;
  padding: 12px;
  border: none;
  font-size: 16px;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    background: #333;
  }
`;

const ExtraLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 12px;
  margin-top: 12px;
  color: #777;

  a {
    color: #777;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
