import React from 'react';
import styled from '@emotion/styled';
import FAQAccorion from './FAQAccorion';

const FAQContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 5%;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const Heading = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const FAQSection = () => {
  return (
    <>
      <FAQContainer>
        <FAQWrapper>
          <Heading>FAQs</Heading>
          <FAQAccorion />
        </FAQWrapper>
      </FAQContainer>
    </>
  );
};

export default FAQSection;
