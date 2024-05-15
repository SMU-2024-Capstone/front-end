import React, { useState } from 'react';

import axios from 'axios';

const Register = () => {
  const [nickname, setNickname] = useState('');

  const onChangeNickname = (e) => {
    const newValue = e.target.value;
    if (newValue.length > 6) {
      setNickname(newValue.substr(0, 6));
    } 
    else {
      setNickname(newValue);
    }
  };

  const handleCheckDuplicate = () => {
    console.log("중복확인", nickname);
    if (nickname == 0) {
      alert("다시 확인해주세요");
  }
  else {
    axios.post('http://localhost:8080/user/nickname', {
      nickname: nickname
    }
    )
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error);
    });
  }
};

const handleUseNickname = () => {
  console.log("사용하기", nickname);
  alert(nickname + " 사용합니다");
};

  return (
    <div className="Register">
      <input
        value={nickname}
        onChange={onChangeNickname}
        id="nickname"
        placeholder="닉네임 입력하기" 
      />
        <div className="buttons">
        <button onClick={handleCheckDuplicate}>중복확인</button>
        <button onClick={handleUseNickname}>사용하기</button>
      </div>
    </div>
    
  );
};

export default Register;