import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const ProjectCardContainer = styled.div`
  display: flex;
  width: 300px;
  height: 200px;
  box-shadow: 0px 10px 99px #4c4a6e26;
  border: 1px solid #cecce3;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 1496px) {
    width: 270px;
    height: 230px;
  }
  @media (max-width: 496px) {
    width: 100%;
  }
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;

  .description {
    font-size: 13px;
    color: #827fa5;
  }

  .navLink {
    color: #ff5400;
    font-size: 10px;
    font-weight: 700;
    margin-top: 15px;
    margin-left: auto;
    margin-right: 10px;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 25px;
  }
`;

const Heading = styled.p`
  font-size: 20px;
  color: #4c4a6e;
  ${'' /* color:#030528; */}
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 0;
  ${'' /* padding-right: 16%; */}
  @media(max-width:496px) {
    padding-left: 0;
    font-size: 15px;
    ${'' /* text-align: center; */}
  }
`;

const ProjectCard = () => {
  return (
    <>
      <ProjectCardContainer>
        <ProjectCardWrapper>
          <Heading>Web scraping Python</Heading>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.
          </p>
          <Link to="#" className="navLink">
            View Details &rarr;
          </Link>
        </ProjectCardWrapper>
      </ProjectCardContainer>
    </>
  );
};

export default ProjectCard;
