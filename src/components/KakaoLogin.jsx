import styled from "styled-components";
import kakao from "../assets/images/login_images/kakao_login.svg";

const KaKaoButton = styled.div`
  width: 360px;
  height: 54px;
  background-color: #fee500;
  border-radius: 6px;
  margin: 0 auto;
  cursor: pointer;
  filter: drop-shadow(0px 6px 8px #fee5004d);
  margin-top: 40px;
`;

const KaKao = styled.img`
  margin-top: 13.5px;
`;

const KaKaoLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URL;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <KaKaoButton>
      <KaKao src={kakao} onClick={loginHandler} alt="카카오 로그인" />
    </KaKaoButton>
  );
};

export default KaKaoLogin;
