import React from 'react';
import * as FaIcons from 'react-icons/fa';
import styled from '@emotion/styled';
import campus from '../../images/campus.png';

const CampusWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: transparent
    linear-gradient(103.88deg, #030528 17.31%, #050b7d 100%);
  ${'' /* background-color: #3c378e; */}
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    margin-top: 10%;
    background: transparent
      linear-gradient(180deg, #030528 17.31%, #050b7d 100%);
  }
`;

const CampusContainer = styled.div`
  display: flex;
  height: 70vh;
  width: 80%;
  align-items: center;

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
  }
`;

const CampusData = styled.div`
  display: flex;
  flex-basis: 60%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const CampusContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
  ${'' /* background-color: black; */}
  justify-content: center;
  @media (max-width: 496px) {
    height: auto;
    margin-top: 10%;
  }
`;

const Heading = styled.div`
  font-size: 3em;
  color: white;
  font-weight: 400;
  letter-spacing: 1.5px;
  margin-bottom: 10px;

  @media (max-width: 496px) {
    font-size: 2em;
    letter-spacing: 0;
  }
`;

const Description = styled.div`
  color: #cecce3;
  font-size: 14px;
  font-weight: 300;
  padding-right: 20%;
  line-height: 25px;
  letter-spacing: 0.5px;
`;

const CampusButton = styled.button`
  display: flex;
  width: 150px;
  height: 40px;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 20px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 496px) {
    ${'' /* height: 55px; */}
    margin-bottom:10px;
  }
`;

const CampusImage = styled.div`
  display: flex;
  flex-basis: 40%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  img {
    height: 50%;
  }

  @media (max-width: 496px) {
    img {
      height: 70%;
      margin-bottom: 10%;
      margin-top: 10%;
    }
  }
`;

function CampusSection() {
  return (
    <>
      <CampusWrapper>
        <CampusContainer>
          <CampusData>
            <CampusContent>
              <Heading>
                Trusted across<br></br>
                <span style={{ color: ' #ed841f', fontWeight: 600 }}>
                  5+ College Campus
                </span>{' '}
                in india.
              </Heading>
              <Description>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy
              </Description>
              <CampusButton>
                Book Demo
                <FaIcons.FaArrowRight style={{ marginLeft: '10px' }} />
              </CampusButton>
            </CampusContent>
          </CampusData>
          <CampusImage>
            <img src={campus} alt="campus image" />
          </CampusImage>
        </CampusContainer>
      </CampusWrapper>
    </>
  );
}

export default CampusSection;
