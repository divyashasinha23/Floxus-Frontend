import React from 'react';
import styled from '@emotion/styled';
import Student from '../../images/student.png';
import Professional from '../../images/professional.png';
import Entrepreneur from '../../images/Entrepreneur.png';
import * as ImIcons from 'react-icons/im';

const WhoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    margin-top: 5%;
  }
`;

const WhoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
    margin-top: 5%;
    width: 80%;
    margin-bottom: 5%;
  }
`;

const Header = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  font-size: 22px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
`;

const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  ${'' /* flex-wrap:wrap; */}
  align-items:center;
  justify-content: space-between;

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
  }
`;

const WhoBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 330px;
  box-shadow: 0px 10px 99px #4c4a6e26;
  border: 1px solid #cecce3;
  border-radius: 5px;

  @media (max-width: 496px) {
    margin-top: 15px;
    width: 100%;
    height: auto;
  }
`;

const BoxHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25vh;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: #030528;
  ${'' /* background-color: black; */}

  img {
    height: 50%;
    margin-bottom: 0;
  }
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const TextContainer = styled.div`
  display: flex;
  width: 70%;
  ${'' /* justify-content: center; */}
  align-items: center;

  p {
    font-size: 15px;
  }
`;

const WhoForSection = () => {
  return (
    <>
      <WhoWrapper>
        <WhoContainer>
          <Header>Who is this workshop for?</Header>
          <BoxWrapper>
            <WhoBox>
              <BoxHeader>
                <img src={Student} alt="student" />
                <p> Student</p>
              </BoxHeader>
              <BoxContent>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />
                  <p>Get Recognised by companies.</p>
                </TextContainer>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />
                  <p>Start your journey of Data Analytics.</p>
                </TextContainer>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />
                  <p>Make projects for your portfolio.</p>
                </TextContainer>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />{' '}
                  <p>Start your freelance journey.</p>
                </TextContainer>
              </BoxContent>
            </WhoBox>

            <WhoBox>
              <BoxHeader>
                <img src={Professional} alt="professional" />
                <p>Professional</p>
              </BoxHeader>
              <BoxContent>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />
                  <p>Automate your daily tasks.</p>
                </TextContainer>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />
                  <p>Boost up your Excel Skills.</p>
                </TextContainer>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />
                  <p>Add new things in your portfolio.</p>
                </TextContainer>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />
                  <p>Decrease your workload by tips and tricks.</p>
                </TextContainer>
              </BoxContent>
            </WhoBox>

            <WhoBox>
              <BoxHeader>
                <img src={Entrepreneur} alt="entrpreneur" />
                <p> Enrepreneur</p>
              </BoxHeader>
              <BoxContent>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />{' '}
                  <p>Use your data to take Data-Driven Decisions</p>
                </TextContainer>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />{' '}
                  <p>Keep track your growth.</p>
                </TextContainer>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />{' '}
                  <p>Analyse markets for product launch.</p>
                </TextContainer>
                <TextContainer>
                  <ImIcons.ImArrowUpRight2
                    style={{ marginRight: '15px', color: '#FC5B04' }}
                  />{' '}
                  <p>Increase your Business Growth through Data.</p>
                </TextContainer>
              </BoxContent>
            </WhoBox>
          </BoxWrapper>
        </WhoContainer>
      </WhoWrapper>
    </>
  );
};

export default WhoForSection;
