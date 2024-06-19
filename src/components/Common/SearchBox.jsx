import styled from "styled-components";
import Search_grey from '../../assets/images/icons/Search_grey.svg'

const SearchBox = () => {
  const SearchButton = styled.div`
    width: 360px;
    height: 54px;
    margin-top: 24px;
    margin-left: 16px;
    border: 1px solid #ECEFF0;
    border-radius: 12px; 
    box-shadow: 0px 6px 8px rgba(236, 239, 240, 30%); 
    text {
      color: #6A6D6E;
      font-family: "GothicA1-Medium";
      letter-spacing: -0.3%;
      line-height: 140%;
      font-size: 18px;
      margin-top: 15px;
      margin-left: 109px;
    }
  `;

  const Img = styled.div`
    img {  
      margin-left: 16px;
      margin-top: 15px;
      width: 18px;
      height: 18px;
    }
  `;


  
    
  return (
    <SearchButton>
      <Img>
        <img src={Search_grey} />
        <text>검색하기</text>
      </Img>
    </SearchButton>
  )
};

export default SearchBox;