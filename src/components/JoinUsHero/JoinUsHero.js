import React from 'react';
import styled from '@emotion/styled';
import Chips from '../Chips/Chips';
import Footer from '../Footer/Footer';

const JoinHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  background: transparent
    linear-gradient(103.88deg, #030528 17.31%, #050b7d 100%);
  justify-content: center;
  align-items: center;

  .heading {
    font-size: 45px;
    font-weight: 600;
    color: white;
    margin-bottom: 0;
  }

  .textContainer {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    color: white;
    margin-top: 0;
  }

  @media (max-width: 496px) {
    .textContainer {
      width: 80%;
      text-align: center;
      font-size: 14px;
    }
  }
`;

const ContainerJoin = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const JoinWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 60vh;
  flex-direction: column;
  justify-content: center;

  .heading {
    font-size: 25px;
    font-weight: 600;
    color: #4c4a6e;
    margin-bottom: 20px;
  }
`;

const JobBox = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  border-top: 1px solid #cecce3;
  border-bottom: 1px solid #cecce3;
  justify-content: space-between;
  cursor: pointer;

  .title {
    font-size: 17px;
    font-weight: 600;
    color: #3c1361;
    margin-bottom: 20px;
  }

  &:hover {
    .title {
      margin-left: 7px;
      transition: 0.5s ease;
    }
  }
`;

const JoinUsHero = () => {
  return (
    <>
      <JoinHeroContainer>
        <p className="heading">Get Involved</p>
        <div className="textContainer">
          <p className="description">
            Be a part of an organisation of brilliant minds who work towards
            something new, every day.
          </p>
        </div>
      </JoinHeroContainer>
      <ContainerJoin>
        <JoinWrapper>
          <p className="heading">Open Postitions</p>
          <JobBox>
            <p className="title"> Growth Intern </p>
            <Chips title="12 open roles" />
          </JobBox>
        </JoinWrapper>
      </ContainerJoin>
      <Footer />
    </>
  );
};

export default JoinUsHero;
