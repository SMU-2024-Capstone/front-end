import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useState, useEffect, useRef } from "react";
import nowPlace from "../assets/images/icons/marker/now_place.svg";

const containerStyle = {
  width: "392px",
  height: "852px",
};

const HomeMap = () => {
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
      alert("GPS를 지원하지 않습니다. 설정을 확인하세요.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

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
      "https://map.naver.com/p/entry/place/11591565?c=15.00,0,0,0,dh",
      "_blank"
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
      <MarkerF
        position={markerPosition}
        icon={{ url: nowPlace }}
        onClick={() => handleMarkerClick(markerPosition)}
      />
    </GoogleMap>
  );
};

export default HomeMap;
