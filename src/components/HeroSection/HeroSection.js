import React, { Component } from 'react';
import styled from '@emotion/styled';
import * as FaIcons from 'react-icons/fa';
import Toolbar from '../ToolBar/Toolbar';
import HeroImage from '../../images/heroImage.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeroWrapper = styled.div`
  display: flex;
  height: autos;
  width: 100%;
  background: transparent
    linear-gradient(103.88deg, #030528 17.31%, #050b7d 100%);
  ${'' /* background-color: #3c378e; */}
  justify-content: center;
  align-items: center;
  @media (max-width: 496px) {
    height: auto;
    background: transparent
      linear-gradient(120deg, #030528 17.31%, #050b7d 100%);
    ${'' /* margin-top: 8vh; */}
  }
`;

const HeroContainer = styled.div`
  display: flex;
  height: auto;
  width: 80%;
  ${'' /* background-color: black; */}

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-basis: 60%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  margin-top: 5%;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-basis: 40%;
  height: 100%;
  img {
    height: 60%;
  }

  @media (max-width: 496px) {
    display: none;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;

  @media (max-width: 496px) {
    height: 80%;
  }
`;

const Heading = styled.p`
  font-size: 3em;
  color: white;
  font-weight: 400;
  letter-spacing: 1.5px;
  ${'' /* height: 200px; */}
  margin-bottom: 10px;

  @media (max-width: 496px) {
    font-size: 2em;
    letter-spacing: 0;
  }
`;

const HighLight = styled.span`
  color: #ed841f;
  font-weight: 600;
`;

const Excerpt = styled.p`
  color: #cecce3;
  font-size: 14px;
  font-weight: 300;
  padding-right: 20%;
  line-height: 25px;
  letter-spacing: 0.5px;
`;

const ExploreButton = styled.button`
  display: flex;
  width: 200px;
  height: 45px;
  background: transparent linear-gradient(85deg, #ed841f 0%, #ff5400 100%) 0% 0%
    no-repeat padding-box;
  border: none;
  border-radius: 22.5px;
  margin-top: 20px;
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

class HeroSection extends Component {
  render() {
    return (
      <>
        <HeroWrapper>
          <HeroContainer>
            <LeftContainer>
              <ContentBox>
                <Heading>
                  Solve Real-World Problems with{' '}
                  <HighLight>Project Based Learning</HighLight>
                </Heading>
                <Excerpt>
                  We feel projects are the best way to learn something and their
                  amalgamation with real-world problems will be your secret
                  sauce for success.
                </Excerpt>
                <AnchorLink
                  href="#event"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <ExploreButton>
                    Explore
                    <FaIcons.FaArrowRight style={{ marginLeft: '10px' }} />
                  </ExploreButton>{' '}
                </AnchorLink>
              </ContentBox>
            </LeftContainer>
            <RightContainer>
              <img src={HeroImage} />
            </RightContainer>
          </HeroContainer>
        </HeroWrapper>
      </>
    );
  }
}

export default HeroSection;
