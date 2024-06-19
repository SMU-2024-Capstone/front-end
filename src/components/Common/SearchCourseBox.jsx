import styled from "styled-components";
import Back from "../../assets/images/icons/Back.svg"

const SearchCourseBox = () => {
  const SearchButton = styled.div`
    width: 296px;
    height: 48px;
    border: 1px solid #ECEFF0;
    border-radius: 12px; 

  `;

  const Text = styled.div`
    color: #6A6D6E;
    font-family: "GothicA1-Medium";
    letter-spacing: -0.3%;
    font-size: 16px;
    margin-top: 14px;
    margin-left: 12px;
    line-height: 140%;
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
    box-shadow: 0px 8px 8px rgba(79, 80, 82, 0.2); 
  `;
  
    
  return (
    <SearchBackBox>
      <BackButton>
        <img src={Back} />
      </BackButton>
      <SearchButton>
        <Text>나에게 맞는 코스 찾아보기</Text>
      </SearchButton>
    </SearchBackBox>
  )
};

export default SearchCourseBox;