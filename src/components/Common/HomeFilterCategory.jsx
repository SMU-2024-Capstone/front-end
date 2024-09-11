import React, { useState } from "react";
import styled from "styled-components";
import HomeFilterNextButton from "./HomeFilterNextButton";
import HomeFilterCompleteButton from "./HomeFilterCompleteButton";
import { useLocation } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import "swiper/css";

const BackgroundBox = styled.div`
  width: 360px;
  height: 520px;
  background: linear-gradient(
    ${(props) => props.bgColor1},
    ${(props) => props.bgColor2}
  );
  border-radius: 12px;
  filter: drop-shadow(0px 8px 16px #282728);
  margin-top: 52px;
  margin-left: 16px;
  padding-top: 32px;
`;

const TextContainer = styled.div`
  width: auto;
  height: 26px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-bottom: 22px;
`;

const BigText = styled.div`
  color: #eceff0;
  font-size: 20px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  line-height: 130%;
`;

const NicknameText = styled.span`
  color: #d3ff4e;
  font-size: 20px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  line-height: 130%;
  margin-right: 5px;
`;

const CategoryText = styled.span`
  color: #c675ff;
  font-size: 20px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  line-height: 130%;
  margin-right: 5px;
`;

const FilterText = styled.div`
  color: #ffffff;
  text-align: left;
  font-size: 18px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  margin-left: 24px;
  margin-bottom: 8px;
`;

const FilterCircleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 25px;
  gap: 8px;
  margin-left: 10px;
  margin-right: 10px;
