import React from 'react';
import styled from '@emotion/styled';
import CourseCard from '../CourseBox/CourseBox';
import EventBox from '../EventBox/EventBox';

const EventHeadingWrapper = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const EventHeadingContainer = styled.div`
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

const EventHeading = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: #4c4a6e;
  margin-bottom: 0;
`;

const EventWrapper = styled.div`
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

const EventBoxContainer = styled.div`
  display: flex;
  height: 100%;
  width: 80%;
  margin-top: 5%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 10%;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const EventSection = () => {
  return (
    <>
      <EventHeadingWrapper>
        <EventHeadingContainer>
          <EventHeading>Upcoming Events</EventHeading>
          <p style={{ marginTop: 0, color: '#827FA5', fontSize: '15px' }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </p>
        </EventHeadingContainer>
      </EventHeadingWrapper>
      <EventWrapper>
        <EventBoxContainer>
          <EventBox />
          <EventBox />
          <EventBox />
        </EventBoxContainer>
      </EventWrapper>
    </>
  );
};

export default EventSection;
