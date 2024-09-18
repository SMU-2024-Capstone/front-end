import React, { useEffect, useState, useRef} from "react";
import styled from "styled-components";
import HomeContent from "./Home_Photo";
import Add from "../../../assets/icons/button/add.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; 
  overflow: hidden;
  position: relative;
`;

const ScrollableContent = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 200px;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ListBox = styled.div`
  width: 360px;
  height: 225px;
  border-radius: 12px;
  object-fit: cover;
  position: relative;
  cursor: pointer;
  background-color: rgba(199, 199, 199, 0.2);
`;

const ListContainer = styled.div`
  position: relative;
  width: 360px;
  height: 274px;
  margin-left: 16px;
  margin-bottom: 24px;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 203px;
  left: 0;
  width: 360px;
  height: 71px;
  background: rgba(40, 39, 40, 0.5);
  border-radius: 0 0 12px 12px;
  filter: blur(5px);
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding-top: 101px;
`;

const Text = styled.div`
  color: #ECEFF0;
  font-family: "Apple-SD-GothicNeo-Medium";
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.3%;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;



const HomeContents = () => {
  const [contentItems, setContentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Navigating to /placelist'); 
    navigate("/placelist"); 
  };

  useEffect(() => {
    // 로컬스토리지에서 장소, 카테고리, 태그 데이터 읽기
    const places = [];
    const categories = [];
    const tags = [];
    const urls = [];
    const ratings = [];

    for (let i = 1; i <= 5; i++) {
      const place = localStorage.getItem(`placename${i}`);
      const category = localStorage.getItem(`category${i}`);
      const tag = localStorage.getItem(`tag${i}`);
      const url = localStorage.getItem(`URL${i}`);
      const rating = localStorage.getItem(`rating${i}`);

      if (place) places.push(place);
      if (category) categories.push(category);
      if (tag) tags.push(tag);
      if (url) urls.push(url);
      if (rating) ratings.push(rating);
    }

    setContentItems(
      places.map((place, index) => ({
        place,
        category: categories[index] || "",
        tag: tags[index] || "",
        url: urls[index] || "",
        rating: ratings[index] || 0,
      }))
    );
  }, []);


  useEffect(() => {
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;

    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isLoading, pageCount]);

  return (
    <Container>
      <ScrollableContent ref={containerRef}>
        {contentItems.map((item, index) => (
          <HomeContent
            key={index}
            title={item.place}
            category={item.category}
            tag={item.tag}
            url={item.url}
            rating={item.rating}
          />
        ))}
        <ListContainer>
          <ListBox>
            <TextContainer onClick={handleButtonClick}>
              <Img src ={Add} alt={"add"} />
              <Text>다른 종로구 장소 보러가기</Text>
            </TextContainer>
            </ListBox>
          <BlurBackground />
        </ListContainer>
      </ScrollableContent>
    </Container>
  );
};

export default HomeContents;
