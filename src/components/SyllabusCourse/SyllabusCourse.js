import React from 'react';
import styled from '@emotion/styled';
import Syllbus_Accordion from '../Syllbus_Accordion/Syllbus_Accordion';
import WorkshopResource from '../WorkshopResources/WorkshopResource';

const SyllabusContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const SyllabusContain = styled.div`
  display: flex;
  width: 80%;
  height: 100%;

  @media (max-width: 496px) {
    flex-direction: column;
  }
`;

const SyllabusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 5%;

  @media (max-width: 496px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const SyllabusRight = styled.div`
  display: flex;
  flex-basis: 40%;
  ${'' /* height: 700px; */}
  justify-content: center;
  align-items: center;
  ${'' /* background-color: black; */}
`;

const SyllabusCourse = ({
  curriculum,
  description,
  linkto,
  btnText,
  logo,
  type,
}) => {
  return (
    <>
      <SyllabusContainer>
        <SyllabusContain>
          <SyllabusWrapper>
            <Heading>Curriculum</Heading>
            <Syllbus_Accordion curriculum={curriculum} />
          </SyllabusWrapper>
          <SyllabusRight>
            {type == 'course' ? (
              <WorkshopResource
                description={description}
                linkto={linkto}
                btnText={btnText}
                logo={logo}
              />
            ) : (
              ''
            )}
          </SyllabusRight>
        </SyllabusContain>
      </SyllabusContainer>
    </>
  );
};

export default SyllabusCourse;
