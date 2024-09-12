import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import nowPlace from "../assets/images/icons/marker/now_place.svg";
import book from "../assets/images/icons/marker/book.svg";
import cafe from "../assets/images/icons/marker/cafe.svg";
import concert from "../assets/images/icons/marker/concert.svg";
import drunk from "../assets/images/icons/marker/drunk.svg";
import etc from "../assets/images/icons/marker/etc.svg";
import exhibit from "../assets/images/icons/marker/exhibit.svg";
import food from "../assets/images/icons/marker/food.svg";
import game from "../assets/images/icons/marker/game.svg";
import movie from "../assets/images/icons/marker/movie.svg";
import shopping from "../assets/images/icons/marker/shopping.svg";
import sport from "../assets/images/icons/marker/sport.svg";
import tour from "../assets/images/icons/marker/tour.svg";

const containerStyle = {
  width: "392px",
  height: "852px",
};

const MapComponent = ({ selectedCategories, lng, lat, link }) => {
  const [currentLat, setCurrentLat] = useState(0);
  const [currentLng, setCurrentLng] = useState(0);
  const mapRef = useRef(null);

  // 현재 위치 가져오기
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLat(position.coords.latitude);
          setCurrentLng(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다. 설정을 확인하세요.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  // 각 카테고리에 맞는 아이콘을 매핑하는 함수 (label을 기준으로)
  const getCategoryIcon = (label) => {
    switch (label) {
      case "식사":
        return food;
      case "카페":
        return cafe;
      case "독서":
        return book;
      case "공연":
        return concert;
      case "술":
        return drunk;
      case "기타":
        return etc;
      case "전시":
        return exhibit;
      case "오락":
        return game;
      case "영화":
        return movie;
      case "쇼핑":
        return shopping;
      case "스포츠":
        return sport;
      case "관광":
        return tour;
      default:
        return nowPlace;
    }
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  // 첫 번째 마커의 위치를 구해서 초기 지도 중심에 설정
  const initialCenter = {
    lat: parseFloat(lat[0]),
    lng: parseFloat(lng[0]),
  };

  const handleMarkerClickWithPan = (position, url) => {
    // 지도 이동
    if (mapRef.current) {
      mapRef.current.panTo(position);
    }

    // 링크 이동
    window.open(url, "_blank");
  };

  const handleMarkerClick = (position) => {
    if (mapRef.current) {
      mapRef.current.panTo(position);
    }
  };

  return (
    <GoogleMap
      options={{ disableDefaultUI: true }}
      zoom={16}
      center={initialCenter}
      mapContainerStyle={containerStyle}
      onLoad={(map) => {
        mapRef.current = map;
      }}
    >
      {/* 현재 위치 마커 */}
      <MarkerF
        position={{ lat: currentLat, lng: currentLng }}
        icon={{ url: nowPlace }}
        onClick={() => handleMarkerClick({ lat: currentLat, lng: currentLng })}
      />

      {/* 선택된 카테고리에 따라 마커 생성 */}
      {selectedCategories.map((category, index) => {
        // 위도와 경도 배열에서 값을 추출
        const markerPosition = {
          lat: parseFloat(lat[index]),
          lng: parseFloat(lng[index]),
        };

        const iconUrl = getCategoryIcon(category.label); // label을 기준으로 아이콘 매핑
        const markerLink = link[index]; // 해당 인덱스의 링크 가져오기

        console.log(
          `Rendering marker for category: ${category.label}, icon: ${iconUrl}, link: ${markerLink}`
        ); // 디버깅용 로그

        return (
          <MarkerF
            key={index}
            position={markerPosition}
            icon={{ url: iconUrl }} // 아이콘 URL 설정
            onClick={() => handleMarkerClickWithPan(markerPosition, markerLink)} // 해당 장소의 링크로 이동
          />
        );
      })}
    </GoogleMap>
  );
};

export default MapComponent;
