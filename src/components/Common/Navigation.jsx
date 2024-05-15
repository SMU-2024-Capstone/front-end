import "../App.css";
import home from "../assets/icons/home.svg";
import social from "../assets/icons/social.svg";
import recommend from "../assets/icons/recommend.svg";
import bookmark from "../assets/icons/bookmark.svg";
import mypage from "../assets/icons/mypage.svg";
import home_clicked from "../assets/icons/home_clicked.svg";
import social_clicked from "../assets/icons/social_clicked.svg";
import recommend_clicked from "../assets/icons/recommend_clicked.svg";
import bookmark_clicked from "../assets/icons/bookmark_clicked.svg";
import mypage_clicked from "../assets/icons/mypage_clicked.svg";
import { useState } from "react";

// gpt -> 코드 줄이기
const Navigation = () => {
  const [currentImage, setCurrentImage] = useState({
    home: home_clicked,
    social: social,
    recommend: recommend,
    bookmark: bookmark,
    mypage: mypage,
    styleHome: { paddingTop: "8px" },
    styleSocial: { paddingTop: "0px" },
    styleRecommend: { paddingTop: "0px" },
    styleBookmark: { paddingTop: "0px" },
    styleMypage: { paddingTop: "0px" },
  });

  const clickHome = () => {
    setCurrentImage({
      home: home_clicked,
      social: social,
      recommend: recommend,
      bookmark: bookmark,
      mypage: mypage,
      styleHome: { paddingTop: "8px" },
      styleSocial: { paddingTop: "0px" },
      styleRecommend: { paddingTop: "0px" },
      styleBookmark: { paddingTop: "0px" },
      styleMypage: { paddingTop: "0px" },
    });
  };

  const clickSocial = () => {
    setCurrentImage({
      home: home,
      social: social_clicked,
      recommend: recommend,
      bookmark: bookmark,
      mypage: mypage,
      styleHome: { paddingTop: "0px" },
      styleSocial: { paddingTop: "8px" },
      styleRecommend: { paddingTop: "0px" },
      styleBookmark: { paddingTop: "0px" },
      styleMypage: { paddingTop: "0px" },
    });
  };

  const clickRecommend = () => {
    setCurrentImage({
      home: home,
      social: social,
      recommend: recommend_clicked,
      bookmark: bookmark,
      mypage: mypage,
      styleHome: { paddingTop: "0px" },
      styleSocial: { paddingTop: "0px" },
      styleRecommend: { paddingTop: "8px" },
      styleBookmark: { paddingTop: "0px" },
      styleMypage: { paddingTop: "0px" },
    });
  };

  const clickBookmark = () => {
    setCurrentImage({
      home: home,
      social: social,
      recommend: recommend,
      bookmark: bookmark_clicked,
      mypage: mypage,
      styleHome: { paddingTop: "0px" },
      styleSocial: { paddingTop: "0px" },
      styleRecommend: { paddingTop: "0px" },
      styleBookmark: { paddingTop: "8px" },
      styleMypage: { paddingTop: "0px" },
    });
  };

  const clickMypage = () => {
    setCurrentImage({
      home: home,
      social: social,
      recommend: recommend,
      bookmark: bookmark,
      mypage: mypage_clicked,
      styleHome: { paddingTop: "0px" },
      styleSocial: { paddingTop: "0px" },
      styleRecommend: { paddingTop: "0px" },
      styleBookmark: { paddingTop: "0px" },
      styleMypage: { paddingTop: "8px" },
    });
  };

  return (
    <>
      <div className="bottom-bar">
        <img
          src={currentImage.home}
          style={currentImage.styleHome}
          onClick={clickHome}
          alt="홈버튼"
        />
        <img
          src={currentImage.social}
          style={currentImage.styleSocial}
          onClick={clickSocial}
          alt="친구버튼"
        />
        <img
          src={currentImage.recommend}
          style={currentImage.styleRecommend}
          onClick={clickRecommend}
          alt="추천버튼"
        />
        <img
          src={currentImage.bookmark}
          style={currentImage.styleBookmark}
          onClick={clickBookmark}
          alt="북마크버튼"
        />
        <img
          src={currentImage.mypage}
          style={currentImage.styleMypage}
          onClick={clickMypage}
          alt="마이페이지버튼"
        />
      </div>
    </>
  );
};

export default Navigation;
