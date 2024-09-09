import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo/Logo.svg";

const Container = styled.div`
  display:flex; 
  align-items: center;
  justify-content: center;
  height: 852px;
`;

const Logo = styled.img`
`;


const Redirection = (props) => {
  // 인가코드 백으로 보내는 코드
  console.log(window.location.search);
  const navigate = useNavigate();

  useEffect(() => {
    const code = window.location.search;

    axios
      .get(`http://localhost:8080/user/callback/kakao${code}`)
      .then((res) => {
        console.log(res.data);
        navigate("/nickname");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  return (
    <Container>
      <Logo src={logo} alt="로고 이미지" />
    </Container>
  );
};

export default Redirection;
