import React, { useState, useEffect } from "react";
import styled from "styled-components";
import placelist_star_default from '../../../assets/icons/button/placelist_star_default.svg';
import placelist_star_clicked from '../../../assets/icons/button/placelist_star_clicked.svg';
import PlaceListPopup from "./PlaceList_Popup";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 650px;
  overflow: hidden;
  position: relative;
`;

const ScrollableContent = styled.div`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  padding: 0 16px;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ListBox = styled.div`
  width: 100%;
  max-width: 360px;
  height: 92px;
  border-radius: 12px;
  background-color: ${(props) => (props.isOdd ? "#f1ddff" : "#FEFEFE")};
  margin-bottom: 13px;
  padding: 17px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const PlaceName = styled.div`
  color: #000000;
  font-size: 18px;
  font-family: "Apple-SD-GothicNeo-Medium";
  line-height: 140%;
  flex-grow: 1;
`;

const TagName = styled.div`
  color: #646464;
  font-size: 14px;
  font-family: "Apple-SD-GothicNeo-Medium";
  margin-top: 4px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 18px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 2px 10px;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "#8F4ABF" : "#FFFFFF")};
  font-size: 20px;
  font-family: "Apple-SD-GothicNeo-Bold";
  border: none;
`;

const RatingNumber = styled.div`
  color: #8F4ABF;
  font-family: "Apple-SD-GothicNeo-Bold";
  font-size: 18px;
  line-height: 140%;
  position: relative;
  top: 5px;
`;

const Star = styled.img`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
  top: 5px;
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PlaceListContents = ({ selectedCategory, placelist }) => {
  const itemsPerPage = 100; // 한 페이지에 보여줄 항목 수
  const [contentItems, setContentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [ratings, setRatings] = useState({}); // 각 항목별 별점 상태 관리
  const [showPopup, setShowPopup] = useState(false); // 팝업 표시 상태
  const [selectedPlace, setSelectedPlace] = useState(null); // 선택된 항목 저장

  useEffect(() => {

    setContentItems(placelist);

    const updatedRatings = {};
    placelist.forEach(item => {
      updatedRatings[item.placename] = item.rating;
    });

    setRatings(updatedRatings);
    setCurrentPage(1);
  }, [selectedCategory]);

  const paginatedItems = contentItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(contentItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const togglePopup = (place) => {
    setSelectedPlace(place);
    setShowPopup(true);
  };

  const handleClosePopup = (place, selectedRating) => {
    setShowPopup(false);
    setRatings((prevRatings) => ({
      ...prevRatings,
      [place]: selectedRating,
    }));

    // Update local storage with new rating
    const index = contentItems.findIndex((item) => item.placename === place) + 1;
    localStorage.setItem(`placelist_rating${index}`, selectedRating);
  };

  return (
    <Container>
      <ScrollableContent>
        {paginatedItems.map((item, index) => {
          const { placename, rating, category, tag } = item;
          return (
            <ListBox key={index} isOdd={index % 2 === 0}>
              <TextContainer>
                <Header>
                  <PlaceName>{placename}</PlaceName>
                  <RatingBox onClick={(e) => {
                    e.stopPropagation();
                    togglePopup(placename);
                  }}>
                    <Star
                      src={
                        ratings[placename] > 0
                          ? placelist_star_clicked
                          : placelist_star_default
                      }
                      alt="star"
                    />
                    {ratings[placename] > 0 && 
                      <RatingNumber>{ratings[placename]}점</RatingNumber>
                    }
                  </RatingBox>
                </Header>
                <TagName>{`#${category} #${tag}`}</TagName>
              </TextContainer>
            </ListBox>
          );
        })}
      </ScrollableContent>

      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            isActive={index + 1 === currentPage}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>

      {showPopup && (
        <PlaceListPopup
          onClose={(selectedRating) => handleClosePopup(selectedPlace, selectedRating)}
          initialRating={ratings[selectedPlace] || 0}
          place={selectedPlace}
        />
      )}
    </Container>
  );
};

export default PlaceListContents;
