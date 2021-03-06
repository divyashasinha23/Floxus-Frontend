import React from 'react';
import styled from '@emotion/styled';
import CourseCard from '../CourseBox/CourseBox';

const CourseHeadingWrapper = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const CourseHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
  width: 80%;
  background-color: #f9f9f9;

  @media (max-width: 496px) {
    text-align: center;
    p {
      margin-top: 10%;
    }
  }
`;

const CourseHeading = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: #4c4a6e;
  margin-bottom: 0;
`;

const CourseWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    margin-top: 10%;
  }
`;

const CourseBoxContainer = styled.div`
  display: flex;
  height: 100%;
  width: 70%;
  margin-top: 5%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 10%;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const CourseSection = () => {
  return (
    <>
      <CourseHeadingWrapper id="course">
        <CourseHeadingContainer>
          <CourseHeading>Upcoming Courses</CourseHeading>
          <p style={{ marginTop: 0, color: '#827FA5', fontSize: '15px' }}>
            Gets hands on experience, mentorship and internships with these
            courses
          </p>
        </CourseHeadingContainer>
      </CourseHeadingWrapper>
      <CourseWrapper>
        <CourseBoxContainer>
          <CourseCard
            title="Data Analytics Master Programme"
            description="Get hands on Python skills and accelerate your data science career"
            certification="Microsoft Office Specialist"
            duration="60"
            path="/data-analytics"
            image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/datathumb.png"
          />

          <CourseCard
            title="Machine Learning Bootcamp"
            description="    'Get hands on Python skills and accelerate your Machine Learning career',"
            certification="Microsoft Technical Associate"
            duration="90"
            path="/machine-learning"
            image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/machinethumb.png"
          />
        </CourseBoxContainer>
      </CourseWrapper>
    </>
  );
};

export default CourseSection;
