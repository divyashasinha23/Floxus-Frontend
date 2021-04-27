import React from 'react';
import styled from '@emotion/styled';
import placementLogo from '../../images/placement.png';

const ShowcaseCardContainer = styled.div`
  display: flex;
  width: 300px;
  height: 250px;
  border: 1px solid #cecce3;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ShowcaseCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 90%;
  justify-content: center;

  .description {
    font-size: 13px;
    color: #827fa5;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  width: 60px;
  height: 60px;

  border-radius: 30px;

  ${'' /* justify-content: center; */}
  align-items: center;

  img {
    height: 50%;
  }
`;

const Heading = styled.p`
  font-size: 14px;
  color: #020b3d;
  font-weight: 600;
  ${'' /* letter-spacing: 1px; */}
  margin-bottom: 0;

  @media (max-width: 496px) {
    padding-left: 0;
    font-size: 15px;
  }
`;

const ShowcaseCard = ({ title, description, image, background, border }) => {
  return (
    <>
      <ShowcaseCardContainer>
        <ShowcaseCardWrapper>
          <IconWrapper background={background}>
            <img
              src={image}
              //   src={placementLogo}
              alt="icon"
            />
          </IconWrapper>
          <Heading> {title} </Heading>
          <p className="description">{description}</p>
        </ShowcaseCardWrapper>
      </ShowcaseCardContainer>
    </>
  );
};

export default ShowcaseCard;
