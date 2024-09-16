import React, { useState, useRef, useEffect, useLocation } from "react";
import styled from "styled-components";
import PhotoSlider from "./HomeFilter_PhotoSlider";
import bookmark from "../../../assets/icons/button/bookmark_default.svg";
import bookmark_clicked from "../../../assets/icons/button/bookmark_clicked.svg";
import send from "../../../assets/icons/button/send.svg";
import ReturnButton from "../../Common/ReturnButton";
import { sidoText, gugunText } from "./Region";
import Food from '../../../assets/icons/category/Food.svg';
import Cafe from '../../../assets/icons/category/Cafe.svg';
import Drink from '../../../assets/icons/category/Drink.svg';
import Sports from '../../../assets/icons/category/Sports.svg';
import Game from '../../../assets/icons/category/Game.svg';
import Movie from '../../../assets/icons/category/Movie.svg';
import Show from '../../../assets/icons/category/Show.svg';
import Exhibition from '../../../assets/icons/category/Exhibition.svg';
import Book from '../../../assets/icons/category/Book.svg';
import Tourism from '../../../assets/icons/category/Tourism.svg';
import Shopping from '../../../assets/icons/category/Shopping.svg';
import Add from '../../../assets/icons/category/Add.svg';
import SelectedFood from '../../../assets/icons/category/Selected_Food.svg';
import SelectedCafe from '../../../assets/icons/category/Selected_Cafe.svg';
import SelectedDrink from '../../../assets/icons/category/Selected_Drink.svg';
import SelectedSports from '../../../assets/icons/category/Selected_Sports.svg';
import SelectedGame from '../../../assets/icons/category/Selected_Game.svg';
import SelectedMovie from '../../../assets/icons/category/Selected_Movie.svg';
import SelectedShow from '../../../assets/icons/category/Selected_Show.svg';
import SelectedExhibition from '../../../assets/icons/category/Selected_Exhibition.svg';
import SelectedBook from '../../../assets/icons/category/Selected_Book.svg';
import SelectedTourism from '../../../assets/icons/category/Selected_Tourism.svg';
import SelectedShopping from '../../../assets/icons/category/Selected_Shopping.svg';
import SelectedAdd from '../../../assets/icons/category/Selected_Add.svg';
import bus from "../../../assets/icons/search_result/bus.svg";
import subway from "../../../assets/icons/search_result/subway.svg";
import walking from "../../../assets/icons/search_result/walking.svg";

export const MIN_Y = 0;
export const MAX_Y = 548;

const Wrapper = styled.div`
  position: relative;
  width: 392px;
  top: 180px; 
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 592px;
  background: #0d0e10;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-out;
  z-index: 3;
  overflow: hidden;
`;

const Header = styled.div`
  height: 44px;
  position: relative;
  padding: 16px 0;
  cursor: grab;
`;

const Handle = styled.div`
  width: 120px;
  height: 4px;
  border-radius: 4px;
  background-color: #282728;
  margin: auto;
`;

const Send = styled.img`
  width: 24px;
  height: 24px;
`;

const BookMarkButton = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const Content = styled.div`
  /* Add any required styling here */
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 12px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Head = styled.div`
  color: #ffffff;
  font-family: "Apple-SD-GothicNeo-Bold";
  font-size: 18px;
  line-height: 140%;
  letter-spacing: -0.3%;
  margin-left: 16px;
  margin-bottom: 10px;
`;

const T1 = styled.div`
  color: #ffffff;
  font-family: "Apple-SD-GothicNeo-Medium";
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.3%;
  margin-left: 16px;
  height: 20px;
`;

const T2 = styled.div`
  color: #ffffff;
  font-family: "Apple-SD-GothicNeo-Medium";
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.3%;
  margin-left: 16px;
  margin-top: 12px;
`;

const CategoryList = styled.div`
  display: flex;
  margin-top: 7px;
  margin-left: 16px;
`;

const CategoryButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  position: relative;
  margin-right: 16px;
`;

const CategoryButton = styled.div`
  width: 44px;
  height: 44px;
  background-color: ${(props) =>
    props.isSelected ? "#F8FAF9" : "transparent"};
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default
  position: relative;

  img {
    margin: 0; 
  }
`;

const CategoryText = styled.div`
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#ECEFF0")};
  text-align: center;
  font-size: 12px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  margin-top: 8px;
`;

const NumberCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 8px;
  font-family: "Apple-SD-GothicNeo-Medium";
  background-color: #b083d3;
  color: #f8faf9;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: -5px;
  line-height: 1;
  padding-top: 1px;
`;

const MethodContainer = styled.div`
  width: auto;
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

