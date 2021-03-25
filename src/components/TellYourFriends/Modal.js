import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styled from '@emotion/styled';
import * as FaIcons from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { render } from '@testing-library/react';
import TestimonialCard from '../testimonialCard/testimonialCard';

const CardWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Card = styled.div`
  display: flex;
  position: absolute;
  top: 30%;
  left: 32%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 440px;
  height: 240px;
  background-color: white;
  z-index: 101;

  @media (max-width: 496px) {
    left: 0;
    height: 500px;
    width: 100%;
    top: 0;
    border-radius: 0;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

const CloseButton = styled(IoMdCloseCircle)`
cursor: pointer,
padding:0;
font-size: 25px;
margin-bottom: 10px;
${'' /* margin-right: 10px; */}
margin-top:10px;
color: #6d6d6d;
margin-left:10px;
cursor:pointer;
`;

function Modal({ open, onClose }) {
  if (open) {
    return ReactDom.createPortal(
      <>
        <CardWrapper>
          <Card>
            <CloseButton onClick={onClose}></CloseButton>
            <TestimonialCard />
          </Card>
        </CardWrapper>
      </>,
      document.getElementById('portal-root')
    );
  }
  return null;
}

export default Modal;
