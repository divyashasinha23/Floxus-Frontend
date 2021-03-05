import React from 'react';
import styled from '@emotion/styled';
import cloud from '../../images/cloud2x.png';
import { Link } from 'react-router-dom';

const CourseBox = styled.div`
  display: flex;
  height: 270px;
  width: 380px;
  box-shadow: 0px 10px 99px #4c4a6e26;
  border: 1px solid #cecce3;
  border-radius: 0px 48px 48px 0px;
  margin-top: 30px;
  margin-left: 20px;

  @media (max-width: 496px) {
    flex-direction: column;
    border-radius: 10px;
    height: auto;
    width: 100%;
  }
`;

const BoxLeft = styled.div`
  display: flex;
  flex-basis: 40%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    ${'' /* background-color: black; */}
    height:150px
  }
`;

const BoxRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  height: 100%;
  justify-content: center;
  ${'' /* background-color: black; */}
  .navLink {
    color: #ff5400;
    font-size: 10px;
    font-weight: 700;
    margin-top: 25px;
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 15px;
  }

  @media (max-width: 496px) {
    p {
      margin-left: 4%;
    }

    .navLink {
      color: #ff5400;
      font-size: 10px;
      font-weight: 700;
      margin-top: 15px;
      margin-left: auto;
      margin-right: 30px;
      cursor: pointer;
      text-decoration: none;
      margin-bottom: 15px;
    }
  }
`;
const ImageContainer = styled.div`
  display: flex;
  height: 90%;
  width: 110%;
  background: #3c378e;
  border-radius: 8px;
  margin-left: -30%;
  background-image: url(${cloud});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 496px) {
    margin-left: 0;
    margin-top: 5%;
    height: 100%;
    width: 95%;
  }
`;
const BoxHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #4c4a6e;
  margin-bottom: 0px;
`;

const CourseCard = (props) => {
  const { title, description, certification, duration, path } = props;
  return (
    <>
      <CourseBox>
        <BoxLeft>
          <ImageContainer></ImageContainer>
        </BoxLeft>
        <BoxRight>
          <BoxHeading> {title} </BoxHeading>
          <p style={{ color: '#827FA5', fontSize: '10px', fontWeight: 500 }}>
            {description}
          </p>
          <p
            style={{
              color: '#6522EA',
              fontSize: '9px',
              fontWeight: 600,
              marginTop: '20px',
              marginBottom: 0,
            }}
          >
            {certification}
          </p>
          <p
            style={{
              color: '#827FA5',
              fontSize: '9px',
              fontWeight: 600,
              marginTop: 5,
            }}
          >
            {duration}+ Hours of Lecture
          </p>
          <Link
            to={path}
            className="navLink"
            onClick={() => window.scroll(0, 0)}
          >
            View Course &rarr;
          </Link>
        </BoxRight>
      </CourseBox>
    </>
  );
};

export default CourseCard;
