import styled from "styled-components";
import home from "../../assets/images/icons/home.svg";
import social from "../../assets/images/icons/social.svg";
import recommend from "../../assets/images/icons/recommend.svg";
import bookmark from "../../assets/images/icons/bookmark.svg";
import mypage from "../../assets/images/icons/mypage.svg";
import home_clicked from "../../assets/images/icons/home_clicked.svg";
import social_clicked from "../../assets/images/icons/social_clicked.svg";
import recommend_clicked from "../../assets/images/icons/recommend_clicked.svg";
import bookmark_clicked from "../../assets/images/icons/bookmark_clicked.svg";
import mypage_clicked from "../../assets/images/icons/mypage_clicked.svg";
import bottom from "../../assets/images/icons/bottom.svg";
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
  bottom: -8px;
  transition: all 0.3s ease;
`;

const Navigation = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("home");
  const [stylePosition, setStylePosition] = useState({ left: "44px" });

  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    const page = path === "map" ||path === "searchresult" || path === "homeresult" ? "home" : path;
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

  return (
    <BottomBar>
      <Bottom>
        <BottomIcon src={bottom} style={stylePosition} alt="표시" />
        <Button src={getImageSrc("home")} onClick={() => handleClick("home")} alt="홈버튼" />
        <Button src={getImageSrc("social")} onClick={() => handleClick("social")} alt="친구버튼" />
        <Button src={getImageSrc("recommend")} onClick={() => handleClick("recommend")} alt="추천버튼" />
        <Button src={getImageSrc("bookmark")} onClick={() => handleClick("bookmark")} alt="북마크버튼" />
        <Button src={getImageSrc("mypage")} onClick={() => handleClick("mypage")} alt="마이페이지버튼" />
      </Bottom>
    </BottomBar>
  );
};

export default Navigation;
