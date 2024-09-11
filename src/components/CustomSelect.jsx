import { useState } from "react";
import styled from "styled-components";
import down from "../assets/images/icons/down.svg";
import down_no from "../assets/images/icons/down_no.svg";
import Seoul from "../components/GuGun/Seoul";
import Busan from "../components/GuGun/Busan";
import Daegu from "../components/GuGun/Daegu";
import Incheon from "../components/GuGun/Incheon";
import Gwangju from "../components/GuGun/Gwangju";
import Daejeon from "../components/GuGun/Daejeon";
import Ulsan from "../components/GuGun/Ulsan";
import Sejong from "../components/GuGun/Sejong";
import Gyeonggido from "../components/GuGun/Gyeonggido";
import Gangwon from "../components/GuGun/Gangwon";
import Chungcheong from "../components/GuGun/Chungcheong";
import Jeju from "../components/GuGun/Jeju";
import Jeallado from "../components/GuGun/Jeallado";
import Gyeongsang from "../components/GuGun/Gyeongsang";
import { useEffect } from "react";

const SelectBox = styled.div`
  width: 312px;
  height: 48px;
  border: 1px solid #eceff0;
  border-radius: 12px;
  margin-left: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const SelectSido = styled.div`
  width: 133px;
  display: flex;
  justify-content: space-between;
  cursor: ${({ isSelected }) =>
    isSelected ? "default" : "pointer"}; // 커서 변경
  pointer-events: ${({ isSelected }) =>
    isSelected ? "none" : "auto"}; // 클릭 이벤트 비활성화
`;

const SelectGuGun = styled.div`
  width: 131px;
  display: flex;
  justify-content: space-between;
  cursor: ${({ selectedSido, selectedGuGun }) =>
    selectedSido === "전체" || selectedGuGun !== "전체"
      ? "default"
      : "pointer"};
  pointer-events: ${({ selectedSido, selectedGuGun }) =>
    selectedSido === "전체" || selectedGuGun !== "전체" ? "none" : "auto"};
`;

const TitleSido = styled.span`
  font-size: 16px;
  color: ${({ isSelected }) => (isSelected ? "#6a6d6e" : "#eceff0")};
  font-family: "GothicA1-Medium";
`;

const TitleGuGun = styled.span`
  font-size: 16px;
  color: ${({ selectedSido, selectedGuGun }) =>
    selectedSido === "전체" || selectedGuGun !== "전체"
      ? "#6a6d6e"
      : "#eceff0"};
  font-family: "GothicA1-Medium";
`;

const DownIcon = styled.img.attrs(({ src }) => ({
  src,
  alt: "down",
}))`
  margin-right: 3px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

const DownIcon2 = styled.img.attrs(({ src }) => ({
  src,
  alt: "down_no",
}))`
  margin-right: 3px;
  transform: ${({ isOpen2 }) => (isOpen2 ? "rotate(180deg)" : "rotate(0deg)")};
`;

const Bar = styled.div`
  border-left: 1px solid #6a6d6e;
  height: 24px;
  margin: 0 12px 0 12px;
`;

const BarLong = styled.div`
  border-left: 1px solid #6a6d6e;
  height: 279px;
  margin-left: 95px;
  margin-top: 4px;
`;

const SidoBox = styled.div`
  width: 312px;
  height: 359px;
  border-radius: 12px;
  background-color: #282728;
  padding-top: 55px;
  position: absolute;
  top: 73px;
  right: 24px;
  font-size: 16px;
  font-family: "GothicA1-Medium";
  display: flex;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

const Sido = styled.p`
  margin-bottom: 12px;
  cursor: pointer;
  color: #d9d9d9;
