import styled from "styled-components";

const StyledNextButton = styled.button`
  margin-top: 24px;
  margin-left: 16px;
  width: 360px;
  height: 54px;
  border-radius: 12px;
  border: 1px solid #ECEFF0;
  background-color: ${(props) => (props.disabled ? '#0D0E10' : '#ECEFF0')};
  color: ${(props) => (props.disabled ? '#6A6D6E' : '#0D0E10')};
  font-size: 18px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  text-align: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  filter: drop-shadow(0px 6px 8px rgba(236, 239, 240, 30%)); 
`;

const NextButton = (props) => {
  return (
    <div>
      <StyledNextButton disabled={props.disabled} onClick={props.onClick}>
        다음
      </StyledNextButton>
    </div>
  );
};

export default NextButton;
