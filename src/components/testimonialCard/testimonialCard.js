import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const TestimonialFeatureCard = styled.div`
  display: flex;
  width: 270px;
  height: 195px;
  border: 1.5px solid #cecce3;
  border-radius: 10px;
  box-shadow: 0px 10px 99px #4c4a6e26;
  justify-content: center;
  align-items: center;
  margin: 7px;

  @media (max-width: 496px) {
    margin-top: 15px;
    width: 100%;
  }
`;

const TestimonialCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  justify-content: center;
  overflow: hidden;
`;

const TestimonialCardHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  .dummy {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 15px;
    ${'' /* background-color: black; */}
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 25px;
  }
`;

const TestimonialCard = (props) => {
  const { name, text, image, description } = props;
  return (
    <>
      <TestimonialFeatureCard>
        <TestimonialCardContent>
          <TestimonialCardHeader>
            <img src={image} />
            <div className="dummy">
              <h1
                style={{
                  color: '#3c1361',
                  fontSize: '18px',
                  fontWeight: '600px',
                  marginBottom: '0',
                  marginTop: '0',
                }}
              >
                {name}
              </h1>
              <h4
                style={{
                  color: '#3c1361',
                  fontSize: '7px',
                  fontWeight: '600px',
                  marginTop: '0',
                }}
              >
                {text}
              </h4>
            </div>
          </TestimonialCardHeader>

          <p style={{ color: '#7c5295', fontSize: '12px' }}>
            {description}{' '}
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span
                style={{
                  color: ' #FF5400',
                }}
              >
                Read More
              </span>
            </Link>
          </p>
        </TestimonialCardContent>
      </TestimonialFeatureCard>
    </>
  );
};

export default TestimonialCard;
