import React from 'react';
import styled from '@emotion/styled';
import Chips from '../Chips/Chips';
import BatchContact from '../BatchContact/BatchContact';
import WorkshopResource from '../WorkshopResources/WorkshopResource';

const CourseOverview = ({
  courseObjectives,
  topics,
  prerequisite,
  status,
  logo,
  description,
  linkto,
  btnText,
  FormTitle,
  BtnText,
}) => {
  return (
    <>
      <CourseOverviewContainer>
        <CourseOverviewWrapper>
          <CourseOverviewLeft>
            <CourseOverviewDetails>
              <p className="heading">WHAT YOU WILL LEARN</p>
              <ul>
                {courseObjectives.map((data, index) => {
                  return <li key={index}> {data} </li>;
                })}
              </ul>
              <p className="heading">SKILLS YOU WILL GAIN</p>
              <div className="chipContainer">
                {topics.map((data, index) => {
                  return <Chips title={data} />;
                })}
              </div>
            </CourseOverviewDetails>
            <CoursePrerequisite>
              <p className="heading">Prerequisite</p>
              <ul>
                {prerequisite.length != 0 ? (
                  prerequisite.map((data, index) => {
                    return <li key={index}> {data} </li>;
                  })
                ) : (
                  <li>There is no prerequisite for this course</li>
                )}
              </ul>
            </CoursePrerequisite>
          </CourseOverviewLeft>
          <CourseOverviewRight>
            {/* <BatchContact /> */}
            {status === 'finished' ? (
              <WorkshopResource
                logo={logo}
                description={description}
                linkto={linkto}
                btnText={btnText}
              />
            ) : status === 'Inprogress' ? (
              <WorkshopResource
                logo={logo}
                description={description}
                linkto={linkto}
                btnText={btnText}
              />
            ) : (
              <BatchContact BtnText={BtnText} FormTitle={FormTitle} />
            )}
          </CourseOverviewRight>
        </CourseOverviewWrapper>
      </CourseOverviewContainer>
    </>
  );
};

export default CourseOverview;

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
  margin-bottom: 20px;

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
