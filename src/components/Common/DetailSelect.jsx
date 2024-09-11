import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Head = styled.div`
  color: #ECEFF0;
  font-size: 20px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.4%;
  line-height: 130%;
`;

const Container = styled.div`
  margin-top: 36px;
  margin-left: 24px;
`;

const CategoryTitle = styled.div`
  color: #ECEFF0;
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  margin-bottom: 4px;
`;

const DetailContainer = styled.div`
  margin-top: 32px;
  width: 334px;
`;

const DetailOptionContainer = styled.div`
  margin-bottom: 19px;
  overflow: hidden; 
  display: flex;
  padding: 8px 0;
`;

const DetailCircle = styled.div`
  border-radius: 60px;
  border: 1px solid #ECEFF0;
  padding: 4px 15px; 
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => 
    props.isSelected ? '#ECEFF0' : 
    props.isDisabled ? 'transparent' : 'transparent'};
  color: ${(props) => 
    props.isSelected ? '#8F4ABF' : 
    props.isDisabled ? '#6A6D6E' : '#6A6D6E'};
  cursor: ${(props) => props.isDisabled ? 'default' : 'pointer'};
  transition: background-color 0.3s, color 0.3s;
  margin-right: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: auto; 
  max-width: 150px; 
  box-sizing: border-box;
  height: 32px;
`;

const DetailText = styled.div`
  font-size: 12px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  width: auto; 
  display: flex;
  justify-content: center;
`;

const DetailOptions = {
  식사: ['한식', '중식', '일식', '양식', '동남아', '상관없음'],
  카페: ['프랜차이즈카페', '개인카페', '상관없음'],
  술: ['한식주점', '이자카야', '바', '포차', '상관없음'],
  스포츠: ['볼링', '당구', '사격', '상관없음'],
  오락: ['VR', '보드게임', '만화카페', '방탈출', '오락실', '인형뽑기', '상관없음'],
  영화: ['실내', '실외', '상관없음'],
  공연: ['뮤지컬', '연극', '상관없음'],
  전시: ['전시회', '상관없음'],
  독서: ['도서관', '대형서점', '북카페', '상관없음'],
  관광: ['유명 관광지', '사진명소', '박물관', '미술관', '상관없음'],
  쇼핑: ['백화점', '쇼핑몰', '시장', '소품샵', '플리마켓', '대형 문구점', '상관없음'],
  기타: ['공방', '원데이클래스', '드로잉카페', '동물카페', '룸카페', '상관없음'],
};

const getSwiperSettings = (category) => {
  const settings = {
    식사: { slidesPerView: 4, spaceBetween: 8 },
    카페: { slidesPerView: 3, spaceBetween: 8 },
    술: { slidesPerView: 4, spaceBetween: 8 },
    스포츠: { slidesPerView: 4, spaceBetween: 8 },
    오락: { slidesPerView: 4, spaceBetween: 8 },
    영화: { slidesPerView: 3, spaceBetween: 8 },
    공연: { slidesPerView: 3, spaceBetween: 8 },
    전시: { slidesPerView: 2, spaceBetween: 8 },
    독서: { slidesPerView: 4, spaceBetween: 8 },
    관광: { slidesPerView: 4, spaceBetween: 8 },
    쇼핑: { slidesPerView: 4, spaceBetween: 8 },
    기타: { slidesPerView: 3, spaceBetween: 8 },
  };
  return settings[category] || { slidesPerView: 4, spaceBetween: 8 };
};

const DetailSelect = ({ selectedCategories, selectedOptions, setSelectedOptions, setCanProceed, nothingState, onNothingStateChange }) => {
  useEffect(() => {
    const allCategoriesSelected = selectedCategories.every(category => {
      const selections = selectedOptions[category.label];
      return selections === '상관없음' || (Array.isArray(selections) && selections.length > 0);
    });
    
    setCanProceed(allCategoriesSelected);
  }, [selectedOptions, selectedCategories, setCanProceed]);

  const handleOptionClick = (category, option) => {
    setSelectedOptions(prevState => {
      const nothingOptions = DetailOptions[category].filter(opt => opt !== '상관없음');

      const currentNothingState = nothingState[category] || [];

      if (option === '상관없음') {
        // '상관없음' 선택 시 처리
        onNothingStateChange(prevState => ({
          ...prevState,
          [category]: nothingOptions
        }));

        // '상관없음'으로 설정
        return { ...prevState, [category]: '상관없음' };
      } else {
        // '상관없음'이 선택된 경우 복원
        if (prevState[category] === '상관없음') {
          return { ...prevState, [category]: [option] };
        }

        // 옵션 추가 또는 제거
        const updatedOptions = prevState[category]?.includes(option)
          ? prevState[category].filter(o => o !== option)
          : [...(prevState[category] || []), option];

        // '상관없음'을 선택 상태로부터 제거
        if (currentNothingState.length > 0 && updatedOptions.length > 0) {
          onNothingStateChange(prevState => {
            const newNothingState = { ...prevState };
            delete newNothingState[category];
            return newNothingState;
          });
        }

        return { ...prevState, [category]: updatedOptions.length > 0 ? updatedOptions : [] };
      }
    });
  };

  return (
    <Container>
      <Head>세부사항을 선택해 주세요</Head>
      <DetailContainer>
        {selectedCategories.map((category, index) => {
          const swiperSettings = getSwiperSettings(category.label);
          return (
            <div key={index}>
              <CategoryTitle>{category.label}</CategoryTitle>
              <DetailOptionContainer>
                <Swiper
                  slidesPerView={swiperSettings.slidesPerView}
                  spaceBetween={swiperSettings.spaceBetween}
                  breakpoints={{
                    640: {
                      slidesPerView: swiperSettings.slidesPerView,
                      spaceBetween: swiperSettings.spaceBetween,
                    },
                    768: {
                      slidesPerView: swiperSettings.slidesPerView,
                      spaceBetween: swiperSettings.spaceBetween,
                    },
                    1024: {
                      slidesPerView: swiperSettings.slidesPerView,
                      spaceBetween: swiperSettings.spaceBetween,
                    },
                  }}
                >
                  {DetailOptions[category.label].map((option, i) => (
                    <SwiperSlideStyled key={i}>
                      <DetailCircle
                        isSelected={
                          selectedOptions[category.label] === option ||
                          (Array.isArray(selectedOptions[category.label]) && selectedOptions[category.label].includes(option))
                        }
                        isDisabled={option !== '상관없음' && selectedOptions[category.label] === '상관없음'}
                        onClick={() => handleOptionClick(category.label, option)}
                      >
                        <DetailText>{option}</DetailText>
                      </DetailCircle>
                    </SwiperSlideStyled>
                  ))}
                </Swiper>
              </DetailOptionContainer>
            </div>
          );
        })}
      </DetailContainer>
    </Container>
  );
};

export default DetailSelect;
