import React, { useState } from 'react';
import styled from 'styled-components';

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
  padding: 8px 12px;  // padding을 사용하여 글자에 따라 크기가 조절되도록 설정
  background-color: ${(props) => (props.isSelected ? '#F8FAF9' : 'transparent')};
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  min-width: 44px;  // 최소 크기를 설정하여 일관성 유지

  span {
    color: ${(props) => (props.isSelected ? '#B083D3' : '#FFFFFF')};
    font-family: 'GothicA1-Medium';
    font-size: 14px;
    letter-spacing: -0.3%;
  }
`;

const CategoryText = styled.div`
  color: ${(props) => (props.isSelected ? '#FFFFFF' : '#ECEFF0')}; 
  text-align: center;
  font-size: 12px;
  font-family: 'GothicA1-Medium';
  letter-spacing: -0.3%;
  line-height: 140%;
  margin-top: 8px; 
`;

const NumberCircle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 8px;
  font-family: 'GothicA1-Medium';
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
  { label: '식사' },
  { label: '카페' },
  { label: '술' },
  { label: '스포dddddddd츠' },
  { label: '오락' },
  { label: '영화' },
  { label: '공연' },
  { label: '전시' },
  { label: '독서' },
  { label: '관광' },
  { label: '쇼핑' },
  { label: '기타' }
];

const SearchCategory2 = () => {
  const [selectedCategories, setSelectedCategories] = useState([]); 

  const handleClick = (label) => {
    const isSelected = selectedCategories.includes(label);
    let newSelectedCategories = [];

    if (isSelected) {
      newSelectedCategories = selectedCategories.filter((item) => item !== label);
    } else if (selectedCategories.length < 4) {
      newSelectedCategories = [...selectedCategories, label];
    }

    setSelectedCategories(newSelectedCategories);
  };

  return (
    <Container>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '8px' }}>
        {categories.map((category, index) => {
          const isSelected = selectedCategories.includes(category.label);
          const selectedIndex = selectedCategories.indexOf(category.label);
          
          return (
            <CategoryButtonContainer key={index}>
              <CategoryButton
                isSelected={isSelected}
                onClick={() => handleClick(category.label)}
              >
                <span>{category.label}</span>
                {isSelected && (
                  <NumberCircle>{selectedIndex + 1}</NumberCircle>
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

export default SearchCategory2;
