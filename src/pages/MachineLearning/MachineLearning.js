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
  title: 'Machine Learning Bootcamp',
  courseHerodata: [
    'Lorem ipsum ist non hey im isst none',
    'Lorem ipsum ist non hey im isst none',
    'Lorem ipsum ist non hey im isst none',
  ],
  price: 4500,
  courseServices: ['48+ hours', '3+', '24/7'],
  courseObjectives: [
    'Gain knowledge about basic concepts of Machine Learning ',
    'Identify machine learning techniques suitable for a given problem',
    'Solve the problems using various machine learning techniques ',
    'Apply Dimensionality reduction techniques. ',
    'Design application using machine learning techniques. ',
    'How to deploy your ML model on cloud ',
  ],
  Topics: [
    'Python Programming',
    'Computer Programming',
    'SQL',
    'Algorithms',
    'Linear Algebra',
    'Statistics',
    'Probablity',
  ],
  prerequisite: [],
  curriculum: [
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
    [
      'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.',
    ],
  ],
};

const MachineLearning = () => {
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

export default MachineLearning;
