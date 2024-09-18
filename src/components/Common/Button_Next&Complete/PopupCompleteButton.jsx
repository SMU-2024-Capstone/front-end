import styled from "styled-components";

const PopupCompleteButton = ({ disabled, onClick, selectedRating }) => {
  const StyledCompleteButton = styled.button`
    margin-top: 78px;
    margin-left: 16px;
    width: 360px;
    height: 54px;
    border-radius: 12px;
    border: 1px solid #eceff0;
    background-color: ${(props) => (props.disabled ? "transparent" : "#ECEFF0")};
    color: ${(props) => (props.disabled ? "#6A6D6E" : "#0D0E10")};
    font-size: 18px;
    font-family: "Apple-SD-GothicNeo-Medium";
    letter-spacing: -0.3%;
    line-height: 140%;
    text-align: center;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    filter: drop-shadow(0px 6px 8px rgba(236, 239, 240, 30%));
  `;

  console.log("Selected rating_completebutton:", selectedRating);
  return (
    <div>
      <StyledCompleteButton
        disabled={disabled}
        onClick={onClick}
      >
        완료
      </StyledCompleteButton>
    </div>
  );
};

export default PopupCompleteButton;
