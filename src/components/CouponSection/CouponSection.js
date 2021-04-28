import React, { useState } from 'react';
import styled from '@emotion/styled';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  ${'' /* background-color: #f0f0f0; */}
`;

const FormContainer = styled.div`
  display: flex;
  width: 300px;
  height: 400px;
  border: 1px solid #cecce3;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 80%;
  justify-content: center;
  align-items: center;

  img {
    height: 20%;
    border-radius: 5px;
    margin-bottom: 30px;
  }

  input {
    width: 92%;
    height: 40px;
    ${'' /* border: none; */}
    border-radius:5px;
    border: 2px solid #cecce3;
    padding-left: 10px;
    font-size: 16px;
  }
  input::placeholder {
    font-size: 13px;
  }
`;

const ExploreButton = styled.a`
  display: flex;
  width: 100%;
  height: 45px;
  background: transparent linear-gradient(85deg, #ed841f 0%, #ff5400 100%) 0% 0%
    no-repeat padding-box;
  border: none;
  border-radius: 5px;
  ${'' /* margin-top: 20px; */}
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;

  @media (max-width: 496px) {
    margin-bottom: 20px;
  }
`;

const ExploreButton1 = styled.a`
  display: flex;
  width: 100%;
  height: 45px;
  background-color: white;
  border: 2px solid #cecce3;
  border-radius: 5px;
  ${'' /* margin-top: 20px; */}
  justify-content: center;
  align-items: center;
  color: #040629;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;

  @media (max-width: 496px) {
    margin-bottom: 20px;
  }
`;

const CouponSection = () => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <MainContainer>
        <FormContainer>
          <FormWrapper>
            <img
              src="https://cdn.jsdelivr.net/gh/totorodev0032/floxus-cdn-assets@main/LOGOX.png"
              alt="logo"
            />
            <input
              type="text"
              placeholder="Enter Coupon"
              onChange={(e) => handleChange(e)}
              value={value}
            />

            {value == 'DAWorkshop10' ? (
              <ExploreButton href="https://rzp.io/l/zzvW9pROB">
                Proceed &rarr;
              </ExploreButton>
            ) : value == 'EDCBITM20' ? (
              <ExploreButton href="https://rzp.io/l/wtNjpm9">
                Proceed &rarr;
              </ExploreButton>
            ) : value == 'ESUMMIT_WIN20' ? (
              <ExploreButton href="https://rzp.io/l/wtNjpm9">
                Proceed &rarr;
              </ExploreButton>
            ) : value == 'FLOXUSBIT20' ? (
              <ExploreButton href="https://rzp.io/l/wtNjpm9">
                Proceed &rarr;
              </ExploreButton>
            ) : value == 'EDC_ESUMMIT21' ? (
              <ExploreButton href="https://rzp.io/l/zzvW9pROB">
                Proceed &rarr;
              </ExploreButton>
            ) : (
              <ExploreButton href="https://rzp.io/l/7vNaZ8D">
                Proceed &rarr;
              </ExploreButton>
            )}
            <p style={{ marginBottom: 0 }}>OR</p>
            <ExploreButton1 href="https://rzp.io/l/7vNaZ8D">
              Proceed Without Coupon &rarr;
            </ExploreButton1>
          </FormWrapper>
        </FormContainer>
      </MainContainer>
    </>
  );
};

export default CouponSection;
