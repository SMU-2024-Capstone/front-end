import { FadeLoader } from "react-spinners";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]);

  return (
    <>
      <p>로그인 중입니다.</p>
      <p>잠시만 기다려주세요.</p>
      <FadeLoader color="#5814a6" />
    </>
  );
};

export default Redirection;
