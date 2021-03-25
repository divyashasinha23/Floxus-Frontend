import React from 'react';
import styled from '@emotion/styled';
import pythonHero from '../../images/python_hero.png';
import Buttoncomps from '../Buttons/Button1';
import { Link } from 'react-router-dom';

const CourseHeroLayout = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  background: transparent
    linear-gradient(103.88deg, #030528 17.31%, #050b7d 100%);
  ${'' /* background-color: #3c378e; */}
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const CourseHeroWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 70vh;

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
  }
`;

const CourseHeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;

  .heading {
    font-size: 35px;
    font-weight: 500;
    color: white;
    letter-spacing: 1px;
    margin-bottom: 0;
  }

  .description {
    font-size: 15px;
    font-weight: 300;
    color: white;
    margin-top: 0;
  }

  li {
    color: white;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
  }
`;

const CourseHeroRight = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;

  img {
    height: 95%;
  }

  @media (max-width: 496px) {
    display: none;
    img {
      width: 100%;
    }
  }
`;

const CourseFeaturedata = styled.div`
  display: flex;
  width: 60%;
  height: 45px;
  ${'' /* background-color: black; */}
  margin-top: 5%;

  div {
    display: flex;
    flex-basis: 33.3%;
    height: 100%;
    flex-direction: column;
    border-right: 1px solid white;
    color: white;
    ${'' /* align-items: center; */}
    justify-content: center;

    p {
      font-size: 11px;
      font-weight: 300;
      margin-top: 0;
      margin-bottom: 0;
      text-align: center;
    }

    &:last-child {
      border-right: none;
    }
  }

  @media (max-width: 496px) {
    width: 80%;
  }
`;

const RSVPSection = styled.div`
  display: flex;
  align-items: center;

  Button {
    margin-left: 20px;
  }
`;

const ExploreButton = styled.button`
  display: flex;
  width: 170px;
  height: 45px;
  background: transparent linear-gradient(85deg, #ed841f 0%, #ff5400 100%) 0% 0%
    no-repeat padding-box;
  border: none;
  border-radius: 22.5px;
  ${'' /* margin-top: 20px; */}
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 496px) {
    margin-bottom: 20px;
  }
`;

const Coursehero = ({ courseData, active }) => {
  return (
    <>
      <CourseHeroLayout>
        <CourseHeroWrapper>
          <CourseHeroLeft>
            <p className="heading"> {courseData.title} </p>
            <p className="description">{courseData.description}</p>

            {courseData.courseHerodata.map((data, index) => (
              <li key={index}> {data} </li>
            ))}

            <CourseFeaturedata>
              {courseData.courseServices.map((data, index) => (
                <div>
                  <p> {data} </p>
                  <p>Live Classes</p>
                </div>
              ))}
            </CourseFeaturedata>
            <RSVPSection>
              <p style={{ fontSize: '35px', fontWeight: 400, color: 'white' }}>
                ₹ {courseData.price}
              </p>

              {active == 'true' ? (
                <a
                  href="https://floxus.typeform.com/to/PXwWi5in"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ExploreButton> Enroll Now </ExploreButton>
                </a>
              ) : (
                <a
                  href="https://floxus.typeform.com/to/wE9KdqrA"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ExploreButton> Notify Me </ExploreButton>
                </a>
              )}
            </RSVPSection>
          </CourseHeroLeft>
          <CourseHeroRight>
            <img src={pythonHero} />
          </CourseHeroRight>
        </CourseHeroWrapper>
      </CourseHeroLayout>
    </>
  );
};

export default Coursehero;
