import React from 'react';
import styled from '@emotion/styled';
import Button from '../Buttons/Button';
import logo from '../../images/blue_logo.svg';

const ToolbarLayout = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  ${'' /* background-color: #3c378e; */}
  ${'' /* position: fixed; */}
`;

const ToolbarWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
  color: black;
  cursor: pointer;

  @media (max-width: 496px) {
    img {
      width: 100%;
    }
  }
`;

const NavItemWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  height: 100%;
  color: black;
  justify-content: space-around;

  p {
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
  }

  @media (max-width: 496px) {
    display: none;
  }
`;

const Toolbar = () => {
  return (
    <>
      <ToolbarLayout>
        <ToolbarWrapper>
          <LogoWrapper>
            <img style={{ height: '30%' }} src={logo} alt="logo" />
          </LogoWrapper>
          <NavItemWrapper>
            <p>Courses</p>
            <p>Become a mentor</p>
            <p>Log In</p>
            <Button value="Signup" />
          </NavItemWrapper>
        </ToolbarWrapper>
      </ToolbarLayout>
    </>
  );
};

export default Toolbar;
