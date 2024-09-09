import styled from "styled-components";
import Back from "../../assets/images/icons/Back.svg";
import { useNavigate } from "react-router-dom";

// Styled components 정의
const SearchButton = styled.div`
  width: 296px;
  height: 48px;
  border: 1px solid #eceff0;
  border-radius: 12px;
`;

const Text = styled.div`
  color: ${({ text }) =>
    text === "나에게 맞는 코스 찾아보기" ? "#6a6d6e" : "#eceff0"};
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  font-size: 16px;
  margin-top: 14px;
  margin-left: 12px;
  line-height: 140%;
`;

const BackButton = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #eceff0;
  border-radius: 12px;
  img {
    margin: 12px;
  }
  cursor: pointer;
`;

const SearchBackBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 392px;
  height: 80px;
  padding-top: 16px;
  box-shadow: 0px 8px 8px rgba(79, 80, 82, 0.2);
`;

const SearchCourseBox = ({ selectedCategories, sidoText, gugunText }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };

  const selectedCategoriesText = selectedCategories && selectedCategories.length > 0 
    ? selectedCategories.map(category => `#${category.label}`).join(" ") 
    : "";

  const displayText =
    gugunText !== "전체"
      ? `#${sidoText} #${gugunText} ${selectedCategoriesText}`
      : "나에게 맞는 코스 찾아보기";

  return (
    <SearchBackBox>
      <BackButton onClick={handleButtonClick}>
        <img src={Back} alt="뒤로가기" />
      </BackButton>
      <SearchButton>
        <Text text={displayText}>{displayText}</Text>
      </SearchButton>
    </SearchBackBox>
  );
};

export default SearchCourseBox;
