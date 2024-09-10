import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useState, useEffect, useRef, useMemo } from "react";
import nowPlace from "../assets/images/icons/marker/now_place.svg";
import book from "../assets/images/icons/marker/book.svg";

const containerStyle = {
  width: "392px",
  height: "852px",
};

const MapComponent = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const markerPosition = { lat, lng };
  const mapRef = useRef(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(`Position.Latitude 위도 : ${position.coords.latitude}`);
          setLat(position.coords.latitude);
          console.log(`Position.longitude 경도 : ${position.coords.longitude}`);
          setLng(position.coords.longitude);
        },
        (error) => {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다. 설정을 확인하세요.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const center = useMemo(() => ({ lat: 37.6025, lng: 126.9547 }), []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const handleMarkerClick = () => {
    if (mapRef.current) {
      mapRef.current.panTo(markerPosition);
    }

    window.open(
      "https://map.naver.com/p/entry/place/11591565?c=15.00,0,0,0,dh",
      "_blank"
    );
  };

  if (!isLoaded) return <div>Loading...</div>;

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
        onClick={handleMarkerClick}
      />
      <MarkerF
        position={center}
        icon={{ url: book }}
        onClick={handleMarkerClick}
      />
    </GoogleMap>
  );
};

export default MapComponent;
