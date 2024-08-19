import styled from "styled-components";
import naver from "../assets/images/login_images/naver_login.svg";

const NaverButton = styled.div`
  width: 360px;
  height: 54px;
  background-color: #03c75a;
  border-radius: 4px;
  margin: 0 auto;
  cursor: pointer;
  filter: drop-shadow(0px 6px 8px rgba(3, 199, 90, 0.3));
  margin-top: 12px;
`;

const Naver = styled.img`
  margin-top: 13.5px;
`;

const NaverLogin = () => {
  return (
    <NaverButton>
      <Naver src={naver} alt="네이버 로그인" />
    </NaverButton>
  );
};

export default NaverLogin;
