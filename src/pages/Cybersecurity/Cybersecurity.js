import React from 'react';
import Toolbar from '../../components/ToolBar/Toolbar';
import Coursehero from '../../components/Coursehero/Coursehero';
import CourseOverview from '../../components/CourseOverview/CourseOverview';
import SyllabusCourse from '../../components/SyllabusCourse/SyllabusCourse';
import FAQSection from '../../components/FAQs/FAQSection';
import Footer from '../../components/Footer/Footer';
import CertificationSection from '../../components/CertificationSection/CertificationSection';
import TestimonialSection from '../../components/Testimonial/Testimonial';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

const CourseData = {
  title: 'Cybersecurity and Networking',
  courseHerodata: [
    'Lorem ipsum ist non hey im isst none',
    'Lorem ipsum ist non hey im isst none',
    'Lorem ipsum ist non hey im isst none',
  ],
  price: 3000,
  courseServices: ['48+ hours', '3+', '24/7'],
  courseObjectives: [
    'Install Python and write your first program',
    'Describe the basics of the Python programming language',
    'Use variables to store, retrieve and calculate information',
    'Use variables to store, retrieve and calculate information',
  ],
  Topics: ['Linux', 'Networking', 'Penetration Testing', 'Web security'],
  prerequisite: [],
  curriculum: [
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
  ],
};

const Cybersecurity = () => {
  return (
    <>
      <Toolbar />
      <Coursehero courseData={CourseData} />
      <CourseOverview
        courseObjectives={CourseData.courseObjectives}
        topics={CourseData.Topics}
        prerequisite={CourseData.prerequisite}
      />
      <SyllabusCourse curriculum={CourseData.curriculum} />
      <CertificationSection />
      <ProjectSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Cybersecurity;
