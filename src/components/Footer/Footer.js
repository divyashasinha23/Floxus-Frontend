import React from 'react';
import styled from '@emotion/styled';
import FooterAccordion from '../FooterAccordion/FooterAccordion';

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: #111111;
`;

const FooterAccordionWrapper = styled.div`
  ${'' /* display: flex; */}
  flex-direction: column;
  width: 90%;
  height: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
  display: none;

  @media (max-width: 496px) {
    display: flex;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  padding-top: 2%;
  padding-bottom: 2%;

  @media (max-width: 496px) {
    display: none;
  }
`;

const FooterUp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 3%;
  padding-bottom: 3%;
`;

const FooterUpLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background-color: #2b2b2b;
  align-items: center;

  input {
    display: flex;
    flex-basis: 70%;
    height: 80%;
    ${'' /* justify-content:center; */}
    align-items:center;
    margin-left: 5px;
    border: none;
    background-color: #2b2b2b;
    color: white;
    padding-left: 1rem;

    &::placeholder {
      color: white;
      opacity: 50%;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    display: flex;
    flex-basis: 30%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border: none;
    color: #2b2b2b;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 496px) {
    margin-bottom: 4%;
    margin-top: 4%;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const LinksArea = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
`;

const LinkContentBox = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  ${'' /* justify-content:center; */}
  flex-basis: 25%;
  color: white;

  p {
    margin-top: 2px;
    margin-bottom: 4px;
    font-size: 15px;
    cursor: pointer;
  }
`;

const Heading = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterUp>
            <FooterUpLeft>
              <InputContainer>
                <input type="text" placeholder="Email" />
                <button>Submit</button>
              </InputContainer>
            </FooterUpLeft>
          </FooterUp>
          <FooterBottom>
            <LinksArea>
              <LinkContentBox>
                <Heading>Company</Heading>
                <p>About Us</p>
                <p>Careers</p>
                <p>Media</p>
                <p>Contact Us</p>
              </LinkContentBox>
              <LinkContentBox>
                <Heading>Resources</Heading>
                <p>Blogs</p>
                <p>Guides</p>
                <p>Interview Questions</p>
                <p>Webinars</p>
                <p>Podcasts</p>
              </LinkContentBox>
              <LinkContentBox>
                <Heading>Partner With Us</Heading>
                <p>Become an Instructor</p>
                <p>Become Training Associate</p>
                <p>Become Certification Partner</p>
                <p>Become Community Partner</p>
              </LinkContentBox>

              <LinkContentBox>
                <Heading>Help & Support</Heading>
                <p>Course Info</p>
                <p>FAQs</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Refund and cancellation Policy</p>
              </LinkContentBox>
            </LinksArea>
          </FooterBottom>
        </FooterWrapper>
        <FooterAccordionWrapper>
          <InputContainer>
            <input type="text" placeholder="Email" />
            <button>Submit</button>
          </InputContainer>
          <FooterAccordion />
        </FooterAccordionWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
