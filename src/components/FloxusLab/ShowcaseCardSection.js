import React from 'react';
import styled from '@emotion/styled';
import ShowcaseCard from './ShowcaseCard';

const ShowcaseContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const ShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  ${'' /* align-items: center; */}
  margin-top: 10px;

  p {
    margin-top: 5px;
    margin-bottom: 30px;
  }
`;

const Heading = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 3%;
  margin-bottom: 10px; ;
`;

const ShowcaseCardWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 496px) {
    width: 100%;
  }
`;

const ShowcaseCardSection = () => {
  return (
    <>
      <ShowcaseContainer>
        <ShowcaseWrapper>
          <Header>
            <Heading>Get Premium membership of Floxus Lab &rarr;</Heading>
            <p>
              A one of a kind initiative by Floxus to train and make people
              job-ready while making them a brand.
            </p>
          </Header>
          <ShowcaseCardWrapper>
            <ShowcaseCard
              title="PLACEMENT PREPARATION PACKAGE"
              description="Get placement preparation packages for top consultancy companies out there."
              image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/placement.png"
              background="rgba(253, 220, 203, 0.6)"
              border="1px solid #ff7633"
            />
            <ShowcaseCard
              title="INTERVIEW TIPS AND TRICKS"
              description="It will help crack the technical rounds of different companies."
              image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/interview.png"
              background="66BD31"
              border="1px solid #66BD31"
            />
            <ShowcaseCard
              title="CODING SIMULATION TEST"
              description="Acing interviews is an art, with specially curated tips for industry experts, you go one step further in nailing them. "
              image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/coding.png"
              background="rgba(253, 220, 203, 0.6)"
              border="1px solid #ff7633"
            />
            <ShowcaseCard
              title="DATA STRUCTURE & ALGORITHMS"
              description="Get placement preparation packages for top consultancy companies out there."
              image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/datainterview.png"
              background="rgba(253, 220, 203, 0.6)"
              border="1px solid #ff7633"
            />
            <ShowcaseCard
              title="1:1 COUNSELLING"
              description="Don't know how to proceed further in your career? 1:1 counselling will help you in figuring this out."
              image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/counselling.png"
              background="rgba(253, 220, 203, 0.6)"
              border="1px solid #ff7633"
            />
            <ShowcaseCard
              title="PERSONAL BRANDING SESSIONS"
              description="Personal Branding is one of the most important things which people neglect. With Personal Branding sessions, start your journey of establishing yourself as a brand."
              image="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/face.png"
              background="rgba(253, 220, 203, 0.6)"
              border="1px solid #ff7633"
            />
          </ShowcaseCardWrapper>
        </ShowcaseWrapper>
      </ShowcaseContainer>
    </>
  );
};

export default ShowcaseCardSection;
