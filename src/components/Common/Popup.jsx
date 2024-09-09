import React, { useState } from "react";
import styled from "styled-components";
import add from "../../assets/images/icons/add.svg";

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1001; 
  width: 392px;
  height: 852px;
`;

const Overlay = styled.div`
  width: 392px;
  height: 852px;
  background: rgba(0, 0, 0, 0.5);
`;

const PopupContainer = styled.div`
  position: absolute;  
  bottom: 0;
  width: 100%;
`;

const Bg = styled.div`
  width: 100%;
  height: 360px;
  background: linear-gradient(#0D0E10, #282728);
  border-radius: 12px 12px 0 0;
  filter: drop-shadow(0 -8px 16px #282728);
  position: relative;
  padding-bottom: 20px;
`;

const Head = styled.div`
  font-size: 18px;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.3%;
  line-height: 140%;
  color: #ECEFF0;
  padding-top: 24px;
  padding-left: 24px;
`;

const CourseContainer = styled.div`
  padding-top: 12px;
  padding-left: 16px;
  position: relative;
  cursor: pointer;
`;

const CourseBox = styled.div`
  width: 360px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #ECEFF0;
  display: flex;
  align-items: center;
  padding-left: 12px;
  background-color: ${(props) => (props.isSelected ? '#ECEFF0' : 'transparent')};
  color: ${(props) => (props.isSelected ? '#B083D3' : '#6A6D6E')};

  &:hover {
    background-color: #ECEFF0;
    color: #B083D3;
  }
`;

const CourseText = styled.div`
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
`;

const NewContainer = styled.div`
  width: 360px;
  height: 48px;
  display: flex;
  align-items: center; 
  justify-content: flex-start; 
  cursor: pointer;
  border-radius: 12px;
  border: 1px solid #ECEFF0;
  background-color: ${(props) => (props.isSelected ? '#ECEFF0' : 'transparent')};
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: #ECEFF0;
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Medium";
  padding-left: 12px;
`;

const AddContainer = styled.div`
  width: 360px;
  height: 24px;
  display: flex;
  align-items: center; 
  justify-content: flex-start; 
  position: absolute;
  bottom: 23px; 
  margin-left: 16px; 
  cursor: pointer;
`;

const AddImg = styled.img`
  width: 24px;
  height: 24px;
`;

const AddText = styled.div`
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Medium";
  letter-spacing: -0.3%;
  line-height: 140%;
  color: #ECEFF0;
  margin-left: 4px; 
`;

const SaveBtn = styled.div`
  width: 48px;
  height: 24px;
  border-radius: 16px;
  border: 1px solid #D9D9D9;
  position: absolute;
  right: 16px;
  bottom: 23px;
  background-color: ${(props) => (props.isSelected ? '#ECEFF0' : 'transparent')};
  cursor: pointer;
`;

const SaveText = styled.div`
  font-size: 10px;
  font-family: "Apple-SD-GothicNeo-Medium";
  color: ${(props) => (props.isSelected ? '#B083D3' : '#6A6D6E')};
  margin-left: 15px;
  margin-top: 6px;
`;

const Popup = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([{ id: 1, name: "나만의 코스", isInput: false }]);
  const [nextId, setNextId] = useState(2);

  const handleCourseClick = (id) => {
    setSelectedCourse(id);
  };

  const handleAddClick = () => {
    setCourses([...courses, { id: nextId, name: "", isInput: true }]);
    setNextId(nextId + 1);
  };

  const handleInputChange = (e, id) => {
    const newCourses = courses.map((course) =>
      course.id === id ? { ...course, name: e.target.value } : course
    );
    setCourses(newCourses);
  };

  const handleInputKeyPress = (e, id) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        setCourses(courses.filter((course) => course.id !== id));
      } else {
        const newCourses = courses.map((course) =>
          course.id === id ? { ...course, isInput: false } : course
        );
        setCourses(newCourses);
      }
    }
  };

  const handleBlur = (id) => {
    const course = courses.find((course) => course.id === id);
    if (course && course.name.trim() === "") {
      setCourses(courses.filter((course) => course.id !== id));
    } else {
      const newCourses = courses.map((course) =>
        course.id === id ? { ...course, isInput: false } : course
      );
      setCourses(newCourses);
    }
  };

  return (
    <Container>
      <Overlay>
        <PopupContainer>
          <Bg>
            <Head>북마크 저장하기</Head>
            {courses.map((course) => (
              <CourseContainer key={course.id} onClick={() => handleCourseClick(course.id)}>
                {course.isInput ? (
                  <NewContainer isSelected={selectedCourse === course.id}>
                    <Input
                      autoFocus
                      value={course.name}
                      onChange={(e) => handleInputChange(e, course.id)}
                      onKeyPress={(e) => handleInputKeyPress(e, course.id)}
                      onBlur={() => handleBlur(course.id)}
                    />
                  </NewContainer>
                ) : (
                  <CourseBox isSelected={selectedCourse === course.id}>
                    <CourseText>{course.name}</CourseText>
                  </CourseBox>
                )}
              </CourseContainer>
            ))}
            <AddContainer onClick={handleAddClick}>
              <AddImg src={add} alt="Add Icon" />
              <AddText>새로 만들기</AddText>
            </AddContainer>
            <SaveBtn isSelected={selectedCourse !== null}>
                <SaveText isSelected={selectedCourse !== null}>저장</SaveText>
            </SaveBtn>
          </Bg> 
        </PopupContainer>
      </Overlay>
    </Container>
  );
};

export default Popup;
