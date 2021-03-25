import React from 'react';
import styled from '@emotion/styled';
import projectIcon from '../../images/projectsicon.png';
import skillIcon from '../../images/skillicon.png';
import challengeIcon from '../../images/challenge.png';

const FloxusFeatureLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  @media (max-width: 496px) {
    height: auto;
  }
`;

const FloxusFeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 80vh;
  @media (max-width: 496px) {
    height: auto;
  }
`;

const FloxusFeatureDescription = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 50%;
  @media (max-width: 496px) {
    flex-direction: column;
  }
`;

const FloxusFeatureDescriptionLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  ${'' /* background-color: black; */}
`;

const FloxusFeatureDescriptionRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  ${'' /* background-color: black; */}

  p {
    color: #827fa5;
    padding-right: 15%;
    padding-left: 20%;
    font-size: 15px;
  }

  @media (max-width: 496px) {
    p {
      padding-right: 0;
      padding-left: 0;
    }
  }
`;

const Heading = styled.p`
  font-size: 50px;
  color: #4c4a6e;
  ${'' /* color:#030528; */}
  font-weight: 600;
  padding-left: 20%;
  letter-spacing: 1px;
  ${'' /* padding-right: 16%; */}
  @media(max-width:496px) {
    padding-left: 0;
    font-size: 30px;
    text-align: center;
  }
`;

const FloxusFeatureContainer = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 50%;
  justify-content: space-around;

  @media (max-width: 496px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FloxusFeatureCard = styled.div`
  display: flex;
  width: 280px;
  height: 200px;
  border: 1.5px solid #cecce3;
  border-radius: 10px;
  box-shadow: 0px 10px 99px #4c4a6e26;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    margin-top: 15px;
  }
`;

const FloxusCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  justify-content: center;

  .title {
    font-size: 15px;
    font-weight: 600;
    ${'' /* color: #5048ca; */}

    ${'' /* margin-bottom: 0; */}
  }

  .description {
    color: #827fa5;
    font-size: 12px;
    margin-top: 0;
    font-weight: 400;
  }

  img {
    height: 30px;
    width: 30px;
  }
`;

const Floxusfeature = () => {
  return (
    <>
      <FloxusFeatureLayout>
        <FloxusFeatureWrapper>
          <FloxusFeatureDescription>
            <FloxusFeatureDescriptionLeft>
              <Heading>
                How Floxus can boost your{' '}
                <span style={{ color: '#FF5400' }}>Career?</span>
              </Heading>
            </FloxusFeatureDescriptionLeft>
            <FloxusFeatureDescriptionRight>
              <p>
                Floxus imparts quality education and industry related
                development related to the furnishing of life skills for
                everyone. Students require a holistic and unique approach for
                their problems.
              </p>

              <p>
                Floxus lives up to this and simulates real world problems in its
                learning to make you the all-rounder.
              </p>
            </FloxusFeatureDescriptionRight>
          </FloxusFeatureDescription>
          <FloxusFeatureContainer>
            <FloxusFeatureCard>
              <FloxusCardContent>
                <img src={projectIcon} />
                <p className="title">Create Amazing Projects</p>
                <p className="description">
                  Get to work on live projects with the support of experts to
                  explore all realms of technology.
                </p>
              </FloxusCardContent>
            </FloxusFeatureCard>
            <FloxusFeatureCard>
              <FloxusCardContent>
                <img src={skillIcon} />
                <p className="title">Learn tech skills</p>
                <p className="description">
                  Grab the opportunity to learn the skills demanded by
                  professionals today. Deep learning, machine learning, IOT and
                  what not, all in one forum.
                </p>
              </FloxusCardContent>
            </FloxusFeatureCard>
            <FloxusFeatureCard>
              <FloxusCardContent>
                <img src={challengeIcon} />
                <p className="title">Challenge based learning</p>
                <p className="description">
                  All the courses offered come with leading edge challenges to
                  make you know where you stand and help you get better and
                  grow. .
                </p>
              </FloxusCardContent>
            </FloxusFeatureCard>
          </FloxusFeatureContainer>
        </FloxusFeatureWrapper>
      </FloxusFeatureLayout>
    </>
  );
};

export default Floxusfeature;
