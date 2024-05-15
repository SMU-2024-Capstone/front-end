import styled from "styled-components";

const NextButton = () => {
  const Button = styled.div`
    width: 360px;
    height: 54px;
    background-color: #0D0E10;
    border: 1px solid #ECEFF0;
    border-radius: 12px;
    margin-left: 16px;
    margin-top: 24px;
    filter: drop-shadow(0px 6px 8px rgba(236, 239, 240, 30%)); 
  `;

  const Text = styled.div`
    color: #6A6D6E;
    font-size: 18px;
    font-family: "GothicA1-Medium";
    letter-spacing: -0.3%;
    line-height: 140%;
    text-align: center;
    margin-top: 14px;
  `;
  
  return (
    <div>
    <Button>
      <Text>Next</Text>
    </Button>
    </div>
  );
};

export default NextButton;
