import React from 'react';
import styled from '@emotion/styled';
import FooterAccordion from '../FooterAccordion/FooterAccordion';
import FloxusLogo from '../../images/floxuswhite.png';
import * as FaIcons from 'react-icons/fa';
import { db } from '../../firebase';

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
  flex-direction: column;
  flex-basis: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .textContainer {
    color: white;
    display: flex;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  background-color: #2b2b2b;
  align-items: center;

  form {
    display: flex;
    height: auto;
    width: 100%;
    align-items: center;
  }

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
    height: 42px;
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
  flex-direction: column;
  width: 100%;
  height: auto;
`;

const LinksArea = styled.div`
  display: flex;
  height: 250px;
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

const FooterContact = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;

  @media (max-width: 496px) {
    flex-direction: column;
    height: auto;
  }
`;

const FooterContactLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  align-items: center;

  img {
    width: 30%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 496px) {
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
    }
  }
`;

const FooterContactRight = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100%;
  align-items: center;

  p {
    color: white;
    margin-left: 50px;
  }

  .icon {
    color: white;
    margin-left: 30px;
  }

  @media (max-width: 496px) {
    flex-direction: column;

    p {
      margin-left: 0;
    }

    .icon {
      margin-left: 15px;
    }

    .logo_wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    .copyright {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  ${'' /* background-color: red; */}
`;

const Heading = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('NewsLetter')
      .add({
        email: email,
      })
      .then(() => setSubscribed(true))
      .catch((error) => alert(error));

    setEmail(' ');
  };
  return (
    <>
      <FooterContainer id="footer">
        <FooterWrapper>
          <FooterUp>
            <FooterUpLeft>
              <InputContainer>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  <button type="submit">Submit</button>
                </form>
              </InputContainer>
              {subscribed ? (
                <div className="textContainer">
                  <p>Thanks for subscribing!!</p>
                </div>
              ) : null}
            </FooterUpLeft>
          </FooterUp>
          <FooterBottom>
            <LinksArea>
              <LinkContentBox>
                <Heading>Company</Heading>
                <p>About Us</p>
                <p>Careers</p>
                <p>Media</p>
              </LinkContentBox>
              {/* <LinkContentBox>
                <Heading>Resources</Heading>
                <p>Blogs</p>
                <p>Guides</p>
                <p>Interview Questions</p>
                <p>Webinars</p>
                <p>Podcasts</p>
              </LinkContentBox> */}
              <LinkContentBox>
                <Heading>Partner With Us</Heading>
                <p>Become an Instructor</p>
                <p>Become Training Associate</p>
                <p>Become Certification Partner</p>
              </LinkContentBox>

              <LinkContentBox>
                <Heading>Help & Support</Heading>
                <p>Course Info</p>
                <p>FAQs</p>
                <p>Refund and cancellation Policy</p>
              </LinkContentBox>
              <LinkContentBox>
                <Heading>Contact Us</Heading>
                <p>Email : floxuseducation@gmail.com</p>
                <p>Phone : +91 9123499293</p>
              </LinkContentBox>
            </LinksArea>
            <FooterContact>
              <FooterContactLeft>
                <img src={FloxusLogo} />
              </FooterContactLeft>
              <FooterContactRight>
                <div className="logo_wrapper">
                  <FaIcons.FaFacebookF className="icon" />
                  <FaIcons.FaTwitter className="icon" />
                  <FaIcons.FaInstagramSquare className="icon" />
                </div>
                <div>
                  <p>&copy; 2021 Floxus Education pvt. Ltd.</p>
                </div>
              </FooterContactRight>
            </FooterContact>
          </FooterBottom>
        </FooterWrapper>
        <FooterAccordionWrapper>
          <InputContainer>
            <input type="text" placeholder="Email" />
            <button>Submit</button>
          </InputContainer>
          <FooterAccordion />
          <FooterContact>
            <FooterContactLeft>
              <img src={FloxusLogo} />
            </FooterContactLeft>
            <FooterContactRight>
              <div className="logo_wrapper">
                <FaIcons.FaFacebookF
                  className="ico"
                  style={{ color: 'white' }}
                />
                <FaIcons.FaTwitter className="icon" />
                <FaIcons.FaInstagramSquare className="icon" />
              </div>
              <div className="copyright">
                <p>&copy; 2021 Floxus Education pvt. Ltd.</p>
              </div>
            </FooterContactRight>
          </FooterContact>
        </FooterAccordionWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
