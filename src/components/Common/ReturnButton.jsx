import React, { useState } from 'react';
import styled from 'styled-components';
import return_default from '../../assets/icons/button/return_default.svg';
import return_clicked from '../../assets/icons/button/return_clicked.svg';
import { useNavigate } from "react-router-dom";

const ReturnBtn = styled.div`
  width: 40px;
  height: 134px;
  border-radius: 12px 0 0 12px;
  border: 1px solid #B083D3;
  border-right: none; 
  background-color: #282728;
  position: absolute;
  top: 386px; 
  bottom: 60px; 
  left: 352px; 
  filter: drop-shadow(-6px 4px 8px rgba(143, 74, 191, 0.15));
  color: #B083D3;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}; 
  transition: background-color 0.3s, color 0.3s, border 0.3s;

  &:hover {
    background-color: ${(props) => props.disabled ? '#282728' : '#B083D3'};
    color: ${(props) => props.disabled ? '#B083D3' : '#282728'};
    border: none;
  }
`;

const Return = styled.div`
  display: flex;
  flex-direction: column; 
  position: relative;
`;

const Text = styled.div`
  font-size: 14px;
  writing-mode: vertical-lr;
  text-align: center;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.3%;
  line-height: 129%;
  color: #B083D3;
  padding-top: 50px;
  padding-left: 12px;

  ${ReturnBtn}:hover & {
    color: #282728;
  }
`;

const Img = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 10px;
  top: 16px;
  right: 6px;
  bottom: 94px;
`;

const accessToken = window.localStorage.getItem("accessToken");

const ReturnButton = ({ disabled, selectedCategories, requestData }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleButtonClick = () => {
    if (!disabled) { //disabled는 상호작용 여부 true일 때 클릭 안됨

      fetch(`http://localhost:8080/search/category`, {
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

            if (data.info == 0) {
              navigate("/searchrerror");
            } else {
              const places = data.info[0]; // 장소 배열
              const lng = data.info[1]; // 경도
              const lat = data.info[2]; // 위도
              const link = data.info[3]; //링크

              // route 배열에서 routeDescription을 <br> 기준으로 나눠 2차원 배열로 저장
              const route = data.route.map((r) =>
                  r.routeDescription.split("<br>").filter(Boolean)
              );
              // route = [["도보 51m"], ["도보 1분", "버스 7분", "도보 8분"]]

              navigate("/searchresult", {
                state: {
                  selectedCategories,
                  requestData,
                  places,
                  lng,
                  lat,
                  route,
                  link,
                },
              });
            }
          })
          .catch((error) => {
            console.error("지역검색 코스 추천 중 오류 발생:", error);
          });

      // Testing navigation
      console.log("Navigating to /searchresult with:", {
        selectedCategories,
        requestData,
      });
      // navigate("/searchresult", { state: { selectedCategories, requestData: updatedRequestData } });
    }
  };

  return (
      <ReturnBtn
          disabled={disabled}
          onClick={handleButtonClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
        <Return>
          <Img src={hover ? return_clicked : return_default} />
          <Text>
            다시추천
          </Text>
        </Return>
      </ReturnBtn>
  );
};

export default ReturnButton;
