import React, { useState } from 'react';

const LocationSelect = ({ onNext }) => {
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleNext = () => {
        onNext(selectedLocation);
    };

    return (
        <div>
            <h2>지역을 선택해주세요</h2>
            <select value={selectedLocation} onChange={handleLocationChange}>
                <option value="">지역 선택</option>
                <option value="서울">서울</option>
                <option value="경기">경기</option>
                <option value="인천">인천</option>
                {/* 추가적인 지역 옵션을 넣기 */}
            </select>
            <button onClick={handleNext}>다음</button>
        </div>
    );
};

export default LocationSelect;