const MethodImg = styled.img`
  width: 14px;
  height: 16px;
  margin-top: 2px;
  margin-right: 6px;
`;

const MethodText = styled.div`
  color: #c675ff;
  text-align: center;
  font-size: 14px;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.3%;
  line-height: 140%;
  margin-left: 6px;
`;

const MethodRod = styled.div`
  width: 40px;
  height: 4px;
  background-color: #c675ff;
  border-radius: 12px;
`;

const categories = [
  { icon: Food, selectedIcon: SelectedFood, label: "식사" },
  { icon: Cafe, selectedIcon: SelectedCafe, label: "카페" },
  { icon: Drink, selectedIcon: SelectedDrink, label: "술" },
  { icon: Sports, selectedIcon: SelectedSports, label: "스포츠" },
  { icon: Game, selectedIcon: SelectedGame, label: "오락" },
  { icon: Movie, selectedIcon: SelectedMovie, label: "영화" },
  { icon: Show, selectedIcon: SelectedShow, label: "공연" },
  { icon: Exhibition, selectedIcon: SelectedExhibition, label: "전시" },
  { icon: Book, selectedIcon: SelectedBook, label: "독서" },
  { icon: Tourism, selectedIcon: SelectedTourism, label: "관광" },
  { icon: Shopping, selectedIcon: SelectedShopping, label: "쇼핑" },
  { icon: Add, selectedIcon: SelectedAdd, label: "기타" },
];

const BottomSheet = ({ selectedCategories, requestData, places, route }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(MIN_Y);
  const startY = useRef(0);
  const startPos = useRef(0);
  const animationFrameId = useRef(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  console.log(requestData);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startY.current = e.clientY;
    startPos.current = position;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - startY.current;
    let newPosition = startPos.current + deltaY;

    if (newPosition < MIN_Y) newPosition = MIN_Y;
    if (newPosition > MAX_Y) newPosition = MAX_Y;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      setPosition(newPosition);
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const selectedCategoryLabels = selectedCategories.map(
    (category) => category.label
  );
  window.localStorage.setItem(
    "selectedCategories",
    JSON.stringify(selectedCategoryLabels)
  );

  const filteredCategories = categories
    .filter((category) => selectedCategoryLabels.includes(category.label))
    .sort(
      (a, b) =>
        selectedCategoryLabels.indexOf(a.label) -
        selectedCategoryLabels.indexOf(b.label)
    );

  return (
    <Wrapper style={{ transform: `translateY(${position}px)` }}>
      <Header onMouseDown={handleMouseDown}>
        <Handle />
      </Header>
      <Content>
        <PhotoSlider selectedCategories={selectedCategoryLabels} />
        <TopBar>
          <Send src={send} />
          <BookMarkButton onClick={toggleBookmark}>
            <img
              src={isBookmarked ? bookmark_clicked : bookmark}
              alt="bookMark"
              style={{ width: "100%", height: "100%" }}
            />
          </BookMarkButton>
        </TopBar>
      </Content>
      <Head>
        {sidoText} {gugunText}에 도착
      </Head>

      {/* 장소와 경로를 순서대로 렌더링 */}
      {places.map((place, index) => (
        <div key={index}>
          <T1>#{place}</T1>

          {/* 경로는 place보다 하나 적으므로 마지막 place 뒤에는 경로가 없음 */}
          {index < route.length && (
            <MethodContainer>
              <MethodImg
                src={
                  route[index].some((step) => step.includes("버스"))
                    ? bus
                    : route[index].some((step) => step.includes("지하철"))
                    ? subway
                    : walking
                }
                alt="method"
              />
              <MethodRod></MethodRod>
              <MethodText>{route[index].join(" ")}</MethodText>
            </MethodContainer>
          )}
        </div>
      ))}

      <T2>코스 순서:</T2>
      <CategoryList>
        {filteredCategories.map((category, index) => {
          const isSelected = selectedCategoryLabels.includes(category.label);

          return (
            <CategoryButtonContainer key={index}>
              <CategoryButton isSelected={isSelected} isSelectable={true}>
                <img
                  src={isSelected ? category.selectedIcon : category.icon}
                  alt={category.label}
                />
                {isSelected && (
                  <NumberCircle>
                    {selectedCategoryLabels.indexOf(category.label) + 1}
                  </NumberCircle>
                )}
              </CategoryButton>
              <CategoryText isSelected={isSelected}>
                {category.label}
              </CategoryText>
            </CategoryButtonContainer>
          );
        })}
      </CategoryList>
      <ReturnButton requestData={requestData} selectedCategories={selectedCategories} />
    </Wrapper>
  );
};

export default BottomSheet;
