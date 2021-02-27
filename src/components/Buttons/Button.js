import React from 'react';
import styled from '@emotion/styled';

const ButtonWrapper = styled.button`
  display: flex;
  width: 120px;
  height: 40px;
  border: none;
  background: transparent linear-gradient(85deg, #ed841f 0%, #ff5400 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const Button = (props) => {
  return (
    <>
      <ButtonWrapper>{props.value}</ButtonWrapper>
    </>
  );
};

export default Button;
