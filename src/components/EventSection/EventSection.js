import React, { useState } from 'react';
import styled from '@emotion/styled';
import EventBox from '../EventBox/EventBox';
import DataLogo from '../../images/dataanalyticsevent.png';
import DataStructure from '../../images/datastructure.png';
import PythonLogo from '../../images/python.png';
import CyberLogo from '../../images/cyber.png';
import DevLogo from '../../images/dev.png';
import ExcelLogo from '../../images/dataexcel.png';

const EventHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const EventHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 80%;
  background-color: #f9f9f9;

  @media (max-width: 496px) {
    text-align: center;
    p {
      margin-top: 10%;
    }
  }
`;

const TabSection = styled.div`
  display: flex;
  width: 30%;
  height: 50px;
  margin-top: 5px;
  ${'' /* background-color: black; */}

  @media(max-width:496px) {
    width: 100%;
    font-size: 13px;
  }
`;

const ActiveTabElement = styled.div`
  display: flex;
  width: 170px;
  height: 70%;
  justify-content: center;
  align-items: center;
  background-color: #050b75;
  color: white;
  cursor: pointer;
`;

const InactiveTabElement = styled.div`
  display: flex;
  width: 170px;
  height: 70%;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #4c4a6e;
  cursor: pointer;
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
  ${'' /* margin-top: 1%; */}
  flex-wrap: wrap;
  justify-content: start;
  margin-bottom: 10%;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const EventSection = () => {
  const [pastActive, setPastActive] = useState(false);
  const [upcomingActive, setUpcomingActive] = useState(true);

  const handleClick1 = () => {
    setUpcomingActive(!upcomingActive);
    setPastActive(!pastActive);
  };

  const handleClick2 = () => {
    setUpcomingActive(!upcomingActive);
    setPastActive(!pastActive);
  };
  return (
    <>
      <EventHeadingWrapper id="event">
        <EventHeadingContainer>
          <EventHeading>Challenge Based Events</EventHeading>
          <p style={{ marginTop: 0, color: '#827FA5', fontSize: '15px' }}>
            Get to learn about happenings in tech world, in-demand skills & even
            more for FREE.
          </p>
        </EventHeadingContainer>
        <EventHeadingContainer>
          <TabSection>
            {upcomingActive ? (
              <ActiveTabElement>Upcoming Events</ActiveTabElement>
            ) : (
              <InactiveTabElement onClick={handleClick1}>
                Upcoming Events
              </InactiveTabElement>
            )}
            {pastActive ? (
              <ActiveTabElement>Past Events</ActiveTabElement>
            ) : (
              <InactiveTabElement onClick={handleClick2}>
                Past Events
              </InactiveTabElement>
            )}
          </TabSection>
        </EventHeadingContainer>
      </EventHeadingWrapper>
      <EventWrapper>
        {upcomingActive ? (
          <EventBoxContainer>
            <EventBox
              title="Data Analytics with Excel"
              duration="3 Days"
              time="FRI - SUN"
              date="4th June 2021"
              image={ExcelLogo}
              path="/data-analytics-with-excel"
            />
            <EventBox
              title="Web Development"
              duration="3 Days"
              time="SAT - MON: 8:00 PM - 9:30PM"
              date="22nd May 2021"
              image={DevLogo}
              path="/web-development-workshop"
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
        ) : (
          <EventBoxContainer>
            <EventBox
              title="Linux and Cybersecurity"
              duration="3 Days"
              time="FRI - SUN: 8:00 PM - 9:30PM"
              date="23 April, 2021"
              image={CyberLogo}
              path="/cybersecurity-workshop"
            />
            <EventBox
              title="Data Analytics"
              duration="3 Days"
              time="SAT - MON: 8:00 PM - 9:30PM"
              date="03 April, 2021"
              image={DataLogo}
              path="/data-analytics-workshop"
            />
          </EventBoxContainer>
        )}
      </EventWrapper>
    </>
  );
};

export default EventSection;
