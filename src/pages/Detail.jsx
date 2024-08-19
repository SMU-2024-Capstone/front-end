import React, { useState } from "react";
import styled from "styled-components";

const DetailSelectContainer = styled.div`
  padding: 20px;
  background-color: #1A1A1A;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

const CategorySection = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 20px;
  color: white;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: white;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ItemButton = styled.button`
  padding: 8px 12px;
  border-radius: 20px;
border: 1px solid white;  // 테두리 흰색
  background-color: black;  // 기본 버튼 색 검정
  color: gray;  // 기본 글씨 색 회색
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: white;  // 호버 시 버튼 색 흰색
    color: #8F4ABF;  // 호버 시 글씨 색 보라색
    border-color: white;  // 호버 시 테두리 흰색
  }

  &:focus {
    background-color: black;  // 포커스 시에도 버튼 색 검정
    color: gray;  // 포커스 시 글씨 색 회색
  }
`;

const DoneButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #1A1A1A;
  color: #D3D3D3;
  border: 1px solid #D3D3D3;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const DetailSelect = ({ onDone }) => {
  const [selectedItems, setSelectedItems] = useState({
    식사: [],
    카페: [],
    술: [],
    스포츠: [],
    오락: [],
    영화: [],
    공연: [],
    전시: [],
    독서: [],
    관광: [],
    쇼핑: [],
    기타: []
  });

  const detailOptions = {
    식사: ['한식', '중식', '일식', '양식', '동남아', '상관없음'],
    카페: ['프랜차이즈카페', '개인카페', '상관없음'],
    술: ['한식주점', '이자카야', '바', '포차', '상관없음'],
    스포츠: ['볼링', '당구', '사격', '상관없음'],
    오락: ['VR', '보드게임', '만화카페', '방탈출', '오락실&인형뽑기', '상관없음'],
    영화: ['실내', '실외', '상관없음'],
    공연: ['뮤지컬', '연극', '상관없음'],
    전시: ['전시', '상관없음'],
    독서: ['도서관', '대형서점', '북카페', '상관없음'],
    관광: ['유명 관광지', '사진명소', '박물관&미술관', '상관없음'],
    쇼핑: ['백화점', '쇼핑몰', '시장', '소품샵', '플리마켓', '대형 문구점', '상관없음'],
    기타: ['공방&원데이클래스', '드로잉카페', '동물카페', '룸카페', '상관없음'],
  };

  const handleItemChange = (category, item) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [category]: item,
    }));
  };

  const handleDone = () => {
    onDone(selectedItems);
  };

  return (
    <DetailSelectContainer>
      <Title>세부사항을 선택해 주세요</Title>
      {Object.entries(detailOptions).map(([category, items]) => (
        <CategorySection key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <ItemsContainer>
            {items.map((item) => (
              <ItemButton
                key={item}
                selected={selectedItems[category] === item}
                onClick={() => handleItemChange(category, item)}
              >
                {item}
              </ItemButton>
            ))}
          </ItemsContainer>
        </CategorySection>
      ))}
      <DoneButton onClick={handleDone}>
        검색하기
      </DoneButton>
    </DetailSelectContainer>
  );
};

export default DetailSelect;