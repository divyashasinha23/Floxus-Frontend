import React from 'react';
import styled from '@emotion/styled';
import { MdAccountBalance } from 'react-icons/md';

const ResourceContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  border: 1px solid #cecce3;
  border-radius: 3px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const ResourceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 45px;
    color: #050b75;
  }

  .lite {
    font-size: 12px;
    color: #827fa5;
    text-align: center;
  }
`;

const ExploreButton = styled.button`
  display: flex;
  width: 80%;
  height: 45px;
  background-color: #050b75;
  ${
    '' /* background: transparent linear-gradient(85deg, #ed841f 0%, #ff5400 100%) 0% 0%
    no-repeat padding-box; */
  }
  border: none;
  border-radius: 22.5px;
  ${'' /* margin-top: 20px; */}
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 15px;

  a {
    text-decoration: none;
    color: White;
  }

  @media (max-width: 496px) {
    margin-bottom: 20px;
  }
`;

const WorkshopResource = () => {
  return (
    <>
      <ResourceContainer>
        <ResourceWrapper>
          <MdAccountBalance className="icon" />
          <p className="lite">
            Access all the learning and project materials from floxus community.
          </p>
          <ExploreButton>
            {' '}
            <a href="https://discord.gg/nyZnWRM7z8" target="_blank">
              {' '}
              Join the Community
            </a>{' '}
          </ExploreButton>
        </ResourceWrapper>
      </ResourceContainer>
    </>
  );
};

export default WorkshopResource;
