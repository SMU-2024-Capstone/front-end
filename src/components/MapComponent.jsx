import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import nowPlace from '../assets/images/icons/marker/now_place.svg';
import book from '../assets/images/icons/marker/book.svg';
import cafe from '../assets/images/icons/marker/cafe.svg';
import concert from '../assets/images/icons/marker/concert.svg';
import drunk from '../assets/images/icons/marker/drunk.svg';
import etc from '../assets/images/icons/marker/etc.svg';
import exhibit from '../assets/images/icons/marker/exhibit.svg';
import food from '../assets/images/icons/marker/food.svg';
import game from '../assets/images/icons/marker/game.svg';
import movie from '../assets/images/icons/marker/movie.svg';
import shopping from '../assets/images/icons/marker/shopping.svg';
import sport from '../assets/images/icons/marker/sport.svg';
import tour from '../assets/images/icons/marker/tour.svg';

const containerStyle = {
  width: '392px',
  height: '852px',
};

const MapComponent = ({ selectedCategories }) => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const markerPosition = { lat, lng };
  const mapRef = useRef(null);

  // 현재 위치 가져오기
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert('GPS를 지원하지 않습니다. 설정을 확인하세요.');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  // 각 카테고리에 맞는 아이콘을 매핑하는 함수 (label을 기준으로)
  const getCategoryIcon = (label) => {
    switch (label) {
      case '식사':
        return food;
      case '카페':
        return cafe;
      case '독서':
        return book;
      case '공연':
        return concert;
      case '술':
        return drunk;
      case '기타':
        return etc;
      case '전시':
        return exhibit;
      case '오락':
        return game;
      case '영화':
        return movie;
      case '쇼핑':
        return shopping;
      case '스포츠':
        return sport;
      case '관광':
        return tour;
      default:
        return nowPlace;
    }
  };

  const getRandomNearbyPosition = (latitude, longitude) => {
    const randomOffset = () => (Math.random() - 0.5) * 0.001; // 약 100m 범위
    return {
      lat: latitude + randomOffset(),
      lng: longitude + randomOffset(),
    };
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  // 마커 클릭 시 해당 위치로 지도 이동, 링크 열기
  const handleMarkerClick = (position) => {
    if (mapRef.current) {
      mapRef.current.panTo(position);
    }

    window.open(
      'https://map.naver.com/p/entry/place/11591565?c=15.00,0,0,0,dh',
      '_blank'
    );
  };

  return (
    <GoogleMap
      options={{ disableDefaultUI: true }}
      zoom={18}
      center={markerPosition}
      mapContainerStyle={containerStyle}
      onLoad={(map) => {
        mapRef.current = map;
      }}
    >
      {/* 현재 위치 마커 */}
      <MarkerF
        position={markerPosition}
        icon={{ url: nowPlace }}
        onClick={() => handleMarkerClick(markerPosition)}
      />

      {/* 선택된 카테고리에 따라 마커 생성 */}
      {selectedCategories.map((category, index) => {
        const position = getRandomNearbyPosition(lat, lng);
        const iconUrl = getCategoryIcon(category.label);  // label을 기준으로 아이콘 매핑

        console.log(`Rendering marker for category: ${category.label}, icon: ${iconUrl}`);  // 디버깅용 로그

        return (
          <MarkerF
            key={index}
            position={position}
            icon={{ url: iconUrl }}  // 아이콘 URL 설정
            onClick={() => handleMarkerClick(position)}
          />
        );
      })}
    </GoogleMap>
  );
};

export default MapComponent;
