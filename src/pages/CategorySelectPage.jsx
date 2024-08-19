import React, { useState } from 'react';
import CategorySelect from '../components/CategorySelect'; // 컴포넌트 경로 수정

const CategorySelectionPage = () => {
    const [selectedOptions, setSelectedOptions] = useState({
        분위기: '',
        마시기: '',
        놀기: '',
        보기: '',
        걷기: ''
    });

    const handleOptionChange = (category, value) => {
        setSelectedOptions((prevState) => ({
            ...prevState,
            [category]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Selected Options:', selectedOptions);
        // 선택한 옵션을 서버로 보내거나 다음 단계를 처리
    };

    return (
        <div>
            <h2>카테고리를 선택해주세요</h2>
            {Object.keys(selectedOptions).map((category) => (
                <CategorySelect
                    key={category}
                    category={category}
                    value={selectedOptions[category]}
                    onChange={handleOptionChange}
                />
            ))}
            <button onClick={handleSubmit}>설정 완료</button>
        </div>
    );
};

export default CategorySelectionPage;