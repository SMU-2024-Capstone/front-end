import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BackBox_PlaceList from "../components/Common/Box_Search&Back/BackBox_PlaceList";
import Logo from '../assets/icons/category/Logo.svg';
import Food from '../assets/icons/category/Food.svg';
import Cafe from '../assets/icons/category/Cafe.svg';
import Drink from '../assets/icons/category/Drink.svg';
import Game from '../assets/icons/category/Game.svg';
import SelectedLogo from '../assets/icons/category/Selected_Logo.svg';
import SelectedFood from '../assets/icons/category/Selected_Food.svg';
import SelectedCafe from '../assets/icons/category/Selected_Cafe.svg';
import SelectedDrink from '../assets/icons/category/Selected_Drink.svg';
import SelectedGame from '../assets/icons/category/Selected_Game.svg';
import PlaceListContents from '../components/Page_Components/PlaceList/PlaceList_Contents';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap; 
  gap: 26px;
  margin-top: 34px;
  overflow-x: auto;
  margin-bottom: 24px;
`;

const CategoryButtonContainer = styled.div`
  width: 44px; 
  height: 64px; 
  display: flex;
  flex-direction: column;
  align-items: center;
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
  cursor: ${(props) => (props.isSelected ? 'default' : 'pointer')};
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
  margin-top: 4px; 
`;

const categories = [
  { icon: Logo, selectedIcon: SelectedLogo, label: '전체' },
  { icon: Food, selectedIcon: SelectedFood, label: '식사' },
  { icon: Cafe, selectedIcon: SelectedCafe, label: '카페' },
  { icon: Drink, selectedIcon: SelectedDrink, label: '술집' },
  { icon: Game, selectedIcon: SelectedGame, label: '놀거리' },
];

const PlaceList = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  const [selectedCategory, setSelectedCategory] = useState('전체'); 
  const [placelist, setPlacelist] = useState([]); 

  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  const fetchData = () => {
    const url = `http://localhost:8080/places?category=${selectedCategory}`;
    console.log(url);
    console.log(selectedCategory);

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setPlacelist(data.rating_places);
      console.log(placelist);
      })
    .catch(error => {
      console.error("DB 장소 리스트 오류:", error);
    });

  const handleClick = (category) => {
    if (selectedCategory !== category.label) {
      setSelectedCategory(category.label);
    }
  };

  return (
    <>
      <BackBox_PlaceList />
      <Container>
        {categories.map((category) => {
          const isSelected = selectedCategory === category.label;
          return (
            <CategoryButtonContainer key={category.label}>
              <CategoryButton
                isSelected={isSelected}
                onClick={() => !isSelected && handleClick(category)}
              >
                <img 
                  src={isSelected ? category.selectedIcon : category.icon} 
                  alt={category.label} 
                />
              </CategoryButton>
              <CategoryText isSelected={isSelected}>
                {category.label}
              </CategoryText>
            </CategoryButtonContainer>
          );
        })}
      </Container>
      <PlaceListContents 
        selectedCategory={selectedCategory}
        placelist={placelist}
      />
    </>
  );
}
};

export default PlaceList;
