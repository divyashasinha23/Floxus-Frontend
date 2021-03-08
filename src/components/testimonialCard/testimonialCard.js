import React from 'react';
import styled from '@emotion/styled';


const TestimonialFeatureCard = styled.div`
  display: flex;
  width: 270px;
  height: 190px;
  border: 1.5px solid #cecce3;
  border-radius: 10px;
  box-shadow: 0px 10px 99px #4c4a6e26;
  justify-content: center;
  align-items: center;
  margin: 7px;

  @media (max-width: 496px) {
    margin-top: 15px;
  }
`;

const TestimonialCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  justify-content:center;
 
  `;





  const TestimonialCard = (props) =>  {
  const { name, text, description} = props;
  return (
    <>    
  
            <TestimonialFeatureCard>
              <TestimonialCardContent>
                <h1 style ={{color: '#3c1361', fontSize: '18px', fontWeight: '600px', marginLeft: '30px', marginBottom: '0', marginTop: '0'}}>
                  {name}</h1>
                <h4 style={{ color: '#3c1361', fontSize: '10px', fontWeight: '600px', marginLeft: '33px', marginTop: '0' }}>
                    {text}
               </h4> 
                  <p style={{ color: '#7c5295', fontSize: '10px' }}>
                    {description}
               </p>    
              </TestimonialCardContent>
            </TestimonialFeatureCard>
          
    </>
  );
};

export default TestimonialCard;

