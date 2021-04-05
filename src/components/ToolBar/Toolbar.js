import React from 'react';
import styled from '@emotion/styled';
import Buttoncomps from '../Buttons/Button1';
import logo from '../../images/blue_logo.svg';
import Drawerright from '../Drawer/Drawer';
import { Link } from 'react-router-dom';

const ToolbarLayout = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  ${'' /* background-color: #3c378e; */}
  ${'' /* position: fixed; */}

  @media(max-width:496px) {
    height: 8vh;
  }
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
      width: 180%;
    }
  }
`;

const MenuWrapper = styled.div`
  display: none;
  height: auto;
  width: auto;
  padding: 0;
  @media (max-width: 496px) {
    display: flex;
    margin-left: auto;
    ${'' /* margin-right: 5px; */}
    align-items: center;
    padding: 0;
    margin-right: -15px;
  }
`;

const NavItemWrapper = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  height: 100%;
  color: black;
  justify-content: space-around;

  .text {
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    color: #4c4a6e;
  }

  @media (max-width: 496px) {
    display: none;
  }
`;

const Toolbar = ({ value }) => {
  return (
    <>
      <ToolbarLayout>
        <ToolbarWrapper>
          <Link to="/">
            <LogoWrapper>
              <img style={{ height: '30%' }} src={logo} alt="logo" />
            </LogoWrapper>
          </Link>
          <NavItemWrapper>
            <a href="/#course" className="text">
              Courses
            </a>
            <a
              href="mailto:floxuseducation@gmail.com?subject=%20Interested%20to%20become%20an%20instructor%20at%20Floxus&body=%20Interested%20to%20become%20an%20instructor%20at%20Floxus"
              className="text"
            >
              Become a mentor
            </a>
            <a href="#footer" className="text">
              Contact Us
            </a>
            <a
              href="https://discord.gg/PV5f6aqA2w"
              target="_blank"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Buttoncomps value="Join Community" />
            </a>
          </NavItemWrapper>
          <MenuWrapper>
            {value == 'true' ? (
              <Drawerright value={value} />
            ) : (
              <Drawerright value="false" />
            )}
          </MenuWrapper>
        </ToolbarWrapper>
      </ToolbarLayout>
    </>
  );
};

export default Toolbar;
