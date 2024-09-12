import styled from "styled-components";
import Search from '../../assets/images/icons/Search.svg'
import Alarm from "../../assets/images/icons/Alarm.svg"
import { useLocation, useNavigate } from 'react-router-dom'; 

const SearchFriend = () => {
  const SearchButton = styled.div`
    width: 296px;
    height: 48px;
    border: 1px solid #ECEFF0;
    border-radius: 12px; 
    cursor: pointer;
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
    text, img {
      vertical-align: middle;
    }
  `;

  const FilterButton = styled.div`
  width: 48px;
  height: 48px;
  border: 1px solid #ECEFF0;
  border-radius: 12px; 
  cursor: pointer;
  img {
    margin: 12px;
  }
`;

  const SearchFilterBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 392px;
    height: 80px;
    padding-top: 16px;
    filter: drop-shadow(0 8px 8px rgba(79, 80, 82, 0.2));
  `;
  
  const navigate = useNavigate();  
  
  const handleAlarmButtonClick = () => {
    console.log('Navigating to /alarm'); 
    navigate("/alarm"); 
  };

  return (
    <SearchFilterBox>
      <SearchButton>
        <img src={Search} />
        <text>친구 찾아보기</text>
      </SearchButton>
      <FilterButton onClick={handleAlarmButtonClick}>
        <img src={Alarm} />
      </FilterButton>
    </SearchFilterBox>
  )
};

export default SearchFriend;