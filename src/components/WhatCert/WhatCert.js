import React from 'react';
import styled from '@emotion/styled';
import EClogo from '../../images/ec_council.png';
import MTAlogo from '../../images/microsoft.png';
import REDlogo from '../../images/redhat.svg';

const WhatCertContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  justify-content: center;
  align-items: center;
  ${'' /* margin-top: 3%; */}
  background-color: white;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const WhatCertWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 496px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;

const WhatCertContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  height: 100%;
  justify-content: center;

  .heading {
    font-size: 25px;
    color: #4c4a6e;
    font-weight: 600;
  }

  .description {
    color: #827fa5;
    font-size: 15px;
    margin-top: 0;
  }

  @media (max-width: 496px) {
    height: auto;
  }
`;

const WhatCertLogo = styled.div`
  display: flex;
  flex-basis: 60%;
  height: 100%;
  justify-content: space-around;
  align-items: center;

  img {
    height: 15%;
  }

  .redhat {
    height: 20%;
  }

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
    padding-top: 5%;
    padding-bottom: 5%;

    img {
      width: 40%;
      margin-top: 30px;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  border-radius: 100px;
  background: white;
  border: 1px solid #cecce3;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 99px #4c4a6e26;

  img {
    height: 20%;
  }

  .redhat {
    height: 40%;
  }

  @media (max-width: 496px) {
    flex-direction: column;
    margin-top: 30px;

    img {
      width: 60%;
      margin-bottom: 20%;
    }
  }
`;

const WhatCert = () => {
  return (
    <>
      <WhatCertContainer>
        <WhatCertWrapper>
          <WhatCertContent>
            <p className="heading">Learn the best tools and get certified</p>
            <p className="description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </p>
          </WhatCertContent>
          <WhatCertLogo>
            <ImageContainer>
              <img src={EClogo} />
            </ImageContainer>

            <ImageContainer>
              <img src={MTAlogo} />
            </ImageContainer>

            <ImageContainer>
              <img src={REDlogo} className="redhat" />
            </ImageContainer>
          </WhatCertLogo>
        </WhatCertWrapper>
      </WhatCertContainer>
    </>
  );
};

export default WhatCert;
