import React from 'react';
import styled from '@emotion/styled';
import EventBox from '../EventBox/EventBox';
import DataLogo from '../../images/dataanalyticsevent.png';
import DataStructure from '../../images/datastructure.png';
import PythonLogo from '../../images/python.png';

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
      <EventHeadingWrapper id="event">
        <EventHeadingContainer>
          <EventHeading>Upcoming Events</EventHeading>
          <p style={{ marginTop: 0, color: '#827FA5', fontSize: '15px' }}>
            Get to learn about happenings in tech world, in-demand skills & even
            more for FREE.
          </p>
        </EventHeadingContainer>
      </EventHeadingWrapper>
      <EventWrapper>
        <EventBoxContainer>
          <EventBox
            title="Data Analytics"
            duration="3 Days"
            time="FRI - MON: 8:00 PM - 9:30PM"
            date="03 April, 2021"
            image={DataLogo}
          />
          <EventBox
            title="Data Structure and Problem Solving"
            duration="12 Days"
            time="MON - FRI: 8:00 PM - 9:30PM"
            date="Coming Soon"
            image={DataStructure}
          />
          <EventBox
            title="Python Bootcamp"
            duration="7 Days"
            time="MON - FRI: 8:00 PM - 9:30PM"
            date="Coming Soon"
            image={PythonLogo}
          />
        </EventBoxContainer>
      </EventWrapper>
    </>
  );
};

export default EventSection;
