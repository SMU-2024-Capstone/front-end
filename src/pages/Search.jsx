import React, { useState } from "react";
import styled from "styled-components";
import SearchCourseBox from "../components/Common/SearchCourseBox";
import SearchBox from "../components/Common/SearchBox";
import SearchCategory from "./SearchCategory";
import SearchArea from "./SearchArea";
import DetailSelect from "../components/Common/DetailSelect";
import { sidoText, gugunText } from "../components/CustomSelect";

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
    color: #d9d9d9;
    text-align: left;
    font-size: 18px;
    font-family: "Apple-SD-GothicNeo-Medium";
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
      background: linear-gradient(#282728, #0d0e10);
      height: 454px;
      filter: drop-shadow(0 8px 16px rgba(40, 39, 40));
      cursor: default;
    }
  }
`;

const Search = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [canProceed, setCanProceed] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]); 
  const [nothingState, setNothingState] = useState({});

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleNothingStateChange = (newNothingState) => {
    setNothingState(newNothingState);
  };

  const updateCanProceed = (selectedCategories) => {
    setCanProceed(selectedCategories.length >= 2);
  };

  const contents = [
    <SearchArea />,
    <SearchCategory
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories}
      updateCanProceed={updateCanProceed}
    />,
    selectedCategories.length >= 2 ? (
      <DetailSelect
        selectedCategories={selectedCategories}
        setCanProceed={setCanProceed}
        selectedOptions={selectedOptions} 
        setSelectedOptions={setSelectedOptions} 
        nothingState={nothingState}
        onNothingStateChange={handleNothingStateChange}
      />
    ) : (
      <div style={{ padding: "24px", color: "#D9D9D9" }}>
        <p>카테고리를 최소 2개 이상 선택해야 합니다.</p>
      </div>
    ),
  ];

  return (
    <div>
      <SearchCourseBox
        selectedCategories={selectedCategories}
        sidoText={sidoText}
        gugunText={gugunText}
      />
      <Ul>
        {["지역", "카테고리", "세부사항"].map((menu, index) => (
          <Li key={index} className={activeIndex === index ? "on" : ""}>
            <button
              className="button"
              onClick={() => {
                if (gugunText === "전체") return;
                if (index === 2 && selectedCategories.length < 2) return;
                handleClick(index);
              }}
            >
              {activeIndex !== index && (
                <div className="buttonText">{menu}</div>
              )}
              {activeIndex === index && <div>{contents[index]}</div>}
            </button>
          </Li>
        ))}
      </Ul>
      <SearchBox
        selectedCategories={selectedCategories}
        selectedOptions={selectedOptions}
        canProceed={canProceed}
        nothingState={nothingState}
      />
    </div>
  );
};

export default Search;
