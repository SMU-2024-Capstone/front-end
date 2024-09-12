import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Search_grey from "../../assets/images/icons/Search_grey.svg";
import Search_black from "../../assets/images/icons/Search_black.svg";
import { useNavigate } from "react-router-dom";
import { sidoText, gugunText } from "../CustomSelect";

const SearchButton = styled.div`
  width: 360px;
  height: 54px;
  margin-top: 24px;
  margin-left: 16px;
  border: 1px solid #eceff0;
  border-radius: 12px;
  filter: drop-shadow(0 6px 8px rgba(236, 239, 240, 0.3));
  background-color: ${(props) =>
    props.canProceed ? "#ECEFF0" : "transparent"};
  cursor: ${(props) => (props.canProceed ? "pointer" : "not-allowed")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  left: 16px;
  width: 18px;
  height: 18px;
`;

const Text = styled.div`
  color: ${(props) => (props.canProceed ? "#0D0E10" : "#6A6D6E")};
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  font-size: 18px;
`;

const accessToken = window.localStorage.getItem("accessToken");

const SearchBox = ({
  canProceed,
  selectedCategories,
  selectedOptions,
  nothingState,
}) => {
  const [requestData, setRequestData] = useState({
    region: sidoText + gugunText,
    categories: [],
  });

  const navigate = useNavigate();
  const region = sidoText + gugunText;

  const groupCategories = useCallback(
    (options) => {
      const groupedCategories = [];

      selectedCategories.forEach((category) => {
        const categoryLabel = category.label;
        const categoryOptions = options[categoryLabel];

        if (categoryOptions === "상관없음") {
          groupedCategories.push(nothingState[categoryLabel] || []);
        } else {
          groupedCategories.push(
            categoryOptions.filter((option) => option !== "상관없음")
          );
        }
      });

      return groupedCategories;
    },
    [nothingState, selectedCategories]
  );

  const handleClick = () => {
    if (canProceed) {
      // Simplified for testing navigation
      const categories = groupCategories(selectedOptions);

      const updatedRequestData = {
        region: region,
        categories: categories,
      };

      setRequestData(updatedRequestData);

      // Commenting out the API call
      fetch(`http://localhost:8080/search/category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        body: JSON.stringify(updatedRequestData),
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

            // route 배열에서 routeDescription을 <br> 기준으로 나눠 2차원 배열로 저장
            const route = data.route.map((r) =>
              r.routeDescription.split("<br>").filter(Boolean)
            );
            // route = [["도보 51m"], ["도보 1분", "버스 7분", "도보 8분"]]

            navigate("/searchresult", {
              state: {
                selectedCategories,
                requestData: updatedRequestData,
                places,
                lng,
                lat,
                route,
              },
            });
          }

          navigate("/searchresult", {
            state: { selectedCategories, requestData: updatedRequestData },
          });
        })
        .catch((error) => {
          console.error("지역검색 코스 추천 중 오류 발생:", error);
        });

      // Testing navigation
      console.log("Navigating to /searchresult with:", {
        selectedCategories,
        requestData: updatedRequestData,
      });
      // navigate("/searchresult", { state: { selectedCategories, requestData: updatedRequestData } });
    }
  };

  return (
    <SearchButton canProceed={canProceed} onClick={handleClick}>
      <Img src={canProceed ? Search_black : Search_grey} alt="Search icon" />
      <Text canProceed={canProceed}>검색하기</Text>
    </SearchButton>
  );
};

export default SearchBox;
