import styled from "styled-components";
import Back from "../../../assets/icons/button/back.svg";
import Search from '../../../assets/icons/search/search.svg'
import { useNavigate } from "react-router-dom";

const HomeSearchIconCourseBox = () => {
  const SearchButton = styled.div`
  width: 296px;
  height: 48px;
  border: 1px solid #ECEFF0;
  border-radius: 12px; 
  text {
    color: #6A6D6E;
    font-family: "Apple-SD-GothicNeo-Medium";
    letter-spacing: -0.3%;
    line-height: 140%;
    font-size: 16px;
  }
  img {
    margin: 12px;
  }
  img, text {
    vertical-align: middle;
  }
`;

  const BackButton = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #ECEFF0;
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
    filter: drop-shadow(0 8px 8px rgba(79, 80, 82, 0.2));
  `;

  const navigate = useNavigate(); 
  
  const handleButtonClick = () => {
    navigate("/home"); 
  };
    
  return (
    <SearchBackBox>
      <BackButton onClick={handleButtonClick}>
        <img src={Back} />
      </BackButton>
      <SearchButton>
        <img src={Search} />
        <text>나에게 맞는 코스 찾아보기</text>
      </SearchButton>
    </SearchBackBox>
  )
};

export default HomeSearchIconCourseBox;