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
  flex: 1; 
  overflow-y: auto; 
  -webkit-overflow-scrolling: touch; 
  position: relative;
  padding-bottom: 200px; 

  &::-webkit-scrollbar {
    width: 0px; 
    background: transparent; 
  }

  -ms-overflow-style: none; 
  scrollbar-width: none; 
`;

const HomeContents = () => {
  const [contentItems, setContentItems] = useState([1, 2, 3, 4, 5]); 
  const [pageCount, setPageCount] = useState(1); 
  const [isLoading, setIsLoading] = useState(false); 
  const containerRef = useRef(null);

  const loadMoreData = async () => {
    if (isLoading) return; 

    setIsLoading(true);
    try {
      const response = await fetch(`https://api.example.com/data?page=${pageCount}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const newData = await response.json();
      setContentItems(prevItems => [...prevItems, ...newData]);
      setPageCount(prevPage => prevPage + 1);
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
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isLoading, pageCount]);

  return (
    <Container>
      <ScrollableContent ref={containerRef}>
        {contentItems.map((item, index) => (
          <HomeContent key={index} />
        ))}
      </ScrollableContent>
    </Container>
  );
};

export default HomeContents;
