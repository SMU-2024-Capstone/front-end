import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PhotoSlider from './HomeFilter_PhotoSlider';
import bookmark from '../../assets/images/bookmark.svg';
import bookmark_clicked from '../../assets/images/bookmark_clicked.svg';
import send from '../../assets/images/send.svg';
import ReturnButton from '../Common/Return';
import { sidoText, gugunText } from '../CustomSelect';
import Food from '../../assets/images/icons/category/Food.svg';
import Cafe from '../../assets/images/icons/category/Cafe.svg';
import Drink from '../../assets/images/icons/category/Drink.svg';
import Sports from '../../assets/images/icons/category/Sports.svg';
import Game from '../../assets/images/icons/category/Game.svg';
import Movie from '../../assets/images/icons/category/Movie.svg';
import Show from '../../assets/images/icons/category/Show.svg';
import Exhibition from '../../assets/images/icons/category/Exhibition.svg';
import Book from '../../assets/images/icons/category/Book.svg';
import Tourism from '../../assets/images/icons/category/Tourism.svg';
import Shopping from '../../assets/images/icons/category/Shopping.svg';
import Add from '../../assets/images/icons/category/Add.svg';
import SelectedFood from '../../assets/images/icons/category/Selected_Food.svg';
import SelectedCafe from '../../assets/images/icons/category/Selected_Cafe.svg';
import SelectedDrink from '../../assets/images/icons/category/Selected_Drink.svg';
import SelectedSports from '../../assets/images/icons/category/Selected_Sports.svg';
import SelectedGame from '../../assets/images/icons/category/Selected_Game.svg';
import SelectedMovie from '../../assets/images/icons/category/Selected_Movie.svg';
import SelectedShow from '../../assets/images/icons/category/Selected_Show.svg';
import SelectedExhibition from '../../assets/images/icons/category/Selected_Exhibition.svg';
import SelectedBook from '../../assets/images/icons/category/Selected_Book.svg';
import SelectedTourism from '../../assets/images/icons/category/Selected_Tourism.svg';
import SelectedShopping from '../../assets/images/icons/category/Selected_Shopping.svg';
import SelectedAdd from '../../assets/images/icons/category/Selected_Add.svg';

export const MIN_Y = 0;
export const MAX_Y = 540;

const Wrapper = styled.div`
  position: relative;
  width: 392px;
  top: 136px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  height: 580px;
  background: #0D0E10; 
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-out;
  z-index: 3;
  overflow: hidden;
`;

const Header = styled.div`
  height: 52px;
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
  margin-bottom: 16px;
  margin-left: 16px;
  height: 42px;
`;

const T2 = styled.div`
  color: #ffffff;
  font-family: "Apple-SD-GothicNeo-Medium";
  font-size: 14px;
  line-height: 140%;
  letter-spacing: -0.3%;
  margin-left: 16px;
  margin-top: 24px;
`;

const CategoryList = styled.div`
  display: flex;
  margin-top: 4px;
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
  background-color: ${(props) => (props.isSelected ? '#F8FAF9' : 'transparent')};
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.isSelectable ? 'pointer' : 'not-allowed')};
  position: relative;

  img {
    margin: 0; 
  }
`;

const CategoryText = styled.div`
  color: ${(props) => (props.isSelected ? '#FFFFFF' : '#ECEFF0')}; 
  text-align: center;
  font-size: 12px;
  font-family: 'Apple-SD-GothicNeo-Medium';
  letter-spacing: -0.3%;
  line-height: 140%;
  margin-top: 8px; 
`;

const NumberCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 8px;
  font-family: 'Apple-SD-GothicNeo-Medium';
  background-color: #B083D3;
  color: #F8FAF9;
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

const categories = [
  { icon: Food, selectedIcon: SelectedFood, label: '식사' },
  { icon: Cafe, selectedIcon: SelectedCafe, label: '카페' },
  { icon: Drink, selectedIcon: SelectedDrink, label: '술' },
  { icon: Sports, selectedIcon: SelectedSports, label: '스포츠' },
  { icon: Game, selectedIcon: SelectedGame, label: '오락' },
  { icon: Movie, selectedIcon: SelectedMovie, label: '영화' },
  { icon: Show, selectedIcon: SelectedShow, label: '공연' },
  { icon: Exhibition, selectedIcon: SelectedExhibition, label: '전시' },
  { icon: Book, selectedIcon: SelectedBook, label: '독서' },
  { icon: Tourism, selectedIcon: SelectedTourism, label: '관광' },
  { icon: Shopping, selectedIcon: SelectedShopping, label: '쇼핑' },
  { icon: Add, selectedIcon: SelectedAdd, label: '기타' }
];

const BottomSheet = ({ selectedCategories }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(MIN_Y);
  const startY = useRef(0);
  const startPos = useRef(0);
  const animationFrameId = useRef(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

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
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const selectedCategoryLabels = selectedCategories.map(category => category.label);


  const filteredCategories = categories
  .filter(category => selectedCategoryLabels.includes(category.label))
  .sort((a, b) => selectedCategoryLabels.indexOf(a.label) - selectedCategoryLabels.indexOf(b.label));

  return (
    <Wrapper style={{ transform: `translateY(${position}px)` }}>
      <Header onMouseDown={handleMouseDown}>
        <Handle />
      </Header>
      <Content>
        <PhotoSlider />
        <TopBar>
          <Send src={send} />
          <BookMarkButton onClick={toggleBookmark}>
            <img 
              src={isBookmarked ? bookmark_clicked : bookmark} 
              alt="bookMark" 
              style={{ width: '100%', height: '100%' }} 
            />
          </BookMarkButton>
        </TopBar>
      </Content>
      <Head>{sidoText} {gugunText}에 도착</Head>
      <T1>#국립현대미술관 #스타벅스 광화문점 #뼈탄집</T1>
      <T2>코스 순서:</T2>
      <CategoryList>
        {filteredCategories.map((category, index) => {
          const isSelected = selectedCategoryLabels.includes(category.label);

          return (
            <CategoryButtonContainer key={index}>
              <CategoryButton
                isSelected={isSelected}
                isSelectable={true} 
              >
                <img 
                  src={isSelected ? category.selectedIcon : category.icon} 
                  alt={category.label} 
                />
                {isSelected && (
                  <NumberCircle>{selectedCategoryLabels.indexOf(category.label) + 1}</NumberCircle>
                )}
              </CategoryButton>
              <CategoryText isSelected={isSelected}>
                {category.label}
              </CategoryText>
            </CategoryButtonContainer>
          );
        })}
      </CategoryList>
      <ReturnButton />
    </Wrapper>
  );
};

export default BottomSheet;
