import React from 'react';
import styled from '@emotion/styled';
import Lottie from 'react-lottie';
import animationData from '../../lotties/submit.json';

const SubmissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  box-shadow: 0px 10px 99px #4c4a6e26;
  border: 1px solid #cecce3;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;

  .message {
    font-size: 13px;
    color: #827fa5;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
`;

const SubmissionCard = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <SubmissionContainer>
        {/* <img src={Submitgif} /> */}
        <Lottie options={defaultOptions} height={200} width={200} />
        <p className="message">We will contact you soon. Study hard!</p>
      </SubmissionContainer>
    </>
  );
};

export default SubmissionCard;
