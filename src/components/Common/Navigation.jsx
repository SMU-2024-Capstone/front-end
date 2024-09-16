import styled from "styled-components";
import home from "../../assets/icons/navi/home.svg";
import social from "../../assets/icons/navi/social.svg";
import recommend from "../../assets/icons/navi/recommend.svg";
import bookmark from "../../assets/icons/navi/bookmark.svg";
import mypage from "../../assets/icons/navi/mypage.svg";
import home_clicked from "../../assets/icons/navi/home_clicked.svg";
import social_clicked from "../../assets/icons/navi/social_clicked.svg";
import recommend_clicked from "../../assets/icons/navi/recommend_clicked.svg";
import bookmark_clicked from "../../assets/icons/navi/bookmark_clicked.svg";
import mypage_clicked from "../../assets/icons/navi/mypage_clicked.svg";
import bottom from "../../assets/icons/navi/bottom.svg";
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomBar = styled.div`
  width: 392px;
  height: 56px;
  background-color: #0d0e10;
  position: absolute;
  bottom: 0;
  z-index: 10;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 8px;
  position: relative;
`;

const Button = styled.img`
  cursor: pointer;
`;

const BottomIcon = styled.img`
  position: absolute;
  bottom: -7.5px;
  transition: all 0.3s ease;
`;

const Navigation = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("home");
  const [stylePosition, setStylePosition] = useState({ left: "44px" });

  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    const page =
      path === "map" || path === "searchresult" || path === "homeresult" || path === "searcherror"
        ? "home"
        : path === "alarm"
        ? "social"
        : path;
        
    setCurrentPage(page);
    setStylePosition({ left: calculatePosition(page) });
  }, [location.pathname]);

  const handleClick = useCallback(
    (page) => {
      setCurrentPage(page);
      navigate(`/${page}`);
    },
    [navigate]
  );

  const calculatePosition = (page) => {
    switch (page) {
      case "home":
        return "44px";
      case "social":
        return "113px";
      case "recommend":
        return "182px";
      case "bookmark":
        return "252px";
      case "mypage":
        return "321px";
      default:
        return "44px";
    }
  };

  const getImageSrc = (page) => {
    switch (page) {
      case "home":
        return currentPage === "home" ? home_clicked : home;
      case "social":
        return currentPage === "social" ? social_clicked : social;
      case "recommend":
        return currentPage === "recommend" ? recommend_clicked : recommend;
      case "bookmark":
        return currentPage === "bookmark" ? bookmark_clicked : bookmark;
      case "mypage":
        return currentPage === "mypage" ? mypage_clicked : mypage;
      default:
        return home;
    }
  };

  const isHomeClicked = getImageSrc("home") === home_clicked;
  const isSocialClicked = getImageSrc("social") === social_clicked;
  const isRecommendClicked = getImageSrc("recommend") === recommend_clicked;
  const isBookMarkClicked = getImageSrc("bookmark") === bookmark_clicked;
  const isMypageClicked = getImageSrc("mypage") === mypage_clicked;

  return (
    <BottomBar>
      <Bottom>
        <BottomIcon src={bottom} style={stylePosition} alt="표시" />
        <Button
          src={getImageSrc("home")}
          onClick={() => handleClick("home")}
          alt="홈버튼"
          style={isHomeClicked ? { paddingTop: "8px" } : {}}
        />
        <Button
          src={getImageSrc("social")}
          onClick={() => handleClick("social")}
          alt="친구버튼"
          style={isSocialClicked ? { paddingTop: "8px" } : {}}
        />
        <Button
          src={getImageSrc("recommend")}
          onClick={() => handleClick("recommend")}
          alt="추천버튼"
          style={isRecommendClicked ? { paddingTop: "8px" } : {}}
        />
        <Button
          src={getImageSrc("bookmark")}
          onClick={() => handleClick("bookmark")}
          alt="북마크버튼"
          style={isBookMarkClicked ? { paddingTop: "8px" } : {}}
        />
        <Button
          src={getImageSrc("mypage")}
          onClick={() => handleClick("mypage")}
          alt="마이페이지버튼"
          style={isMypageClicked ? { paddingTop: "8px" } : {}}
        />
      </Bottom>
    </BottomBar>
  );
};

export default Navigation;
