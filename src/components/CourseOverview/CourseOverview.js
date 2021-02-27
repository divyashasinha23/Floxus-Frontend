import React from 'react';
import styled from '@emotion/styled';
import Chips from '../Chips/Chips';
import BatchContact from '../BatchContact/BatchContact';

const CourseOverviewContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: #f9f9f9;
  justify-content: center;
  align-items: center;
`;

const CourseOverviewWrapper = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  margin-top: 2%;

  @media (max-width: 496px) {
    flex-direction: column;
    width: 90%;
    margin-top: 6%;
  }
`;

const CourseOverviewLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;

  ${'' /* background-color: black; */}
`;

const CourseOverviewDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 70%;
  background-color: white;

  .heading {
    font-size: 16px;
    font-weight: 500;
    color: #636363;
    margin-left: 17px;
  }

  ul {
    margin-left: 5px;
    font-size: 12px;
    color: #000000;
    margin-top: 0;
    font-weight: 500;
  }

  ul li {
    margin-top: 5px;
  }

  .chipContainer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    margin-left: 10px;
    margin-bottom: 15px;
  }
`;

const CoursePrerequisite = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 30%;
  background-color: white;
  margin-top: 5%;

  .heading {
    font-size: 16px;
    font-weight: 500;
    color: #636363;
    margin-left: 17px;
  }

  ul {
    margin-left: 5px;
    font-size: 12px;
    color: #000000;
    margin-top: 0;
    font-weight: 500;
  }

  ul li {
    margin-top: 5px;
  }
`;

const CourseOverviewRight = styled.div`
  display: flex;
  flex-basis: 40%;
  height: 100%;
  justify-content: center;
  align-items: center;

  ${'' /* background-color: red; */}
`;

const CourseOverview = () => {
  return (
    <>
      <CourseOverviewContainer>
        <CourseOverviewWrapper>
          <CourseOverviewLeft>
            <CourseOverviewDetails>
              <p className="heading">WHAT YOU WILL LEARN</p>
              <ul>
                <li>Install Python and write your first program</li>
                <li>Describe the basics of the Python programming language</li>
                <li>
                  Use variables to store, retrieve and calculate information
                </li>
                <li>
                  Use variables to store, retrieve and calculate information
                </li>
              </ul>
              <p className="heading">SKILLS YOU WILL GAIN</p>
              <div className="chipContainer">
                <Chips title="Computer Programming" />
                <Chips title="Python Programming" />
                <Chips title="Python Syntax and Semantics" />
                <Chips title="Object Oriented Python" />
              </div>
            </CourseOverviewDetails>
            <CoursePrerequisite>
              <p className="heading">Prerequisite</p>
              <ul>
                <li>There is no prerequisite for this course</li>
              </ul>
            </CoursePrerequisite>
          </CourseOverviewLeft>
          <CourseOverviewRight>
            <BatchContact />
          </CourseOverviewRight>
        </CourseOverviewWrapper>
      </CourseOverviewContainer>
    </>
  );
};

export default CourseOverview;
