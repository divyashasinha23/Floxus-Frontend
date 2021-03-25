import React, { useState } from 'react';
import Modal from '../TellYourFriends/Modal';
import styled from '@emotion/styled';

const NavButtonRight = styled.div`
  @media screen and (max-width: 500px) {
    padding-left: 20px;
  }
`;

function Portal() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <NavButtonRight onClick={() => setDisplay(true)}>
        Read More
      </NavButtonRight>
      <Modal open={display} onClose={() => setDisplay(false)} />
    </>
  );
}

export default Portal;
