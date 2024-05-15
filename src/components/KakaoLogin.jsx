import "../App.css";
import kakao from "../assets/kakao_login.svg";

const KaKaoLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_APP_REDIRECT_URL;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <div className="btn-kakao">
      <img id="kakao" src={kakao} onClick={loginHandler} alt="카카오 로그인" />
    </div>
  );
};

export default KaKaoLogin;
