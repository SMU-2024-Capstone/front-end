import React from 'react';
import styled from 'styled-components';
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

const Container = styled.div`
  margin-top: 36px;
  margin-left: 24px;
`;

const CategoryButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  position: relative;
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

const Category = ({ selectedCategories, setSelectedCategories }) => {
  const handleClick = (category) => {
    const isSelected = selectedCategories.includes(category);
    let newSelectedCategories = [];

    if (isSelected) {
      newSelectedCategories = selectedCategories.filter((item) => item !== category);
    } else if (selectedCategories.length < 4) {
      newSelectedCategories = [...selectedCategories, category];
    }

    console.log('Updated Categories:', newSelectedCategories); // Debugging line
    setSelectedCategories(newSelectedCategories);
  };

  return (
    <Container>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '8px' }}>
        {categories.map((category, index) => {
          const isSelected = selectedCategories.includes(category);
          const isSelectable = selectedCategories.length < 4 || isSelected;
          
          return (
            <CategoryButtonContainer key={index}>
              <CategoryButton
                isSelected={isSelected}
                isSelectable={isSelectable}
                onClick={() => isSelectable && handleClick(category)}
              >
                <img 
                  src={isSelected ? category.selectedIcon : category.icon} 
                  alt={category.label} 
                />
                {isSelected && (
                  <NumberCircle>{selectedCategories.indexOf(category) + 1}</NumberCircle>
                )}
              </CategoryButton>
              <CategoryText isSelected={isSelected}>
                {category.label}
              </CategoryText>
            </CategoryButtonContainer>
          );
        })}
      </div>
    </Container>
  );
};

export default Category;
