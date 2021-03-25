import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import * as CgIcons from 'react-icons/cg';
import styled from '@emotion/styled';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import KeyboardArrowRightTwoToneIcon from '@material-ui/icons/KeyboardArrowRightTwoTone';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = styled.div`
  display: flex;
  width: 100%;
  ${'' /* background-color: black; */}
  align-items: center;
  height: 90px;
  padding-left: 20px;
  padding-right: 20px;
`;
const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  ${'' /* background-color: black; */}
  align-items: center;
  justify-content: center;
  height: 60px;
  border-top: 1px solid #cecce3;

  .link {
    display: flex;
    height: 30px;
    width: 100%;
    text-decoration: none;
    color: #212121;
  }

  .content {
    display: flex;
    height: 30px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    ${'' /* background-color: black; */}
  }

  p {
    font-size: 17px;
    font-weight: 600;
    margin-left: 30px;
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 0.8px;
  background-color: #cecce3;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;

  .link {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
  }
`;

const JoinUsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  width: 80%;
  height: 50px;
  border-radius: 25px;
  margin-top: 30px;
  background: transparent linear-gradient(85deg, #ed841f 0%, #ff5400 100%) 0% 0%
    no-repeat padding-box;
  font-size: 17px;
  font-weight: 600;
`;

const useStyles = makeStyles({
  list: {
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullList: {
    width: 'auto',
  },
});

export default function Drawerright({ value }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        // style={{
        //   display: 'flex',
        //   justifyContent: 'center',
        //   flexDirection: 'column',
        // }}
      >
        {/* <IoIcons.IoMdCloseCircle
          style={{
            fontSize: '30px',
            color: 'purple',
            marginTop: '15px',
            marginLeft: '5px',
          }}
        />
        <List>
          {['Courses', 'Contact Us', 'Become a Mentor'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
        <Header>
          <CancelTwoToneIcon style={{ color: 'blue', fontSize: '30px' }} />
        </Header>
        <ItemContainer>
          {value == 'true' ? (
            <AnchorLink href="#course" className="link">
              <div className="content">
                <p>Courses</p>
                <KeyboardArrowRightTwoToneIcon
                  style={{ color: '#FF5400', marginRight: '40px' }}
                />
              </div>
            </AnchorLink>
          ) : (
            <a href="/#course" className="link">
              <div className="content">
                <p>Courses</p>
                <KeyboardArrowRightTwoToneIcon
                  style={{ color: '#FF5400', marginRight: '40px' }}
                />
              </div>
            </a>
          )}
        </ItemContainer>
        <ItemContainer>
          <a href="#footer" className="link">
            <div className="content">
              <p>Contact Us</p>
              <KeyboardArrowRightTwoToneIcon
                style={{ color: '#FF5400', marginRight: '40px' }}
              />
            </div>
          </a>
        </ItemContainer>
        <ItemContainer>
          <div className="content">
            <p>Become a Mentor</p>
            <KeyboardArrowRightTwoToneIcon
              style={{ color: '#FF5400', marginRight: '40px' }}
            />
          </div>
        </ItemContainer>
        <HorizontalLine />
        <ButtonContainer>
          <Link to="/join-us" className="link">
            <JoinUsButton>Join Us</JoinUsButton>
          </Link>
        </ButtonContainer>
      </div>
    </>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {' '}
            <CgIcons.CgMenuLeftAlt style={{ fontSize: '30px' }} />{' '}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