`;

export let sidoText = "전체";
export let gugunText = "전체";

const MyComponent = () => {
  useEffect(() => {
    // 새로고침 시 실행되는 코드
    const handleReload = () => {
      sidoText = "전체";
      gugunText = "전체";
    };

    // 페이지가 로드될 때 handleReload 실행
    handleReload();
  }, []);
};

const CustomSelect = () => {
  const [isSidoBoxOpen, setIsSidoBoxOpen] = useState(false);
  const [selectedSido, setSelectedSido] = useState("전체");
  const [downIconSrc, setDownIconSrc] = useState(down);

  const [isGuGunBoxOpen, setIsGuGunBoxOpen] = useState(false);
  const [downIconSrc2, setDownIconSrc2] = useState(down_no);
  const [selectedGuGun, setSelectedGuGun] = useState("전체");

  const [isSeoulVisible, setIsSeoulVisible] = useState(false); // 서울 컴포넌트의 visibility 상태 관리
  const [isBusanVisible, setIsBusanVisible] = useState(false);
  const [isDaeguVisible, setIsDaeguVisible] = useState(false);
  const [isIncheonVisible, setIsIncheonVisible] = useState(false);
  const [isGwangjuVisible, setIsGwangjuVisible] = useState(false);
  const [isDaejeonVisible, setIsDaejeonVisible] = useState(false);
  const [isUlsanVisible, setIsUlsanVisible] = useState(false);
  const [isSejongVisible, setIsSejongVisible] = useState(false);
  const [isGyeonggidoVisible, setIsGyeonggidoVisible] = useState(false);
  const [isGangwonVisible, setIsGangwonVisible] = useState(false);
  const [isChungcheongVisible, setIsChungcheongVisible] = useState(false);
  const [isJejuVisible, setIsJejuVisible] = useState(false);
  const [isJealladoVisible, setIsJealladoVisible] = useState(false);
  const [isGyeongsangVisible, setIsGyeongsangVisible] = useState(false);

  const toggleSidoBox = () => {
    if (selectedSido !== "전체") return; // "전체"가 아닐 경우 클릭 이벤트 비활성화

    setIsSidoBoxOpen((prev) => {
      const newIsOpen = !prev;

      return newIsOpen;
    });
  };

  const toggleGuGunBox = () => {
    if (selectedGuGun !== "전체") return; // "전체"가 아닐 경우 클릭 이벤트 비활성화

    setIsGuGunBoxOpen((prev) => {
      const newIsOpen = !prev;

      return newIsOpen;
    });
  };

  const handleSidoClick = (sido) => {
    setSelectedSido(sido);
    setIsSidoBoxOpen(false); // Sido를 선택하면 SidoBox를 숨김
    setDownIconSrc(down_no);

    setIsGuGunBoxOpen(true);
    setDownIconSrc2(down);

    sidoText = sido;

    if (sido === "서울") {
      setIsSeoulVisible(true); // 서울이 선택되면 visibility를 visible로 설정
    } else {
      setIsSeoulVisible(false); // 다른 시도가 선택되면 visibility를 hidden으로 설정
    }

    if (sido === "부산") {
      setIsBusanVisible(true);
    } else {
      setIsBusanVisible(false);
    }

    if (sido === "대구") {
      setIsDaeguVisible(true);
    } else {
      setIsDaeguVisible(false);
    }

    if (sido === "인천") {
      setIsIncheonVisible(true);
    } else {
      setIsIncheonVisible(false);
    }

    if (sido === "광주") {
      setIsGwangjuVisible(true);
    } else {
      setIsGwangjuVisible(false);
    }

    if (sido === "대전") {
      setIsDaejeonVisible(true);
    } else {
      setIsDaejeonVisible(false);
    }

    if (sido === "울산") {
      setIsUlsanVisible(true);
    } else {
      setIsUlsanVisible(false);
    }

    if (sido === "세종") {
      setIsSejongVisible(true);
    } else {
      setIsSejongVisible(false);
    }

    if (sido === "경기도") {
      setIsGyeonggidoVisible(true);
    } else {
      setIsGyeonggidoVisible(false);
    }

    if (sido === "강원도") {
      setIsGangwonVisible(true);
    } else {
      setIsGangwonVisible(false);
    }

    if (sido === "충청도") {
      setIsChungcheongVisible(true);
    } else {
      setIsChungcheongVisible(false);
    }

    if (sido === "제주도") {
      setIsJejuVisible(true);
    } else {
      setIsJejuVisible(false);
    }

    if (sido === "전라도") {
      setIsJealladoVisible(true);
    } else {
      setIsJealladoVisible(false);
    }

    if (sido === "경상도") {
      setIsGyeongsangVisible(true);
    } else {
      setIsGyeongsangVisible(false);
    }
  };

  const handleGuGunClick = (gugun) => {
    setSelectedGuGun(gugun);
    setIsGuGunBoxOpen(false);
    setDownIconSrc2(down_no);

    gugunText = gugun;
  };

  console.log(sidoText, gugunText);

  return (
    <div>
      <SelectBox>
        <SelectSido
          onClick={toggleSidoBox}
          isSelected={selectedSido !== "전체"}
        >
          <TitleSido isSelected={selectedSido !== "전체"}>
            {selectedSido}
          </TitleSido>
          <DownIcon src={downIconSrc} isOpen={isSidoBoxOpen}></DownIcon>
        </SelectSido>

        <Bar></Bar>

        <SelectGuGun
          onClick={toggleGuGunBox}
          selectedSido={selectedSido}
          selectedGuGun={selectedGuGun}
        >
          <TitleGuGun selectedSido={selectedSido} selectedGuGun={selectedGuGun}>
            {selectedGuGun}
          </TitleGuGun>
          <DownIcon2 src={downIconSrc2} isOpen2={isGuGunBoxOpen}></DownIcon2>
        </SelectGuGun>
      </SelectBox>

      <SidoBox isOpen={isSidoBoxOpen}>
        <div style={{ width: "50px", marginLeft: "12px" }}>
          <Sido onClick={() => handleSidoClick("서울")}>서울</Sido>
          <Sido onClick={() => handleSidoClick("경기도")}>경기도</Sido>
          <Sido onClick={() => handleSidoClick("인천")}>인천</Sido>
          <Sido onClick={() => handleSidoClick("강원도")}>강원도</Sido>
          <Sido onClick={() => handleSidoClick("충청도")}>충청도</Sido>
          <Sido onClick={() => handleSidoClick("대전")}>대전</Sido>
          <Sido onClick={() => handleSidoClick("세종")}>세종</Sido>
        </div>

        <BarLong></BarLong>

        <div style={{ width: "50px", marginLeft: "12px" }}>
          <Sido onClick={() => handleSidoClick("부산")}>부산</Sido>
          <Sido onClick={() => handleSidoClick("울산")}>울산</Sido>
          <Sido onClick={() => handleSidoClick("대구")}>대구</Sido>
          <Sido onClick={() => handleSidoClick("경상도")}>경상도</Sido>
          <Sido onClick={() => handleSidoClick("전라도")}>전라도</Sido>
          <Sido onClick={() => handleSidoClick("광주")}>광주</Sido>
          <Sido onClick={() => handleSidoClick("제주도")}>제주도</Sido>
        </div>
      </SidoBox>

      <Seoul
        isVisible={isSeoulVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Seoul>

      <Busan
        isVisible={isBusanVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Busan>

      <Daegu
        isVisible={isDaeguVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Daegu>

      <Incheon
        isVisible={isIncheonVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Incheon>

      <Gwangju
        isVisible={isGwangjuVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Gwangju>

      <Daejeon
        isVisible={isDaejeonVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Daejeon>

      <Ulsan
        isVisible={isUlsanVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Ulsan>

      <Sejong
        isVisible={isSejongVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Sejong>

      <Gyeonggido
        isVisible={isGyeonggidoVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Gyeonggido>

      <Gangwon
        isVisible={isGangwonVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Gangwon>

      <Chungcheong
        isVisible={isChungcheongVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Chungcheong>

      <Jeju
        isVisible={isJejuVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Jeju>

      <Jeallado
        isVisible={isJealladoVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Jeallado>

      <Gyeongsang
        isVisible={isGyeongsangVisible}
        isVisible2={isGuGunBoxOpen}
        onGuGunClick={handleGuGunClick}
      ></Gyeongsang>
      <MyComponent></MyComponent>
    </div>
  );
};

export default CustomSelect;
