import styled from "styled-components";
import Search from '../../assets/images/icons/Search.svg'
import Filter from "../../assets/images/icons/Filter.svg"

const SearchBox = () => {
  const SearchButton = styled.div`
    width: 296px;
    height: 48px;
    border: 1px solid #ECEFF0;
    border-radius: 12px; 
    text {
      color: #6A6D6E;
      font-family: "GothicA1-Medium";
      letter-spacing: -0.3%;
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
  img {
    margin: 12px;
  }
`;

  const SearchFilterBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 392px;
    height: 104px;
    padding-top: 40px;
  `;
  
    
  return (
    <SearchFilterBox>
      <SearchButton>
        <img src={Search} />
        <text>나에게 맞는 코스 찾아보기</text>
      </SearchButton>
      <FilterButton>
        <img src={Filter} />
      </FilterButton>
    </SearchFilterBox>
  )
};

export default SearchBox;