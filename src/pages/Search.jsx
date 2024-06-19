import React, { useState } from 'react';
import styled from 'styled-components';
import NextButton from '../components/Common/NextButton';
import SearchCourseBox from '../components/Common/SearchCourseBox';
import SearchBox from '../components/Common/SearchBox';
import SearchCategory from './SearchCategory';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 24px;
  margin-left: 16px;
  list-style: none;
`;

const Li = styled.li`
  .button {
    width: 360px;
    height: 72px;
    color: #D9D9D9;
    text-align: left;
    font-size: 18px;
    font-family: "GothicA1-Medium";
    letter-spacing: -0.3%;
    line-height: 140%;
    background-color: #282728;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: flex-start;
  }

  .buttonText {
    padding: 24px;
  }

  &.on {
    .button {
      background: linear-gradient(#282728, #0D0E10);
      height: 454px;
      box-shadow: 0px 8px 16px rgba(40, 39, 40); 
    }
  }
  
`;

const Search = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const contents = [
    <NextButton />,
    <SearchCategory />,
    '세부사항을 선택해주세요.'
  ];

  return (
    <div>
    <SearchCourseBox></SearchCourseBox>
    <Ul>
      {['지역', '카테고리', '세부사항'].map((menu, index) => (
        <Li key={index} className={activeIndex === index ? 'on' : ''}>
          <button className="button" onClick={() => handleClick(index)}>
            {activeIndex !== index && <div className="buttonText">{menu}</div>}
            {activeIndex === index && (
              <div>
                {contents[index]}
              </div>
            )}
          </button>
        </Li>
      ))}
    </Ul>
    <SearchBox></SearchBox>
    </div>
  );
};

export default Search;
