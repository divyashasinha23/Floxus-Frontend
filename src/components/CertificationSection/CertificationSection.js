import React from 'react';
import styled from '@emotion/styled';
import CertiSample from '../../images/certisample.jpg';

const CertificateWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background: transparent
    linear-gradient(103.88deg, #030528 17.31%, #050b7d 100%);
  justify-content: center;
  align-items: center;
`;

const CertificateContainer = styled.div`
  display: flex;
  height: 70vh;
  width: 80%;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
  }
`;

const CertificateData = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${'' /* background-color: red; */}
`;

const CertificateContent = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 496px) {
    height: 80%;
  }
`;

const Heading = styled.div`
  font-size: 2.5em;
  color: white;
  font-weight: 410;
  letter-spacing: 1px;
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
  padding-top: 10px;
  letter-spacing: 0.5px;
`;

const Contact = styled.div`
  color: #fff;
  font-size: 15px;
  font-style: italic;
  font-weight: 400px;
  padding-right: 20%;
  line-height: 25px;
  letter-spacing: 0.5px;
  padding-top: 50px;
`;

const CertificateButton = styled.div`
  display: flex;
  width: 150px;
  height: 35px;
  background: transparent linear-gradient(85deg, #ed841f 0%, #ff5400 100%) 0% 0%
    no-repeat padding-box;
  border: none;
  border-radius: 17px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  @media (max-width: 496px) {
    height: 40px;
    border-radius: 20px;
  }
`;
const CertificateImage = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;

  img {
    height: 60%;
  }

  @media (max-width: 496px) {
    margin-top: 20px;
    img {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

function CertificationSection() {
  return (
    <>
      <CertificateWrapper>
        <CertificateContainer>
          <CertificateData>
            <CertificateContent>
              <Heading>Certification</Heading>
              <Description>
                Get internationally recognised certifications which will give
                the boost your career need.
              </Description>
              <Contact>We love taking your calls.</Contact>
              <CertificateButton>GET IN TOUCH</CertificateButton>
            </CertificateContent>
          </CertificateData>
          <CertificateImage>
            <img src={CertiSample} />
          </CertificateImage>
        </CertificateContainer>
      </CertificateWrapper>
    </>
  );
}

export default CertificationSection;
