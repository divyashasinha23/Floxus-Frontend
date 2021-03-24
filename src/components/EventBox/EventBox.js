import React from 'react';
import styled from '@emotion/styled';
import EventLogo from '../../images/dataanalyticsevent.png';
import { Link } from 'react-router-dom';

const EventBoxContainer = styled.div`
  display: flex;
  width: 320px;
  height: 250px;
  background-color: white;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ${'' /* flex-direction: column; */}
`;

const EventBoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 80%;
`;
const EventBoxUp = styled.div`
  display: flex;
  flex-basis: 70%;
  justify-content: center;
  align-items: center;
  ${'' /* border-bottom: 1px solid #cecce3; */}
`;

const EventImage = styled.div`
  display: flex;
  flex-basis: 30%;
  justify-content: center;
  align-items: center;
  ${'' /* background-color: black; */}

  img {
    height: 100px;
    width: 100px;
    border-radius: 5px;
  }
`;

const EventDetailsContent = styled.div`
  display: flex;
  flex-basis: 70%;
  justify-content: center;
  ${'' /* align-items: center; */}
  flex-direction: column;
  margin-left: 20px;

  .heading {
    font-size: 17px;
    font-weight: 600;
    color: #4c4a6e;
    margin-bottom: 5px;
  }

  .duration {
    margin-top: 0;
    font-size: 11px;
    font-weight: 500;
    color: #827fa5;
  }
`;

const EventBoxDown = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 15%;
  justify-content: center;
  align-items: center;

  .extradiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .text {
    font-size: 13px;
    font-weight: 500;
    color: #4c4a6e;
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cecce3;
  ${'' /* margin-left: 25px; */}
`;

const Left = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #cecce3;

  .text {
    font-size: 13px;
    font-weight: 500;
    color: #4c4a6e;
  }
`;

const Right = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .text {
    font-size: 13px;
    font-weight: 500;
    color: #ff5400;
    text-decoration: none;
    cursor: pointer;
  }
`;

const EventBox = ({ title, duration, time, date }) => {
  return (
    <>
      <EventBoxContainer>
        <EventBoxWrapper>
          <EventBoxUp>
            <ContainerWrapper>
              <EventImage>
                <img src={EventLogo} height="90%" />
              </EventImage>
              <EventDetailsContent>
                <p className="heading"> {title} </p>
                <p className="duration">Duration: {duration}</p>
              </EventDetailsContent>
            </ContainerWrapper>
          </EventBoxUp>
          <HorizontalLine />
          <EventBoxDown>
            <ContainerWrapper>
              <div className="extradiv">
                {' '}
                <p className="text"> {time} </p>
              </div>
            </ContainerWrapper>
          </EventBoxDown>
          <HorizontalLine />
          <EventBoxDown>
            <ContainerWrapper>
              <Left>
                <p className="text"> {date} </p>
              </Left>
              <Right>
                {date == 'Coming Soon' ? (
                  <Link className="text">Notify Me</Link>
                ) : (
                  <Link
                    to="/data-analytics-workshop"
                    className="text"
                    onClick={window.scroll(0, 0)}
                  >
                    Explore
                  </Link>
                )}
              </Right>
            </ContainerWrapper>
          </EventBoxDown>
        </EventBoxWrapper>
      </EventBoxContainer>
    </>
  );
};

export default EventBox;
