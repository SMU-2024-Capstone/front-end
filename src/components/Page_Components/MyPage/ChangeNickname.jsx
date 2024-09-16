import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import NextButton from '../../Common/Button_Next&Complete/NextButton';
import { useNavigate } from "react-router-dom";

const SmallLogo = styled.div`
  img {
    margin-top: 52px;
    justify-content: center;
    align-items: center;
  }
`;

const BackgroundBox = styled.div`
  width: 360px;
  height: 502px;
  background: linear-gradient(${(props) => props.bgColor1}, ${(props) => props.bgColor2});
  border-radius: 12px;
  filter: drop-shadow(0px 8px 16px #282728);
  margin-top: 32px;
  margin-left: 16px;
`;

const Text = styled.div`
  padding-top: 36px;
  padding-left: 24px;
  color: #F8FAF9;
  font-size: 30px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  line-height: 140%;
`;

const InputBox = styled.div`
  input {
    width: 227px;
    height: 36px;  
    margin-left: 24px;
    outline: none;
    border-width: 0 0 2px;
    background-color: transparent;
    color: ${(props) => (props.isDuplicate ? '#F44336' : '#D3FF4E')};
    font-size: 30px;
    font-family: "Apple-SD-GothicNeo-Medium";
    letter-spacing: -0.4%;
    line-height: 140%;

    &::placeholder {
      color: ${(props) => (props.isDuplicate ? '#F44336' : '#D3FF4E')};
      opacity: 40%;
      outline: none;
    }

    &:hover {
      color: ${(props) => (props.isDuplicate ? '#F44336' : '#D3FF4E')};
      outline: none;
    }

    &:focus {
      color: ${(props) => (props.isDuplicate ? '#F44336' : '#D3FF4E')};
      outline: none;
    }
  }

  text {
    color: #F8FAF9;
    font-size: 30px;
    font-family: "Apple-SD-GothicNeo-Medium";
    letter-spacing: -0.4%;
    line-height: 140%;
    outline: none;
  }

  .error-message {
    color: #F44336;
    font-size: 12px;
    margin-left: 24px;
    margin-top: 7px;
    font-family: "Apple-SD-GothicNeo-Medium";
    outline: none;
  }
`;

const CateGoryBox = styled.div`
  width: 360px;
  height: 72px;
  background-color: #282728;
  border-radius: 12px;
  margin-top: 24px;
  margin-left: 16px;
`;

const CateGoryText = styled.div`
  padding-top: 25px;
  padding-left: 24px;
  color: #6A6D6E;
  font-size: 18px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const ChangeNickname = () => {
  const [nickname, setNickname] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const navigate = useNavigate();

  const handleNickname = (e) => {
    const newValue = e.target.value;
    const filteredValue = newValue.replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9]/g, '');

    if (filteredValue.length > 5) {
      setNickname(filteredValue.substr(0, 5));
    } else {
      setNickname(filteredValue);
    }

    setIsDuplicate(false); // 닉네임 수정 시 중복 상태 초기화
  };

  const handleCompositionEnd = (e) => {
    const newValue = e.target.value;
    const filteredValue = newValue.replace(/[^ㄱ-ㅎ가-힣a-zA-Z0-9]/g, '');

    if (filteredValue.length > 5) {
      setNickname(filteredValue.substr(0, 5));
    } else {
      setNickname(filteredValue);
    }
  };

  const handleFocus = () => {
    if (isDuplicate) {
      setNickname(''); // 중복일 때 입력 필드 비움
    }
    setIsDuplicate(false); // 입력 창을 클릭하면 중복 상태 초기화
  };

  const handleCheckDuplicate = async () => {
    const accessToken = window.localStorage.getItem("accessToken");
    const requestData = {
      nickname: nickname
    };
    console.log(nickname);

    try {
      const response = await fetch(`http://localhost:8080/user/nickname`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(requestData),
      });
      
      const data = await response.json(); // JSON 형식으로 응답 처리
  
      if (data.status === 200 && data.message === "닉네임 중복") {
        setIsDuplicate(true); // 닉네임 중복일 경우 true로 설정
        return false; // 중복일 경우 false 반환
      } else if (data.status === 200 && data.message === "닉네임 사용 가능") {
        setIsDuplicate(false); // 중복 아님
        window.localStorage.setItem("nickname", nickname);
        return true; // 성공 시 true 반환
      } else {
        throw new Error("닉네임 중복 코드 오류");
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  useEffect(() => {
    // 자음만 포함된 부분이 있는지 검사
    const containsJamoOnlyParts = /([ㄱ-ㅎ]+)([^ㄱ-ㅎ]|$)/.test(nickname);

    setIsActive(nickname.length > 0 && !isDuplicate && !containsJamoOnlyParts);
  }, [nickname, isDuplicate]);

  const handleNextButtonClick = async () => {
    const isNotDuplicate = await handleCheckDuplicate(); // 중복 확인 후 결과 받기
    if (isActive && isNotDuplicate) {
      navigate("/onboarding", { state: { nickname } });
    }
  };

  return (
    <div>
      <BackgroundBox bgColor1="#282728" bgColor2="#0D0E10">
        <Text>나의 닉네임은</Text>
        <InputBox isDuplicate={isDuplicate}>
          <input 
            value={nickname}
            onChange={handleNickname}
            onCompositionEnd={handleCompositionEnd}
            onFocus={handleFocus} // 입력창을 클릭하면 중복 상태 초기화 및 내용 비우기
            id="nickname"
            placeholder='최대 5자까지'/>
          <text>입니다.</text>
          {isDuplicate && <div className="error-message">이미 사용 중인 닉네임입니다.</div>}
        </InputBox>
      </BackgroundBox>
      <CateGoryBox>
        <CateGoryText>취향 설정</CateGoryText>
      </CateGoryBox>
      <NextButton 
        disabled={!isActive} // 로딩 상태 제거 후 버튼 활성화 조건 업데이트
        onClick={handleNextButtonClick}>
      </NextButton>
    </div>
  );
};

export default ChangeNickname;
