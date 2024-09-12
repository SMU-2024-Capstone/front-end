import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const HomeFilterCompleteButton = (props) => {
  const StyledCompleteButton = styled.button`
    margin-top: 12px;
    margin-left: 16px;
    width: 360px;
    height: 54px;
    border-radius: 12px;
    border: 1px solid #eceff0;
    background-color: ${(props) => (props.disabled ? "#0D0E10" : "#ECEFF0")};
    color: ${(props) => (props.disabled ? "#6A6D6E" : "#0D0E10")};
    font-size: 18px;
    font-family: "GothicA1-Medium";
    letter-spacing: -0.3%;
    line-height: 140%;
    text-align: center;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    filter: drop-shadow(0px 6px 8px rgba(236, 239, 240, 30%));
  `;

  const navigate = useNavigate();

  // 문자열을 숫자로 매핑하는 함수
  const mapImportance = (value) => {
    switch (value) {
      case "상관없음":
        return 0;
      case "약간 중요":
        return 1;
      case "중요":
        return 2;
      case "매우 중요":
        return 3;
      default:
        return 0; // 기본값을 0으로 설정
    }
  };

  const mapPreference = (value) => {
    switch (value) {
      case "선호 안함":
        return 0;
      case "약간 선호":
        return 1;
      case "선호":
        return 2;
      case "매우 선호":
        return 3;
      default:
        return 0; // 기본값 0
    }
  };

  // 중요도
  const importance = Object.values(props.filterArray).map(mapImportance);

  // foods, drinks, cafes, games 각각 변환 (선호도)
  const foodsArrayAsNumbers = Object.values(props.foods).map(mapPreference);
  const drinksArrayAsNumbers = Object.values(props.drinks).map(mapPreference);
  const cafesArrayAsNumbers = Object.values(props.cafes).map(mapPreference);
  const gamesArrayAsNumbers = Object.values(props.games).map(mapPreference);

  // 배열들을 하나로 합침 (선호도)
  const preference = [
    ...foodsArrayAsNumbers,
    ...drinksArrayAsNumbers,
    ...cafesArrayAsNumbers,
    ...gamesArrayAsNumbers,
  ];

  const handleButtonClick = () => {
    console.log("Navigating to /home");

    console.log(importance);
    console.log(preference);

    const accessToken = window.localStorage.getItem("accessToken");

    const requestData = {
      importance: importance,
      preference: preference,
    };

    // API
    fetch(`http://localhost:8080/test-result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        // ai_recommend 배열의 각 요소를 로컬 스토리지에 저장
        data.ai_recommend.forEach((item, index) => {
          const idx = index + 1; // 인덱스를 1부터 시작
          localStorage.setItem(`tag${idx}`, item.tag);
          localStorage.setItem(`placename${idx}`, item.placename);
          localStorage.setItem(`category${idx}`, item.category);
          localStorage.setItem(`URL${idx}`, item.URL);
        });

        navigate("/home");
      })
      .catch((error) => {
        console.error("취향 카테고리 선택 중 오류 발생:", error);
      });
  };

  return (
    <div>
      <StyledCompleteButton
        disabled={props.disabled}
        onClick={handleButtonClick}
      >
        완료
      </StyledCompleteButton>
    </div>
  );
};

export default HomeFilterCompleteButton;
