import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import HomeContent from "./Home_Photo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const ScrollableContent = styled.div`
  height: 670px; /* 고정된 높이 설정 */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const HomeContents = () => {
  const [contentItems, setContentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // 로컬스토리지에서 장소, 카테고리, 태그 데이터 읽기
    const places = [];
    const categories = [];
    const tags = [];
    const urls = [];

    for (let i = 1; i <= 5; i++) {
      const place = localStorage.getItem(`placename${i}`);
      const category = localStorage.getItem(`category${i}`);
      const tag = localStorage.getItem(`tag${i}`);
      const url = localStorage.getItem(`URL${i}`);

      if (place) places.push(place);
      if (category) categories.push(category);
      if (tag) tags.push(tag);
      if (url) urls.push(url);
    }

    setContentItems(
      places.map((place, index) => ({
        place,
        category: categories[index] || "",
        tag: tags[index] || "",
        url: urls[index] || "",
      }))
    );
  }, []);

  const loadMoreData = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.example.com/data?page=${pageCount}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const newData = await response.json();
      setContentItems((prevItems) => [...prevItems, ...newData]);
      setPageCount((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Failed to load data", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;

      if (scrollHeight - scrollTop <= clientHeight + 100) {
        loadMoreData();
      }
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
          />
        ))}
      </ScrollableContent>
    </Container>
  );
};

export default HomeContents;
