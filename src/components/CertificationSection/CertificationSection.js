import React from 'react';
import styled from '@emotion/styled';

const CertificateWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: transparent
    linear-gradient(103.88deg, #030528 17.31%, #050b7d 100%);
  justify-content: center;
  align-items: center;
`;

const CertificateContainer = styled.div`
  display: flex;
  height: 100vh;
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
  flex-basis: 60%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const CertificateContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;

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
  height: 40px;
  background: transparent linear-gradient(85deg, #ed841f 0%, #ff5400 100%) 0% 0%
    no-repeat padding-box;
  border: none;
  border-radius: 22.5px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  @media (max-width: 496px) {
    height: 55px;
  }
`;
const CertificateImage = styled.div`
  background-color: white;
  width: 500px;
  height: 230px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 160px;
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
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam.
              </Description>
              <Contact>We love taking your calls.</Contact>
              <CertificateButton>GET IN TOUCH</CertificateButton>
            </CertificateContent>
          </CertificateData>
          <CertificateImage></CertificateImage>
        </CertificateContainer>
      </CertificateWrapper>
    </>
  );
}

export default CertificationSection;
