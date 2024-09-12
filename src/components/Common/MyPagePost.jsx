import styled from "styled-components";
import Search from '../../assets/images/icons/Search.svg'
import Alarm from "../../assets/images/icons/Alarm.svg"
import { useLocation, useNavigate } from 'react-router-dom'; 
import CommunityContents from "./Community_Contents";

const MyPagePost = () => {
  const SearchButton = styled.div`
    width: 360px;
    height: 48px;
    border: 1px solid #ECEFF0;
    border-radius: 12px;
    justify-content: space-evenly;
    margin: 16px;
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


  return (
    <div>
      <SearchButton>
        <img src={Search} />
        <text>내 게시물 찾아보기</text>
      </SearchButton>
      <CommunityContents />
    </div>
  )
};

export default MyPagePost;