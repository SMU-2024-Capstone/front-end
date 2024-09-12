import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo/Logo.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 852px;
`;

const Logo = styled.img``;

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

        // 회원가입
        if (res.data.status == 201) {
          window.localStorage.setItem(
            "accessToken",
            res.data.token.accessToken
          );
          window.localStorage.setItem(
            "refreshToken",
            res.data.token.refreshToken
          );

          navigate("/nickname");
        }

        // 로그인
        // 선호도 테스트까지 다 끝낸 경우
        if (res.data.status == 200 && res.data.message == "홈화면") {
          navigate("/home");
          window.localStorage.setItem("nickname", res.data.nickname);
        }

        // 닉네임 설정을 하지 않은 경우
        if (res.data.status == 200 && res.data.message == "닉네임 없음") {
          navigate("/nickname");
        }

        // 선호도 테스트를 안 한 경우
        if (res.data.status == 200 && res.data.message == "선호도 테스트") {
          window.localStorage.setItem("nickname", res.data.nickname);
          navigate("/onboarding");
        }
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
