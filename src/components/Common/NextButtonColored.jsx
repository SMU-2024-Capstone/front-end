import styled from "styled-components";

const NextButtonColored = () => {
  const ButtonColored = styled.button`
    width: 359px;
    height: 54px;
    background-color: #ECEFF0;
    border: 1px solid #ECEFF0;
    border-radius: 60px; 
    filter: drop-shadow(0px 6px 8px #ECEFF04D);
    text {
      color: #0D0E10;
      font-size: 18px;
      font-family: "GothicA1-Medium";
      letter-spacing: -0.3%;
      text-align: center;
    }
  `;

  const NextButtonColored = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;
  
  return (
    <NextButtonColored>
      <ButtonColored>
        <text>Next</text>
      </ButtonColored>
    </NextButtonColored>
  )
};

export default NextButtonColored;