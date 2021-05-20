import React from 'react';
import styled from '@emotion/styled';
import * as TiIcons from 'react-icons/ti';

const GetWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  background: transparent
    linear-gradient(103.88deg, #030528 17.31%, #050b7d 100%);
`;

const GetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 40vh;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  color: white;
  height: 10vh;
  font-size: 22px;
  font-weight: 600;

  @media (max-width: 496px) {
    ${'' /* justify-content: center; */}
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: auto;

  @media (max-width: 496px) {
    ${'' /* justify-content: center; */}
  }
`;

const TextArea = styled.div`
  display: flex;
  height: auto;
  width: 30%;
  align-items: center;

  p {
    color: white;
    margin-left: 5px;
  }

  @media (max-width: 496px) {
    width: auto;
  }
`;
const GetSection = () => {
  return (
    <>
      <GetWrapper>
        <GetContainer>
          <Header>What will you get?</Header>
          <ContentWrapper>
            <TextArea>
              <TiIcons.TiTick style={{ color: '#FF5400', fontSize: '25px' }} />{' '}
              <p>10+ hours of live classes.</p>
            </TextArea>

            <TextArea>
              <TiIcons.TiTick style={{ color: '#FF5400', fontSize: '25px' }} />{' '}
              <p>Interactive Quizzes</p>
            </TextArea>

            <TextArea>
              <TiIcons.TiTick style={{ color: '#FF5400', fontSize: '25px' }} />{' '}
              <p>Practical-Based Approach</p>
            </TextArea>

            <TextArea>
              <TiIcons.TiTick style={{ color: '#FF5400', fontSize: '25px' }} />{' '}
              <p>Learn from an Industry Expert</p>
            </TextArea>

            <TextArea>
              <TiIcons.TiTick style={{ color: '#FF5400', fontSize: '25px' }} />{' '}
              <p>Data-Driven Approach</p>
            </TextArea>

            <TextArea>
              <TiIcons.TiTick style={{ color: '#FF5400', fontSize: '25px' }} />{' '}
              <p>Practical Assignments</p>
            </TextArea>

            <TextArea>
              <TiIcons.TiTick style={{ color: '#FF5400', fontSize: '25px' }} />{' '}
              <p>Curriculum designed by the best</p>
            </TextArea>

            <TextArea>
              <TiIcons.TiTick style={{ color: '#FF5400', fontSize: '25px' }} />{' '}
              <p>Professional guidance</p>
            </TextArea>

            <TextArea>
              <TiIcons.TiTick style={{ color: '#FF5400', fontSize: '25px' }} />{' '}
              <p>Applied Learning</p>
            </TextArea>
          </ContentWrapper>
        </GetContainer>
      </GetWrapper>
    </>
  );
};

export default GetSection;
