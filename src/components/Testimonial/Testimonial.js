import React from 'react';
import * as FaIcons from 'react-icons/fa';
import styled from '@emotion/styled';
import TestimonialCard from '../testimonialCard/testimonialCard';
import Diksha from '../../images/Diksha.jpeg';
import Anisha from '../../images/Anisha.jpeg';
import Sahil from '../../images/Sahil.jpeg';
import Rohit from '../../images/Rohit.jpeg';

const TestimonialWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
  ${'' /* box-shadow: 6px 6px 5px #c0c0c0; */}
  padding-top: 30px;
  padding-bottom: 70px;

  @media (max-width: 496px) {
    margin-top: 10%;
  }
`;

const TestimonialContainer = styled.div`
  display: flex;
  height: 70vh;
  width: 80%;
  align-items: center;

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
    ${'' /* width: 100%; */}
  }
`;

const TestimonialData = styled.div`
  display: flex;
  flex-basis: 40%;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;

  ${'' /* background-color: #CBC3E3; */}
  justify-content: center;
  @media (max-width: 496px) {
    height: auto;
    margin-top: 10%;
    margin-bottom: 20px;

    .btn {
      display: none;
    }
    ${'' /* align-items: center; */}
  }
`;

const Heading = styled.div`
  font-size: 3em;
  color: #3c1361;
  font-weight: 600;
  margin-bottom: 10px;
  line-height: 60px;
  margin-bottom: 20px;
  margin-top: 80px;

  @media (max-width: 496px) {
    font-size: 25px;
    line-height: 35px;
    letter-spacing: 0;
    margin-top: 15px;
  }
`;

const Description = styled.div`
  color: #7c5295;
  font-size: 16px;
  font-weight: 400;
  padding-right: 20%;
  line-height: 25px;
  letter-spacing: 0.9px;

  @media (max-width: 496px) {
    font-size: 14px;
    padding-right: 0;
    ${'' /* text-align: center; */}
  }
`;

const TestimonialButton = styled.button`
  display: flex;
  width: 180px;
  height: 180px;
  border: none;
  background: transparent linear-gradient(85deg, #ed841f 0%, #ff5400 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 200;
  font-size: 18px;
  padding: 10px;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 80px;

  @media (max-width: 496px) {
    ${'' /* height: 55px; */}
    margin-bottom:10px;
    height: 45px;
  }
`;

const TestimonialCardContainer = styled.div`
  display: flex;
  flex-basis: 60%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .mobBtn {
    display: none;
  }

  @media (max-width: 496px) {
    width: 100%;

    .mobBtn {
      display: flex;
    }
  }
`;

function TestimonialSection() {
  return (
    <>
      <TestimonialWrapper>
        <TestimonialContainer>
          <TestimonialData>
            <TestimonialContent>
              <Heading>
                How{' '}
                <span style={{ color: ' #FF5400', fontWeight: 600 }}>
                  Students
                </span>{' '}
                learned from our classes
              </Heading>
              <Description>
                Quality education and industry relevant development are the
                values that are deeply rooted within FLOXUS and the words of our
                learners are the living proof of it .
              </Description>
              <TestimonialButton className="btn">
                More Stories
                <FaIcons.FaArrowRight style={{ marginLeft: '25px' }} />
              </TestimonialButton>
            </TestimonialContent>
          </TestimonialData>
          <TestimonialCardContainer>
            <TestimonialCard
              name="Diksha Krishna"
              text="Birla Institute Of Technology,Mesra"
              image={Diksha}
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam."
            />
            <TestimonialCard
              name="Sahil"
              text="Birla Institute Of Technology,Mesra"
              image={Sahil}
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam."
            />
            <TestimonialCard
              name="Anisha Agarwal"
              text="Birla Institute Of Technology,Mesra"
              image={Anisha}
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam."
            />
            <TestimonialCard
              name="Rohit Kumar"
              text="Birla Institute Of Technology,Mesra"
              image={Rohit}
              description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam."
            />
            <TestimonialButton className="mobBtn">
              More stories &rarr;
            </TestimonialButton>
          </TestimonialCardContainer>
        </TestimonialContainer>
      </TestimonialWrapper>
    </>
  );
}

export default TestimonialSection;
