import styled from "styled-components";
import CustomSelect from "../components/CustomSelect";

const BigText = styled.div`
  margin: 36px 0 12px 24px;
  color: #eceff0;
  font-size: 20px;
  font-family: "GothicA1-Medium";
`;

const SearchArea = () => {
  return (
    <div>
      <BigText>지역을 선택해 주세요.</BigText>
      <CustomSelect></CustomSelect>
    </div>
  );
};

export default SearchArea;