`;

const FilterCircle = styled.div`
  border-radius: 60px;
  border: 1px solid #f8faf9;
  padding: 4px 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isSelected ? "#F8FAF9" : "transparent"};
  color: ${(props) => (props.isSelected ? "#8F4ABF" : "#6A6D6E")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: auto;
  box-sizing: border-box;
`;

const FilterDetailText = styled.div`
  font-size: 12px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const SwiperContainer = styled.div``;

const CircleBox = styled.div`
  display: flex;
  margin-left: 174px;
`;

const Circle1 = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${(props) => (props.isActive ? "#d9d9d9" : "#6a6d6e")};
  border-radius: 50%;
  margin-right: 4px;
`;

const Circle2 = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${(props) => (props.isActive ? "#6a6d6e" : "#d9d9d9")};
  border-radius: 50%;
`;

const HomeFilterCategory = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    가격: null,
    맛: null,
    양: null,
    청결도: null,
    웨이팅: null,
  });

  const [selectedFoods, setSelectedFoods] = useState({
    한식: null,
    양식: null,
    일식: null,
    중식: null,
    아시아음식: null,
  });

  const [selectedDrinks, setSelectedDrinks] = useState({
    요리주점: null,
    이자카야: null,
    맥주호프: null,
    포장마차: null,
    바: null,
    와인: null,
  });

  const [selectedCafes, setSelectedCafes] = useState({
    커피전문점: null,
    디저트: null,
  });

  const tour = "전시 및 관광";

  const [selectedGames, setSelectedGames] = useState({
    공연: null,
    스포츠: null,
    영화: null,
    오락: null,
    [tour]: null,
  });

  const [step, setStep] = useState(1);

  const handleFilterClick = (preference, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [preference]: value,
    }));
  };

  const handleFoodClick = (food, value) => {
    setSelectedFoods((prevFoods) => ({
      ...prevFoods,
      [food]: value,
    }));
  };

  const handleDrinkClick = (drink, value) => {
    setSelectedDrinks((prevDrinks) => ({
      ...prevDrinks,
      [drink]: value,
    }));
  };

  const handleCafeClick = (cafe, value) => {
    setSelectedCafes((prevCafes) => ({
      ...prevCafes,
      [cafe]: value,
    }));
  };

  const handleGameClick = (game, value) => {
    setSelectedGames((prevGames) => ({
      ...prevGames,
      [game]: value,
    }));
  };

  const handleNextButtonClick = () => {
    setStep(step + 1);
  };

  const preferences = [
    { label: "가격", options: ["상관없음", "약간 중요", "중요", "매우 중요"] },
    { label: "맛", options: ["상관없음", "약간 중요", "중요", "매우 중요"] },
    { label: "양", options: ["상관없음", "약간 중요", "중요", "매우 중요"] },
    {
      label: "청결도",
      options: ["상관없음", "약간 중요", "중요", "매우 중요"],
    },
    {
      label: "웨이팅",
      options: ["상관없음", "약간 중요", "중요", "매우 중요"],
    },
  ];

  const foods = [
    { label: "한식", options: ["선호 안함", "약간 선호", "선호", "매우 선호"] },
    { label: "양식", options: ["선호 안함", "약간 선호", "선호", "매우 선호"] },
    { label: "일식", options: ["선호 안함", "약간 선호", "선호", "매우 선호"] },
    { label: "중식", options: ["선호 안함", "약간 선호", "선호", "매우 선호"] },
    {
      label: "아시아음식",
      options: ["선호 안함", "약간 선호", "선호", "매우 선호"],
    },
  ];

  const drinks = [
    {
      label: "요리주점",
      options: ["선호 안함", "약간 선호", "선호", "매우 선호"],
    },
    {
      label: "이자카야",
      options: ["선호 안함", "약간 선호", "선호", "매우 선호"],
    },
    {
      label: "맥주호프",
      options: ["선호 안함", "약간 선호", "선호", "매우 선호"],
    },
    {
      label: "포장마차",
      options: ["선호 안함", "약간 선호", "선호", "매우 선호"],
    },
    { label: "바", options: ["선호 안함", "약간 선호", "선호", "매우 선호"] },
    { label: "와인", options: ["선호 안함", "약간 선호", "선호", "매우 선호"] },
  ];

  const cafes = [
    {
      label: "커피전문점",
      options: ["선호 안함", "약간 선호", "선호", "매우 선호"],
    },
    {
      label: "디저트",
      options: ["선호 안함", "약간 선호", "선호", "매우 선호"],
    },
  ];

  const games = [
    { label: "공연", options: ["선호 안함", "약간 선호", "선호", "매우 선호"] },
    {
      label: "스포츠",
      options: ["선호 안함", "약간 선호", "선호", "매우 선호"],
    },
    { label: "영화", options: ["선호 안함", "약간 선호", "선호", "매우 선호"] },
    { label: "오락", options: ["선호 안함", "약간 선호", "선호", "매우 선호"] },
    {
      label: "전시 및 관광",
      options: ["선호 안함", "약간 선호", "선호", "매우 선호"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const location = useLocation();
  const { nickname } = location.state || { nickname: "" };

  const renderStepContent = () => {
    if (step === 1) {
      return (
        <>
          <TextContainer>
            <NicknameText>{nickname}</NicknameText>
            <BigText>님의 중요도를 선택해 주세요.</BigText>
          </TextContainer>
          {preferences.map((preference) => (
            <div key={preference.label}>
              <FilterText>{preference.label}</FilterText>
              <FilterCircleContainer>
                {preference.options.map((option, index) => (
                  <FilterCircle
                    key={index}
                    isSelected={selectedFilters[preference.label] === option}
                    onClick={() => handleFilterClick(preference.label, option)}
                  >
                    <FilterDetailText>{option}</FilterDetailText>
                  </FilterCircle>
                ))}
              </FilterCircleContainer>
            </div>
          ))}
        </>
      );
    } else if (step === 2) {
      return (
        <>
          <TextContainer>
            <CategoryText>식사</CategoryText>
            <BigText>선호도를 선택해 주세요.</BigText>
          </TextContainer>
          {foods.map((food) => (
            <div key={food.label}>
              <FilterText>{food.label}</FilterText>
              <FilterCircleContainer>
                {food.options.map((option, index) => (
                  <FilterCircle
                    key={index}
                    isSelected={selectedFoods[food.label] === option}
                    onClick={() => handleFoodClick(food.label, option)}
                  >
                    <FilterDetailText>{option}</FilterDetailText>
                  </FilterCircle>
                ))}
              </FilterCircleContainer>
            </div>
          ))}
        </>
      );
    } else if (step === 3) {
      return (
        <>
          <TextContainer>
            <CategoryText>술</CategoryText>
            <BigText>선호도를 선택해 주세요.</BigText>
          </TextContainer>
          <SwiperContainer>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
            >
              <SwiperSlide>
                {drinks.slice(0, 5).map((drink) => (
                  <div key={drink.label}>
                    <FilterText>{drink.label}</FilterText>
                    <FilterCircleContainer>
                      {drink.options.map((option, index) => (
                        <FilterCircle
                          key={index}
                          isSelected={selectedDrinks[drink.label] === option}
                          onClick={() => handleDrinkClick(drink.label, option)}
                        >
                          <FilterDetailText>{option}</FilterDetailText>
                        </FilterCircle>
                      ))}
                    </FilterCircleContainer>
                  </div>
                ))}
              </SwiperSlide>

              <SwiperSlide>
                {drinks.slice(5, 6).map((drink) => (
                  <div key={drink.label}>
                    <FilterText>{drink.label}</FilterText>
                    <FilterCircleContainer>
                      {drink.options.map((option, index) => (
                        <FilterCircle
                          key={index}
                          isSelected={selectedDrinks[drink.label] === option}
                          onClick={() => handleDrinkClick(drink.label, option)}
                        >
                          <FilterDetailText>{option}</FilterDetailText>
                        </FilterCircle>
                      ))}
                    </FilterCircleContainer>
                  </div>
                ))}
                <div style={{ width: "360px", height: "330px" }} />
              </SwiperSlide>
            </Swiper>
          </SwiperContainer>

          <CircleBox>
            <Circle1 isActive={activeIndex === 0}></Circle1>
            <Circle2 isActive={activeIndex === 0}></Circle2>
          </CircleBox>
        </>
      );
    } else if (step === 4) {
      return (
        <>
          <TextContainer>
            <CategoryText>카페</CategoryText>
            <BigText>선호도를 선택해 주세요.</BigText>
          </TextContainer>
          {cafes.map((cafe) => (
            <div key={cafe.label}>
              <FilterText>{cafe.label}</FilterText>
              <FilterCircleContainer>
                {cafe.options.map((option, index) => (
                  <FilterCircle
                    key={index}
                    isSelected={selectedCafes[cafe.label] === option}
                    onClick={() => handleCafeClick(cafe.label, option)}
                  >
                    <FilterDetailText>{option}</FilterDetailText>
                  </FilterCircle>
                ))}
              </FilterCircleContainer>
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          <TextContainer>
            <CategoryText>기타 놀거리</CategoryText>
            <BigText>선호도를 선택해 주세요.</BigText>
          </TextContainer>
          {games.map((game) => (
            <div key={game.label}>
              <FilterText>{game.label}</FilterText>
              <FilterCircleContainer>
                {game.options.map((option, index) => (
                  <FilterCircle
                    key={index}
                    isSelected={selectedGames[game.label] === option}
                    onClick={() => handleGameClick(game.label, option)}
                  >
                    <FilterDetailText>{option}</FilterDetailText>
                  </FilterCircle>
                ))}
              </FilterCircleContainer>
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <>
      <BackgroundBox bgColor1="#282728" bgColor2="#0D0E10">
        {renderStepContent()}
      </BackgroundBox>

      {step === 5 ? (
        <HomeFilterCompleteButton
          onClick={handleNextButtonClick}
          disabled={
            Object.values(selectedGames).filter((value) => value !== null)
              .length < 5
          }
          filterArray={selectedFilters}
          foods={selectedFoods}
          drinks={selectedDrinks}
          cafes={selectedCafes}
          games={selectedGames}
        ></HomeFilterCompleteButton>
      ) : (
        <HomeFilterNextButton
          disabled={
            (step === 1 &&
              Object.values(selectedFilters).filter((value) => value !== null)
                .length < 5) ||
            (step === 2 &&
              Object.values(selectedFoods).filter((value) => value !== null)
                .length < 5) ||
            (step === 3 &&
              Object.values(selectedDrinks).filter((value) => value !== null)
                .length < 6) ||
            (step === 4 &&
              Object.values(selectedCafes).filter((value) => value !== null)
                .length < 2)
          }
          onClick={handleNextButtonClick}
        ></HomeFilterNextButton>
      )}
    </>
  );
};

export default HomeFilterCategory;
