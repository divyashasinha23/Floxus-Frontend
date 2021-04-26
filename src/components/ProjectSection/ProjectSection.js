import React from 'react';
import styled from '@emotion/styled';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  align-items: center;
  margin-top: 10px;
`;

const Heading = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 496px) {
    width: 100%;
  }
`;

const ProjectSection = ({ projects }) => {
  return (
    <>
      <ProjectContainer>
        <ProjectWrapper>
          <Header>
            <Heading>Projects &rarr;</Heading>
          </Header>
          <ProjectCardWrapper>
            {projects.map((project) => (
              <ProjectCard project={project} />
            ))}
          </ProjectCardWrapper>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
