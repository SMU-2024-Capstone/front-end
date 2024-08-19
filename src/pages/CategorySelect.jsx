import React from 'react';

const options = {
    분위기: ['신나는', '조용한', '데이트', '친구랑'],
    마시기: ['커피', '차/음료', '소주', '맥주'],
    놀기: ['실외활동', '실내활동', '힐링', '만들기'],
    보기: ['영화', '전시회', '공연', '쇼핑'],
    걷기: ['시장', '공원', '문화재', '산책']
};

const CategorySelect = ({ category, value, onChange }) => {
    const handleChange = (e) => {
        onChange(category, e.target.value);
    };

    return (
        <div>
            <h3>{category}</h3>
            <select value={value} onChange={handleChange}>
                <option value="">항목 선택</option>
                {options[category].map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelect;